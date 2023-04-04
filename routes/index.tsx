import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ria Hope</title>
      </Head>
      <header>
        <div class="logo">
          <img src="logo-small-svg.svg" alt="Ria Hope logo" />
        </div>
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
      <section class="nsfw">
        <div class="nsfw-text">
          <h3>
            the following page contents may not be suitable for work (NSFW)
          </h3>
          <h3>
            We recomend the following services for those over 18 years of age.
            Please click continue to acknowledge that you would like to proceed
          </h3>
        </div>
        <div class="button">
          <a href="/therapy">Continue</a>
        </div>
      </section>
    </>
  );
}
