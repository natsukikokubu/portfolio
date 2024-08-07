export const Header = () => {
  return (
    <header className="flex justify-center h-40 w-1000 bg-blue-600">
      <h1 className="text-2xl bg-gray-400">natsuki's portfolio</h1>
      <nav>
        <ul>
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
