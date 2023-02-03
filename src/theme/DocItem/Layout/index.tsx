import React from "react";
import Layout from "@theme-original/DocItem/Layout";
import type LayoutType from "@theme/DocItem/Layout";
import type { WrapperProps } from "@docusaurus/types";
import Giscus from "@giscus/react";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <Layout {...props} />
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
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
      />
    </>
  );
}
