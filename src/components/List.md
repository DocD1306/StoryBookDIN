
# `List` Component — API Documentation

A React component that renders a list item as an interactive card.
It displays an image, a name, and a description, with styling variations for highlighted items and built-in accessibility support.

## Import

```jsx
import List from "./List";
```

## Usage Example

```jsx
<List
  foto="https://example.com/image.jpg"
  nombre="John Doe"
  esNota10={true}
>
  John Doe is an award-winning actor known for his role in...
</List>
```

---

## Props

| Prop         | Type              | Required | Description                                                                                                                 |
| ------------ | ----------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| **foto**     | `string`          | Yes      | URL of the image displayed in the card.                                                                                     |
| **nombre**   | `string`          | Yes      | Name of the interpreter shown as the card title.                                                                            |
| **esNota10** | `boolean`         | No       | Highlights the card when the interpreter belongs to a top-rated movie. Changes text color and accessibility label.          |
| **children** | `React.ReactNode` | Yes      | Biography or description text rendered below the title. Also used inside a visually hidden `figcaption` for screen readers. |

---

## Features

### 🎨 Styling

* Renders an interactive card with gradient background, rounded corners, and hover shadow.
* When **esNota10** is `true`, the title is styled in red to indicate a highlighted interpreter.

### ♿ Accessibility

* The component is keyboard-navigable via `tabIndex="0"`.
* Generates a descriptive `aria-label` based on `nombre` and the **esNota10** flag.
* Includes a visually hidden `figcaption` for assistive technologies.

### 🖼️ Media Handling

* Displays the interpreter’s image in a square aspect ratio container.
* Uses `loading="lazy"` to improve performance.

---

## Returned Element

The component returns an `<article>` element containing:

* An image inside a `<figure>`
* A header with the interpreter’s name
* A paragraph containing the descriptive content

