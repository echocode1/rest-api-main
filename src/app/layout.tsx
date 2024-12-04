import { ReactNode } from "react";
import "./styles/globals.css";
import ProviderWrapper from "@/ui/modules/partials/ProviderWrapper";

export const metadata = {
  title: "Rest countries API",
  description:
    "It displays countries with vital info and key heritage of each country",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
