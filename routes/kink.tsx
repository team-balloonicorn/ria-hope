import { Head } from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ria Hope Kink</title>
      </Head>
      <body class="kink">
        <Navigation
          headings={["thing1", "thing2"]}
          styleModifier="kink"
        />
        <main>
          <div class="page-title kink">
            <p>Ria Hope Kink</p>
          </div>
        </main>
      </body>
    </>
  );
}
