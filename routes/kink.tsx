import { Head } from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ria Hope Kink</title>
      </Head>
      {/* TODO Add link to home OR re-type navigation */}
      <Navigation headings={["HOME", "thing1", "thing2"]} />
      <div>
        <p>Ria Hope Kink</p>
      </div>
    </>
  );
}
