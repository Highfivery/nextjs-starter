/**
 * Import react dependencies
 */
import { ReactElement, ReactNode } from "react";

/**
 * Import application global styles/CSS framework below.
 */
import "@/styles/atomic-styles/style.scss";

export default function RootLayout({
  children,
}: {
  children: ReactElement | ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
