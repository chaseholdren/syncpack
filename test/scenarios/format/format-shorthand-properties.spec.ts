import * as Effect from '@effect/io/Effect';
import { formatCli } from '../../../src/bin-format/format-cli';
import { mockPackage } from '../../mock';
import { createScenario } from '../lib/create-scenario';

/** "bugs" and "repository" can safely use equivalent shorthands */
describe('format', () => {
  it('uses shorthand format for "bugs" and "repository"', () => {
    const scenario = getScenario();
    Effect.runSync(formatCli(scenario.config.cli, scenario.env));
    expect(scenario.env.writeFileSync.mock.calls).toEqual([
      scenario.files['packages/a/package.json'].diskWriteWhenChanged,
    ]);
  });

  function getScenario() {
    return createScenario(
      [
        {
          path: 'packages/a/package.json',
          before: mockPackage('a', {
            omitName: true,
            otherProps: {
              bugs: { url: 'https://github.com/User/repo/issues' },
              repository: { url: 'git://gitlab.com/User/repo', type: 'git' },
            },
          }),
          after: mockPackage('a', {
            omitName: true,
            otherProps: {
              bugs: 'https://github.com/User/repo/issues',
              repository: 'git://gitlab.com/User/repo',
            },
          }),
        },
      ],
      { cli: {}, rcFile: {} },
    );
  }
});
