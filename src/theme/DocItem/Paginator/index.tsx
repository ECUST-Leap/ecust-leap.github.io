import React from "react";
import Paginator from "@theme-original/DocItem/Paginator";
import type PaginatorType from "@theme/DocItem/Paginator";
import type { WrapperProps } from "@docusaurus/types";
import { useColorMode } from "@docusaurus/theme-common";
import Giscus from "@giscus/react";

type Props = WrapperProps<typeof PaginatorType>;

export default function PaginatorWrapper(props: Props): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <>
      <Paginator {...props} />
      <br></br>
      <Giscus
        repo="ECUST-Leap/ecust-leap.github.io"
        repoId="R_kgDOIzvQtQ"
        category="评论区"
        categoryId="DIC_kwDOIzvQtc4CT-SP"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={colorMode}
        lang="zh-CN"
        loading="lazy"
      />
    </>
  );
}
