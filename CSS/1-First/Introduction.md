# Introduction to CSS

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS defines how elements should be rendered on screen, on paper, in speech, or on other media.

## Key Features of CSS

- **Separation of Content and Presentation**: CSS allows you to separate the content of a web page (HTML) from its presentation (CSS). This makes it easier to maintain and update the look and feel of a website.
- **Cascading Rules**: CSS rules can cascade, meaning that multiple rules can apply to the same element. The final appearance of an element is determined by the combination of all applicable rules.
- **Selectors**: CSS uses selectors to target HTML elements. Selectors can be simple (e.g., targeting elements by tag name, class, or ID) or complex (e.g., targeting elements based on their position in the document tree).
- **Box Model**: CSS uses the box model to determine the size and spacing of elements. The box model consists of margins, borders, padding, and the content area.
- **Responsive Design**: CSS provides features like media queries that allow you to create responsive designs that adapt to different screen sizes and devices.

## Basic Syntax

A CSS rule consists of a selector and a declaration block. The selector targets the HTML element(s) to be styled, and the declaration block contains one or more declarations separated by semicolons. Each declaration includes a property and a value, separated by a colon.

```css
selector {
    property: value;
}