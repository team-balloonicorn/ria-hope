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
      <Head>
        <title>Ria Hope Therapy</title>
      </Head>
      <Navigation headings={["thing1", "thing2"]} />
      <div>
        <p>Ria Hope Therapy</p>
      </div>
      <TestimonialsSection />
    </>
  );
}

function TestimonialsSection() {
  return (
    <aside>
      <h2>Client Reviews</h2>
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
