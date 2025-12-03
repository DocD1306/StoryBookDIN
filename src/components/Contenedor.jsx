import { Outlet } from "react-router-dom";

/**
 * Contenedor (Container) Component
 *
 * This component acts as the main layout wrapper for application pages.
 * It provides a consistent gradient background, centers content, and includes
 * essential accessibility features (main role, focus management).
 *
 * It renders a dynamic page title (`titulo`) as an `<h1>` element and uses
 * the React Router's <Outlet /> component to display the content of
 * nested child routes.
 *
 * @component
 * @example
 * // Used as a Layout Route in react-router-dom:
 * <Route element={<Contenedor titulo="My Dashboard" />}>
 * <Route path="home" element={<HomePage />} />
 * <Route path="settings" element={<SettingsPage />} />
 * </Route>
 *
 * @param {object} props - The component props.
 * @param {string} [props.titulo] - The main heading text for the page. If provided, it renders as an H1, otherwise the H1 is omitted.
 * @returns {JSX.Element} The rendered main content wrapper.
 */
function Contenedor({ titulo }) {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >
      <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl text-center"
      >
        {titulo && (
          <h1
            id="main-section-title"
            className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]"
          >
            {titulo}
          </h1>
        )}

        {/* {children} */}
        {/* Aquí se muestra el contenido según la ruta */}
        <Outlet />
      </section>
    </main>
  );
}

export default Contenedor;