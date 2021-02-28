// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Logger, Drive, Mtrac } = initSchema(schema);

export {
  Logger,
  Drive,
  Mtrac
};