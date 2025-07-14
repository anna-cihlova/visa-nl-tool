import React, { useState } from "react";
import "./App.css";
import { Typography } from "@visa/nova-react";
import { InputCard, OutputCard, VerticalNavigation } from "./components/index";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [suggestedComponents, setSuggestedComponents] = useState<string[]>([]);
  const [codeSnippet, getCodeSnippet] = useState("");
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);

  // Generate Code Snippet
  const generateCode = (components: string[]) => {
    const imports = `import { ${components.join(
      ", "
    )} } from "@visa/nova-react" \n\n`;
    const jsx = components
      .map((comp) => {
        return `<${comp}/> \n`;
      })
      .join(" ");
    if (components.length === 0) return "/* Select Components */";
    return `${imports}function MyComponent() {\n  return (\n${jsx});\n}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get Suggested Components
    const cleanInputValue = inputValue.trim().toLowerCase();
    let components: any[];

    if (cleanInputValue.includes("login")) {
      components = ["TextInput", "Button", "Checkbox"];
    } else if (cleanInputValue.includes("button")) {
      components = ["IconButton", "TextButton", "AnimatedButton"];
    } else {
      components = ["Container", "Heading", "Text"];
    }
    setSuggestedComponents(components);
    setSelectedComponents(components);
    getCodeSnippet(generateCode(components));
  };

  return (
    <div className="App">
      <VerticalNavigation>
        <div className="main-content">
          <Typography variant="headline-1">
            Write it. Generate it. Copy it. Implement it.
          </Typography>
          <InputCard
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          {suggestedComponents.length > 0 && (
            <OutputCard
              suggestedComponents={suggestedComponents}
              selectedComponents={selectedComponents}
              setSelectedComponents={setSelectedComponents}
              getCodeSnippet={getCodeSnippet}
              generateCode={generateCode}
              codeSnippet={codeSnippet}
            />
          )}
        </div>
      </VerticalNavigation>
    </div>
  );
}

export default App;
