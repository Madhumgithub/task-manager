"use client";
import "./globals.css";

import Head from "next/head";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>My Next.js App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
