import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creation",
  description: "The connected workspace where better, faster work happens",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/c.svg",
        href: "/c.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/c.svg",
        href: "/c.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="creation-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
