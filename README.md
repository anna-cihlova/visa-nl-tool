# Visa UI Generator

Hi! I’m Anna — and I built this React app to help developers quickly turn UI prompts into ready-to-copy code using the Visa Nova Design System. Just type a description like “Login form with remember me,” and you’ll get suggested components and a generated code snippet you can customize, copy, or save for later.

## ✨ My Approach

This project was built using:

- React + TypeScript for structure and reusability
- SCSS for styling
- Visa Nova Design System for consistent UI components
- Node.js + Express to create a simple mock API that feeds component data into the app

I focused on clean UX, accessibility, and helpful developer tools.

## 🔑 Key Features

1. Smart Component Suggestions
   Type a short UI prompt (e.g., “login form with remember me”) and the app suggests the most relevant UI with components included using a keyword-based scoring system (the most relevant UI components are shown based on the prompt).

2. Interactive Component Selection
   I added this as a unique feature: developers can select or deselect any suggested component to customize the output. This updates the generated code in real time, giving users full control based on their preferences.

3. Code Snippet Generator
   Developers can save the UI snippet based on the selected components. They can also easily copy it to the clipboard.

4. Saved Snippets Sidebar
   Saved snippets can be accessed anytime from the vertical sidebar navigation. Each saved snippet can be reopened, copied again, or deleted.

5. First-Time Onboarding Panel
   A collapsible panel introduces new users to the app and explains each step clearly — from describing a prompt to saving snippets.

6. Accessibility
   Accessibility has always been a key consideration for me—I included ARIA labels, hidden labels for visual clarity, and ensured compatibility with screen readers to support a wider range of users.

7. Clean & Responsive UI
   The app is styled with SCSS and built using Visa’s Nova Design System, making the layout feel clean, intuitive, and easy to use on any screen size.

## ⏳ If I Had More Time...

- Use AI to better understand free-text prompts; the app could become smarter and more intuitive by understanding synonyms, phrasing, and intent.
- Nest the generated code more logically (e.g., wrap elements, add meaningful labels), and let users edit the generated code before copying.
  That could be achieved by adding a live preview of the generated UI (like CodeSandbox).
- Add deeper customization with Nova theming to give the app a more unique visual identity

I had a great time building this web app. It was a rewarding learning experience where I developed the entire project step by step, growing along the way. Whenever I felt unsure, I turned to ChatGPT for a helpful nudge — whether it was setting up my very first Node.js + Express mock server, untangling tricky TypeScript issues, or improving how I organized and structured my code.

I also really enjoyed working with the Visa Product Design System. I spent time exploring the documentation to make sure I understood the system and applied it properly. I hope that’s reflected in the finished app!

## 🚀 Running the App

### To run it locally:

```
git clone https://github.com/your-username/ui-generator.git
cd ui-generator
npm install
npm run start
```

Then, in another terminal:

```
node mock-server.js
```

## 🌐 Deployed Version

View it live on Vercel: https://ui-generator.vercel.app

## 👩‍💻 About Me

Created by Anna Cihlova
Frontend Developer
