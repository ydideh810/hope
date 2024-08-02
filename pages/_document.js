import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <style>
          {`
            body {
              background-image: url('bigspace.png'); 
              background-size: cover;
              background-position: center;
            }
          `}
        </style>
      </Head>
      <body className="bg-llama bg-cover bg-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
