import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import type BlogPostPaginatorType from '@theme/BlogPostPaginator';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof BlogPostPaginatorType>;

export default function BlogPostPaginatorWrapper(props: Props): JSX.Element {
  return (
    <>
      <BlogPostPaginator {...props} />
    </>
  );
}
