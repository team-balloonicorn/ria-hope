import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ria Hope</title>
      </Head>
      <div>
        <p>
          <a href="/kink">Kink</a>
        </p>
        <p>
          <a href="/therapy">Therapy</a>
        </p>
      </div>
    </>
  );
}
