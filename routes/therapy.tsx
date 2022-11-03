import { Head } from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.tsx";

const testimonials = [
  {
    author: "Dave",
    text:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services",
  },
  {
    author: "Sara",
    text:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services",
  },
  {
    author: "Bilal",
    text:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services",
  },
];

export default function Home() {
  return (
    <>
      <Navigation
        headings={["work with me", "about", "testimonials", "contact"]}
      />
      <Head>
        <title>Ria Hope Therapy</title>
      </Head>
      <main>
        <div class="therapy-title">
          <p>Ria Hope Therapy</p>
        </div>
        <WorkWithMeSection />
        <TestimonialsSection />
      </main>
    </>
  );
}

// TODO work with me section like testimonials below with images

function TestimonialsSection() {
  return (
    <aside class="testimonial">
      <a id="testimonials">
        <h2>Testimonials</h2>
      </a>
      <ul>
        <div class="testimonial-container">
          <div class="testimonials">
            {testimonials.map((testimonial) => (
              <li>
                <figure>
                  <figcaption>{testimonial.author}</figcaption>
                  <blockquote>{testimonial.text}</blockquote>
                </figure>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </aside>
  );
}

const workWithMe = [
  {
    src: "work-image-1.jpeg",
    alt: "white girl in denim looking thoughtful",
    caption: "Personal dvmntp sessions",
  },
  {
    src: "work-image-2.jpeg",
    alt: "girl with angel wings in sunset looking dreamy",
    caption: "Online courses workshops",
  },
  {
    src: "work-image-3.jpeg",
    alt: "girl in beautiful garden looking into a mirror curiously",
    caption: "BDSM & kink for couples",
  },
];

function WorkWithMeSection() {
  return (
    <aside class="work-with-me">
      <a id="work-with-me">
        <h2>Work With Me</h2>
      </a>
      <ul>
        <div class="work-with-me-container">
          <div class="work-with-me-sections">
            {workWithMe.map((section) => (
              <li>
                <figure>
                  <figcaption>{section.caption}</figcaption>
                  <img src={section.src} alt={section.alt}></img>
                </figure>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </aside>
  );
}
