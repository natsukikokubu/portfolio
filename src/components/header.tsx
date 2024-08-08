import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  return (
    <header className="flex justify-between px-10 h-20 w-screen bg-gray-100">
      <h1 className="text-2xl flex items-center">natsuki's portfolio</h1>
      <nav>
        <ul className="flex gap-10 items-center h-full">
          <li>
            <ScrollLink to="top" smooth duration={300}>
              Top
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="top" smooth duration={300}>
              Works
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="top" smooth duration={300}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
