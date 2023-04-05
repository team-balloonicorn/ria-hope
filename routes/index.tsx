import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ria Hope</title>
      </Head>
      <div class="page">
        <div class="main-page">
          <header>
            <section class="logo">
              <div class="logo-graphic">
                <svg
                  viewBox="0 0 182 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Component 5">
                    <path
                      id="Ellipse 2"
                      d="M115.44 24.569C115.44 38.138 104.381 49.1379 90.74 49.1379C77.0986 49.1379 66.04 38.138 66.04 24.569C66.04 10.9999 77.0986 0 90.74 0C104.381 0 115.44 10.9999 115.44 24.569Z"
                      fill="#933837"
                    />
                    <rect
                      id="Rectangle 23"
                      y="59.4828"
                      width="182"
                      height="4.65517"
                      fill="#933837"
                    />
                    <rect
                      id="Rectangle 24"
                      y="68.2759"
                      width="182"
                      height="4.65517"
                      fill="#933837"
                    />
                  </g>
                </svg>
              </div>
              <div class="logo-text">
                <svg viewBox="0 0 120 38">
                  <text
                    x="0"
                    y="25"
                    textLength="100%"
                    lengthAdjust="spacingAndGlyphs"
                    style="
              text-align: right; 
              letter-spacing: 2px;
          "
                  >
                    ria hope
                  </text>
                </svg>
              </div>
            </section>
            <section class="title-section">
              <div class="title">
                <h2>
                  helping you <br></br> find ground
                </h2>
              </div>
              <div class="dot">
                <svg
                  viewBox="0 0 182 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M115.4 36.569C115.4 50.138 104.341 61.1379 90.7 61.1379C77.0586 61.1379 66 50.138 66 36.569C66 22.9999 77.0586 12 90.7 12C104.341 12 115.4 22.9999 115.4 36.569Z"
                    fill="#933837"
                  />
                </svg>
              </div>
            </section>
            <section class="subtitle-section">
              <div class="subtitle">
                <h3>
                  energy work &amp; earthing<br></br>
                  intimacy &amp; sexuality support<br></br>
                  nature recconection<br></br>
                  herbal remedies<br></br>
                  embodiment<br></br>
                </h3>
              </div>
              <div class="dot">
                <svg
                  viewBox="0 0 182 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M115.4 36.569C115.4 50.138 104.341 61.1379 90.7 61.1379C77.0586 61.1379 66 50.138 66 36.569C66 22.9999 77.0586 12 90.7 12C104.341 12 115.4 22.9999 115.4 36.569Z"
                    fill="#933837"
                  />
                </svg>
              </div>
            </section>
          </header>
          <section class="info-boxes">
            <div class="box" id="box-one">
              <div class="box-image"></div>
              <div class="box-text">
                <h2>prices</h2>
              </div>
            </div>
            <div class="box" id="box-two">
              <div class="box-image"></div>
              <div class="box-text">
                <h2>about</h2>
              </div>
            </div>
            <div class="box" id="box-three">
              <div class="box-image">
              </div>
              <div class="box-text">
                <h2>contact</h2>
              </div>
            </div>
          </section>
        </div>
        <footer>
          <a href="mailto:riahopetherapies@gmail.com" class="shadow">
            <h2>riahopetherapies@gmail.com</h2>
          </a>
        </footer>
      </div>
    </>
  );
}
