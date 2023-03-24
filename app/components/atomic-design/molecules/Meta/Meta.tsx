/**
 * Import react dependencies
 */
import { ReactElement } from "react";

/**
 * Import external dependencies
 */
import parse from "html-react-parser";

/**
 * Render the Meta component.
 */
export default function Meta({ seo }: MetaProps): ReactElement {
  // Combine robots data.
  const robots = [
    ...(seo?.metaRobotsNofollow ? [seo.metaRobotsNofollow] : []),
    ...(seo?.metaRobotsNoindex ? [seo.metaRobotsNoindex] : []),
  ];

  const fullHead = parse(String(seo?.fullHead));

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="robots" content={robots.join(", ")} />
      <title>{seo?.title}</title>
      {fullHead}
      <meta name="msapplication-TileColor" content="#fffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#fff" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
    </>
  );
}

export interface MetaProps {
  seo?: {
    title?: string;
    fullHead?: string;
    metaRobotsNofollow?: string;
    metaRobotsNoindex?: string;
  };
}
