/**
 * Component that renders a list item as an interactive card.
 * * It displays an image, a name, and a description passed as children.
 * It includes specific styling for highlighted items (nota 10) and accessibility attributes.
 * * @component
 * @param {Object} props - The component props.
 * @param {string} props.foto - The URL of the image to display.
 * @param {string} props.nombre - The name of the interpreter.
 * @param {boolean} props.esNota10 - Flag to indicate if the interpreter belongs to a top-rated movie.
 * @param {React.ReactNode} props.children - The biography or description content.
 * @returns {JSX.Element} The rendered article element representing the list item.
 */
function List(props) {
    const { foto, nombre, esNota10 } = props;
    return (
        
        <article
            tabIndex="0" // Allows navigation with Tab
            className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)] shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={`${nombre}${esNota10 ? ', intérprete en película destacada' : ''}`}
        >
            {/* Interpreter image with hidden figcaption for screen readers */}
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

            <header>
                <h2
                    className={`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) ${
                    esNota10 ? "text-red-600" : "text-gray-800"
                    }`}
                >
                    {/* Interpreter name */}
                    <strong>{nombre}</strong>
                    {esNota10 && <em> – Intérprete en película destacada</em>}
                </h2>
            </header>
            {/* Biography or description */}
            <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                {props.children}
            </p>
        </article>

    );
}

export default List;