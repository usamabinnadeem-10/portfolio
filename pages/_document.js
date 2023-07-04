import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="light">
      <Head>
        <html data-theme="light" />
        <meta
          name="description"
          content="A fullstack web developer with around 5 years of industry experience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
