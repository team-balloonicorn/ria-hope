import { Head } from "$fresh/runtime.ts";
import Navigation from "../components/Navigation.tsx";

const testimonials = [
  {
    author: "Dave",
    text: "Hello there",
  },
  {
    author: "Sara",
    text: "Hello you",
  },
  {
    author: "Bilal",
    text: "Hello mum",
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
      <div class="therapy-title">
        <p>Ria Hope Therapy</p>
      </div>
      <TestimonialsSection />
    </>
  );
}

function TestimonialsSection() {
  return (
    <aside>
      <a id="#testimonials">
        <h2>Testimonials</h2>
      </a>
      <ul>
        {testimonials.map((testimonial) => (
          <li>
            <figure>
              <figcaption>{testimonial.author}</figcaption>
              <blockquote>{testimonial.text}</blockquote>
            </figure>
          </li>
        ))}
      </ul>
    </aside>
  );
}
