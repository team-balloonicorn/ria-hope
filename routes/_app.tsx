import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Ria Hope Website" />
        <link rel="stylesheet" href={asset("/style.css")} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif+Display:ital,wght@0,400;0,900;1,400;1,900&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Playfair+Display+SC&display=swap"
          rel="stylesheet"
        />
      </Head>
      <props.Component />
    </>
  );
}
