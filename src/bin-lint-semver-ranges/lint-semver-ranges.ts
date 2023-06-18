import * as Context from '@effect/data/Context';
import { pipe } from '@effect/data/Function';
import * as Effect from '@effect/io/Effect';
import { CliConfigTag, type CliConfig } from '../config/types';
import { createSemverRangesProgram } from '../create-program/semver-ranges';
import { createEnv } from '../env/create-env';
import type { DefaultEnv } from '../env/default-env';
import { exitIfInvalid } from '../env/exit-if-invalid';
import { EnvTag } from '../env/tags';
import { createErrorHandlers } from '../error-handlers/create-error-handlers';
import { defaultErrorHandlers } from '../error-handlers/default-error-handlers';
import { getContext } from '../get-context';
import { lintSemverRangesEffects } from './effects';

export function lintSemverRanges(cli: Partial<CliConfig>, env: DefaultEnv) {
  return pipe(
    getContext(),
    Effect.flatMap((ctx) => createSemverRangesProgram(ctx, lintSemverRangesEffects)),
    Effect.flatMap(exitIfInvalid),
    Effect.catchTags(createErrorHandlers(defaultErrorHandlers)),
    Effect.provideContext(
      pipe(Context.empty(), Context.add(CliConfigTag, cli), Context.add(EnvTag, createEnv(env))),
    ),
  );
}
