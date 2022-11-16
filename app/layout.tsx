// Import global styles
import "normalize.css/normalize.css";
import "../scss/base.scss";
import "../scss/themes/default.scss";

// Import component dependencies
import Page from "@/components/templates/Page";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
