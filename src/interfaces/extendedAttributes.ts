import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Attributes2 } from './book';

export interface ExtendedAttributes extends Attributes2 {
  renderedDescription: MDXRemoteSerializeResult;
}