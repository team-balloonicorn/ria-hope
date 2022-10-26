type NavbarProps = {
  headings: string[];
};

export function headingId(x: string): string {
  return x.toLowerCase().replaceAll(" ", "-").replaceAll(/[^-a-z0-9]/g, "");
}

export default function Navbar(props: NavbarProps) {
  return (
    // start of nav and top menu
    <div>
      <div class="nav-container">
        <nav>
          {props.headings.map((heading) => (
            <a href={`#${headingId(heading)}`}>
              {heading}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
