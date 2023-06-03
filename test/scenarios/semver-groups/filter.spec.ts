import { lintSemverRangesCli } from '../../../src/bin-lint-semver-ranges/lint-semver-ranges-cli';
import { lintCli } from '../../../src/bin-lint/lint-cli';
import { listCli } from '../../../src/bin-list/list-cli';
import { setSemverRangesCli } from '../../../src/bin-set-semver-ranges/set-semver-ranges-cli';
import { mockPackage } from '../../mock';
import { createScenario } from '../lib/create-scenario';

describe('semverGroups', () => {
  describe('has mismatches but they are excluded by --filter', () => {
    [
      () =>
        createScenario(
          [
            {
              path: 'packages/a/package.json',
              before: mockPackage('a', { otherProps: { packageManager: 'foo@2.0.0' } }),
              after: mockPackage('a', { otherProps: { packageManager: 'foo@*' } }),
            },
            {
              path: 'packages/b/package.json',
              before: mockPackage('b', { otherProps: { packageManager: 'bar@*' } }),
              after: mockPackage('b', { otherProps: { packageManager: 'bar@*' } }),
            },
          ],
          {
            customTypes: {
              packageManager: {
                strategy: 'name@version',
                path: 'packageManager',
              },
            },
            filter: 'matchesNone',
          },
        ),
      () =>
        createScenario(
          [
            {
              path: 'packages/a/package.json',
              before: mockPackage('a', { otherProps: { deps: { custom: { foo: '2.0.0' } } } }),
              after: mockPackage('a', { otherProps: { deps: { custom: { foo: '*' } } } }),
            },
            {
              path: 'packages/b/package.json',
              before: mockPackage('b', { otherProps: { deps: { custom: { bar: '*' } } } }),
              after: mockPackage('b', { otherProps: { deps: { custom: { bar: '*' } } } }),
            },
          ],
          {
            customTypes: {
              custom: {
                strategy: 'versionsByName',
                path: 'deps.custom',
              },
            },
            filter: 'matchesNone',
          },
        ),
      () =>
        createScenario(
          [
            {
              path: 'packages/a/package.json',
              before: mockPackage('a', { otherProps: { deps: { custom: { foo: '2.0.0' } } } }),
              after: mockPackage('a', { otherProps: { deps: { custom: { foo: '*' } } } }),
            },
            {
              path: 'packages/b/package.json',
              before: mockPackage('b', { otherProps: { deps: { custom: { bar: '*' } } } }),
              after: mockPackage('b', { otherProps: { deps: { custom: { bar: '*' } } } }),
            },
          ],
          {
            customTypes: {
              foo: {
                strategy: 'version',
                path: 'deps.custom.foo',
              },
              bar: {
                strategy: 'version',
                path: 'deps.custom.bar',
              },
            },
            filter: 'matchesNone',
          },
        ),
      ...['deps', 'devDeps', 'overrides', 'peerDeps', 'pnpmOverrides', 'resolutions'].map(
        (type: string) => () =>
          createScenario(
            [
              {
                path: 'packages/a/package.json',
                before: mockPackage('a', { [type]: ['foo@2.0.0'] }),
                after: mockPackage('a', { [type]: ['foo@*'] }),
              },
              {
                path: 'packages/b/package.json',
                before: mockPackage('b', { [type]: ['bar@*'] }),
                after: mockPackage('b', { [type]: ['bar@*'] }),
              },
            ],
            {
              filter: 'matchesNone',
            },
          ),
      ),
    ].forEach((getScenario) => {
      describe('semverGroup.inspect()', () => {
        test('should identify as being filtered out', () => {
          const scenario = getScenario();
          expect(scenario.report.semverGroups).toEqual([
            [
              expect.objectContaining({
                isValid: true,
                name: 'foo',
                status: 'FILTERED_OUT',
              }),
              expect.objectContaining({
                isValid: true,
                name: 'bar',
                status: 'FILTERED_OUT',
              }),
            ],
          ]);
        });
      });

      describe('set-semver-ranges', () => {
        test('should report as valid', () => {
          const scenario = getScenario();
          setSemverRangesCli({}, scenario.disk);
          expect(scenario.disk.process.exit).not.toHaveBeenCalled();
          expect(scenario.disk.writeFileSync).not.toHaveBeenCalled();
          expect(scenario.log.mock.calls).toEqual([
            scenario.files['packages/a/package.json'].logEntryWhenUnchanged,
            scenario.files['packages/b/package.json'].logEntryWhenUnchanged,
          ]);
        });
      });

      describe('lint-semver-ranges', () => {
        test('should report as valid', () => {
          const scenario = getScenario();
          lintSemverRangesCli({}, scenario.disk);
          expect(scenario.disk.process.exit).not.toHaveBeenCalled();
        });
      });

      describe('lint', () => {
        test('should report as valid', () => {
          const scenario = getScenario();
          lintCli({}, scenario.disk);
          expect(scenario.disk.process.exit).not.toHaveBeenCalled();
        });
      });

      describe('list', () => {
        test('should report as valid', () => {
          const scenario = getScenario();
          listCli({}, scenario.disk);
          expect(scenario.disk.process.exit).not.toHaveBeenCalled();
        });
      });
    });
  });
});