import "./globals.css";
import type { Metadata } from "next";
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
  title: "Criss Cross",
  description: "Whole sale distributors for household items",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
