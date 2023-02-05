import React from "react";
import BlogPostPaginator from "@theme-original/BlogPostPaginator";
import type BlogPostPaginatorType from "@theme/BlogPostPaginator";
import type { WrapperProps } from "@docusaurus/types";
import { useColorMode } from "@docusaurus/theme-common";
import Giscus from "@giscus/react";

type Props = WrapperProps<typeof BlogPostPaginatorType>;

export default function BlogPostPaginatorWrapper(props: Props): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <>
      <BlogPostPaginator {...props} />
      <br></br>
      <Giscus
        repo="ECUST-Leap/ecust-leap.github.io"
        repoId="R_kgDOIzvQtQ"
        category="公告"
        categoryId="DIC_kwDOIzvQtc4CT8lW"
        mapping="title"
        strict="1"
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
