// Fetching component metadata from a mock server
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const components = [
  {
    name: "ContentCard",
    description: "A visual container for content blocks.",
    keywords: ["card", "info", "content", "section"],
    components: ["Card", "Heading", "Text", "Button"],
  },
  {
    name: "LoginForm",
    description:
      "A login interface with username, password, and remember me checkbox.",
    keywords: [
      "login",
      "password",
      "signin",
      "authentication",
      "login form",
      "checkbox",
    ],
    components: [
      "Form",
      "InputUsername",
      "InputPassword",
      "Checkbox",
      "SubmitButton",
    ],
  },
  {
    name: "TextInput",
    description: "An input field for capturing user text.",
    keywords: ["form", "input", "submit", "btn"],
    components: ["Form", "Input", "SubmitButton"],
  },
  {
    name: "Footer",
    description: "A bottom-of-page section with links and brand.",
    keywords: [
      "footer",
      "bottom",
      "links",
      "privacy policy",
      "logo",
      "social media",
    ],
    components: [
      "Footer",
      "Logo",
      "FooterNavigation",
      "Link",
      "SocialMediaIcons",
    ],
  },
  {
    name: "Header",
    description: "Headline text for sections and titles.",
    keywords: ["title", "heading", "section", "header"],
    components: ["Header", "Heading", "SubTitle", "ActionButton"],
  },
];

app.get("/api/components", (req, res) => {
  res.json(components);
});

app.listen(5001, () => {
  console.log("Mock API running on http://localhost:5001");
});
