import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  return (
    <header className="flex justify-between px-4  sm:px-24 h-16 w-screen bg-white bg-opacity-80 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-gray-700 flex items-center sm:text-2xl ">
        portfolio
      </h1>
      <nav>
        <ul className="flex gap-8 sm:gap-10 items-center h-full">
          <li>
            <ScrollLink to="top" smooth duration={300}>
              Top
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="works" smooth duration={300}>
              Works
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth duration={300}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
