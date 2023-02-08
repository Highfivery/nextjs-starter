// Import React.js dependencies
import { ReactElement, ReactNode } from "react";

/**
 * Import provider dependencies
 */
import { Providers } from "../providers";

export default async function RootLayout({
  children,
}: {
  children: ReactElement | ReactNode;
}) {
  //const data = await queryDefaultPageData();
  //console.log(data);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
