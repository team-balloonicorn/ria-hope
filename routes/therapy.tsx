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
        <TestimonialsSection />
      </main>
    </>
  );
}

function TestimonialsSection() {
  return (
    <aside class="testimonial">
      <a id="#testimonials">
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
