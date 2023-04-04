import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ria Hope</title>
      </Head>
      <div class="logo">
        <div class="logo-graphic">
          <svg viewBox="0 0 158 38">
            <img src="logo-small-svg.svg" alt="Ria Hope logo" />
          </svg>
        </div>
        <div class="logo-text">
          <h1>
            <svg viewBox="0 0 158 38">
              <text
                x="3"
                y="25"
                textLength="100%"
                lengthAdjust="spacingAndGlyphs"
                style="
              text-align: right; 
              letter-spacing: 6px;
          "
              >
                ria hope
              </text>
            </svg>
          </h1>
        </div>
      </div>
      <header>
        <div class="title">
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
