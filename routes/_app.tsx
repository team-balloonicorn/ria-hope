import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Ria Hope Website" />
        <link rel="stylesheet" href={asset("/style.css")} />
        <link rel="shortcut icon" type="image/svg" href="/logo-small-svg.svg" />
      </Head>
      <props.Component />
    </>
  );
}
