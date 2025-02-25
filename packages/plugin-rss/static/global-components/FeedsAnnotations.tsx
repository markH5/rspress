/// <reference path="../../index.d.ts" />

import type { LinkHTMLAttributes } from 'react';
import { Helmet, usePageData } from 'rspress/runtime';

export default function FeedsAnnotations() {
  const { page } = usePageData();
  const feeds = page.feeds || [];

  return (
    <Helmet>
      {feeds.map(({ language, url, mime }) => {
        const props: LinkHTMLAttributes<HTMLLinkElement> = {
          rel: 'alternate',
          type: mime,
          href: url,
        };
        if (language) {
          props.hrefLang = language;
        }
        // biome-ignore lint/correctness/useJsxKeyInIterable: no key props
        return <link {...props} />;
      })}
    </Helmet>
  );
}
