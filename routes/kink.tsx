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
          <section class="image-left">
            <div>
              <h2>The Title Project</h2>
              <p>
                The project is a thriving and diverse community that aims to
                tackle the inequality and inaccessibility seen in 'wellness' and
                'sacred sexuality' spaces. We run workshops, events and
                discussions online and in-person at various locations across the
                UK. Our community is based on the ethos of peer-led learning and
                resource sharing. It is a space where all experiences of
                sexuality are welcomed and you are encouraged to learn and grow
                alongside your peers: supporting one other in developing better
                awareness of yourself and your sexuality. We talk about consent,
                boundaries, communication skills, BDSM & kink, body-confidence
                and more.
              </p>
            </div>
            <div class="image-container">
              <img
                src="image-left.jpeg"
                alt="Ria smiles holding a mug of tea or coffee"
              />
              <img
                src="border-kink.png"
                alt="Brushstroke Paint"
                id="splat"
              >
              </img>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}
