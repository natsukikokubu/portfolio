export const Header = () => {
  return (
    <header className="flex justify-between px-4 h-20 w-screen bg-blue-600">
      <h1 className="text-2xl align-middle">natsuki's portfolio</h1>
      <nav>
        <ul className="flex gap-4 items-center h-full">
          <li>
            <a href="#top">Top</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
