import { ModelOptions, ModelPopulateOptions } from 'mongoose';

export interface BaseFindOptions extends ModelOptions {
  lean?: boolean;
  populate?: string | ModelPopulateOptions;
  maxTimeMS?: number;
  projection?: Record<string, unknown>;
}

export type DeleteOptions = ModelOptions;

export interface FindAndDeleteOptions extends BaseFindOptions, DeleteOptions {
  sort?: Record<string, unknown> | string;
}

export interface UpdateOptions extends DeleteOptions {
  multi?: boolean;
  upsert?: boolean;
  setDefaultsOnInsert?: boolean;
  timestamps?: boolean;
  omitUndefined?: boolean;
  overwrite?: boolean;
  runValidators?: boolean;
  context?: string;
  multipleCastError?: boolean;
}

export interface FindAndUpdateOptions extends FindAndDeleteOptions, UpdateOptions {
  new?: boolean;
  fields?: Record<string, unknown> | string;
}
