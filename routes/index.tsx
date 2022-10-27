import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ria Hope</title>
      </Head>
      <nav id="index">
        <p>
          <a href="/therapy">Therapy</a>
        </p>
        <p>
          <a id="kinklink" href="/kink">kink</a>
        </p>
      </nav>
      <header>
        <div class="title">
          <h1>
            <svg viewBox="0 0 158 26">
              <text
                x="6"
                y="25"
                textLength="100%"
                lengthAdjust="spacingAndGlyphs"
                style="
              text-align: right; 
              letter-spacing: 6px;
          "
              >
                RIA HOPE
              </text>
            </svg>
          </h1>
          <h2>
            Therapy, sexuality,<br></br>
            intimacy, queer identity
          </h2>
        </div>
        <div class="image">
          <img src="ria-profile.jpg" alt="Ria Hope smiling" />
        </div>
      </header>
    </>
  );
}
