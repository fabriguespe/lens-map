import { Options, MetaData } from './types';
export * from './types';
declare const getMetaData: (input: string | Partial<Options>, inputOptions?: Partial<Options>) => Promise<MetaData>;
export default getMetaData;
