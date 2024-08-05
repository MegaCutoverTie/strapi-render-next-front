import { MDXRemote, MDXRemoteSerializeResult  } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import { Book } from "@/interfaces/book";
import PageCardStore from "./PageCardStore";
import { ExtendedAttributes } from "@/interfaces/extendedAttributes";

interface Props {
    book: Book,
}

const PageCardStoreServer = async({ book }: Props) => {
    
  const { attributes } = book
  const { description, ...restOfBook } = attributes;

  const renderedDescription: MDXRemoteSerializeResult = await serialize(description);

  const extendedAttributes: ExtendedAttributes = { ...restOfBook, description, renderedDescription };

  return (
    <PageCardStore book={{...book, attributes: extendedAttributes }} />
  );
};

export default PageCardStoreServer;
