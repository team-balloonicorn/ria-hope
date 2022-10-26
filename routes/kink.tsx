import { Head } from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ria Hope Kink</title>
      </Head>
      <Navigation headings={["thing1", "thing2"]} />
      <div>
        <p>Ria Hope Kink</p>
      </div>
    </>
  );
}
