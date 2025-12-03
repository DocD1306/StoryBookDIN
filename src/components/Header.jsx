import Nav from "./Nav";

/**
 * Header Component
 *
 * This component provides the main structural header for the application layout.
 * It features the application title/branding ("Películas") and integrates the
 * primary navigation component (<Nav />).
 *
 * It is styled to appear as a full-width banner with a white background and a shadow.
 * The content is horizontally centered within a maximum width container.
 *
 * @component
 * @returns {JSX.Element} The rendered header element.
 */
function Header() {

  return (
    <header className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Películas</h1>
        <Nav />
      </div>
    </header>
  );
}
export default Header;
