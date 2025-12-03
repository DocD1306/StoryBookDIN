import List from "../components/List";

/**
 * Meta configuration for the List component stories.
 * * This configuration defines how the component appears in the Storybook sidebar,
 * enables automatic documentation generation, and sets up the controls for the props.
 * * @type {import('@storybook/react').Meta}
 */
export default {
  title: "Components/List",
  component: List,
  // tags: ["autodocs"],
  argTypes: {
    foto: {
      control: "text",
      description: "URL of the displayed image",
    },
    nombre: {
      control: "text",
      description: "Name of the interpreter",
    },
    esNota10: {
      control: "boolean",
      description: "Flag to indicate if it is a highlighted item (red text)",
    },
    children: {
      control: "text",
      description: "Biography or description content",
    },
  },
};

/**
 * Default story representing the standard state of the component.
 * * Displays a card with an image, name, and description without special highlighting.
 * * @type {import('@storybook/react').StoryObj}
 */
export const Default = {
  args: {
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bruce_Willis_by_Gage_Skidmore_3.jpg/330px-Bruce_Willis_by_Gage_Skidmore_3.jpg", // Generic placeholder image
    nombre: "John Doe",
    esNota10: false,
    children:
      "This is a brief biography or description of the interpreter displayed within the card component.",
  },
};

/**
 * Highlighted story representing the component when `esNota10` is true.
 * * Displays the name in red and adds the suffix text "Intérprete en película destacada".
 * * @type {import('@storybook/react').StoryObj}
 */
export const Highlighted = {
  args: {
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Haley_Joel_Osment_TIFF_2014.jpg/500px-Haley_Joel_Osment_TIFF_2014.jpg",
    nombre: "Jane Smith",
    esNota10: true,
    children:
      "This interpreter is featured in a top-rated movie, triggering the highlighted styles.",
  },
};