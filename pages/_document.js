import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <style>
          {`
            body {
              background-image: url('/bigspace.png'); 
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            }
          `}
        </style>
      </Head>
      <body className="bg-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
