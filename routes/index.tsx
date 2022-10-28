import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ria Hope</title>
      </Head>
      <nav id="index">
        <ul>
          <li>
            <a href="/therapy">Therapy</a>
          </li>
          <li>
            <a id="kinklink" href="#age-confirmation">kink</a>
            {/* <a id="kinklink" href="/kink">kink</a> */}
          </li>
        </ul>
      </nav>

      <div id="age-confirmation" class="overlay">
        <div class="popup">
          <h2>I confirm I am over 18</h2>
          <div class="content">
            The following contents and services are recommended for adults only
            and may be NSFW
          </div>
          <button>
            <a class="continue" href="/kink">Continue</a>
          </button>
        </div>
      </div>

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
