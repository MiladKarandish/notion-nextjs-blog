"use client";

import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";
import { Collection } from "react-notion-x/build/third-party/collection";
import Image from "next/image";

export interface Props {
  recordMap: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const NotionRendererProvider = ({ recordMap }: Props) => {
  return (
    <NotionRenderer
      recordMap={recordMap}
      components={{
        Collection,
        Code,
        Equation,
        Modal,
        Pdf,
        Header: () => null,
        Image: Image,
      }}
      // fullPage
      disableHeader
    />
  );
};

export default NotionRendererProvider;
