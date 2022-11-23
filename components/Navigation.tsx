type NavbarProps = {
  headings: string[];
  styleModifier: string;
};

export function headingId(x: string): string {
  return x.toLowerCase().replaceAll(" ", "-").replaceAll(/[^-a-z0-9]/g, "");
}

export default function Navbar(props: NavbarProps) {
  return (
    // start of nav and top menu

    <nav class={"main-navigation " + props.styleModifier}>
      <ul class="menu">
        <li>
          <a href="/">Home</a>
        </li>
        {/* This is a temporary link for client */}
        <li>
          <a href="/kink">Kink</a>
        </li>
        {props.headings.map((heading) => (
          <li>
            <a href={`#${headingId(heading)}`}>
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
