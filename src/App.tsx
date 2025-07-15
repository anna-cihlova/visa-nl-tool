import React, { useEffect, useState } from "react";
import "./App.css";
import { Typography } from "@visa/nova-react";
import { InputCard, OutputCard, VerticalNavigation } from "./components/index";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [suggestedComponents, setSuggestedComponents] = useState<string[]>([]);
  const [codeSnippet, getCodeSnippet] = useState("");
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [savedSnippets, setSavedSnippets] = useState(() => {
    return JSON.parse(localStorage.getItem("savedSnippets") || "[]");
  });
  const [componentMetadata, setComponentMetadata] = useState<any[]>([]);

  // Fetch Mock Metadata from Local Mock Server
  useEffect(() => {
    try {
      const fetchData = async function () {
        const res = await fetch("http://localhost:5001/api/components");
        if (!res.ok) throw new Error(`Error occurred: ${res.status}`);
        const data = await res.json();
        setComponentMetadata(data);
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, []);

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

  // Handle on Submit - Generate Components
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get Suggested Components
    const cleanInputValue = inputValue.trim().toLowerCase();

    // Find One Matching UI
    const sortedComponents = componentMetadata
      .map((comp) => {
        const score = comp.keywords.reduce(
          (acc: number, currKeyword: string) => {
            return acc + (cleanInputValue.includes(currKeyword) ? 1 : 0);
          },
          0
        );
        return { ...comp, score };
      })
      .filter((comp) => comp.score > 0)
      .sort((a, b) => b.score - a.score);

    const matchedComponents =
      sortedComponents.length > 0 ? sortedComponents[0].components : [];

    const componentsToUse =
      matchedComponents.length > 0
        ? matchedComponents
        : ["Container", "Heading", "Text"];

    setSuggestedComponents(componentsToUse);
    setSelectedComponents(componentsToUse);
    getCodeSnippet(generateCode(componentsToUse));
  };

  const handleSave = () => {
    // Adding New Snippet
    const newSnippet = {
      title: `Saved UI ${savedSnippets.length + 1}`,
      code: codeSnippet,
    };

    // Updating Snippets & Saved Snippets' State
    const updatedSnippets = [...savedSnippets, newSnippet];
    localStorage.setItem("savedSnippets", JSON.stringify(updatedSnippets));
    setSavedSnippets(updatedSnippets);
  };

  const handleDelete = (index: number) => {
    // Filtering out saved ui with matching index
    const updatedSnippets = savedSnippets.filter(
      (_: string, i: number) => i !== index
    );
    // Updating Snippets & Saved Snippets' State
    localStorage.setItem("savedSnippets", JSON.stringify(updatedSnippets));
    setSavedSnippets(updatedSnippets);
  };

  return (
    <div className="App">
      <VerticalNavigation
        savedSnippets={savedSnippets}
        handleDelete={handleDelete}
      >
        <div className="main-content">
          <Typography variant="headline-1" className="headline-1">
            Write it. Generate it. Copy it. Implement it. 🧑‍💻
          </Typography>
          <InputCard
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          {suggestedComponents.length > 0 && (
            <OutputCard
              setSuggestedComponents={setSuggestedComponents}
              suggestedComponents={suggestedComponents}
              selectedComponents={selectedComponents}
              setSelectedComponents={setSelectedComponents}
              getCodeSnippet={getCodeSnippet}
              generateCode={generateCode}
              codeSnippet={codeSnippet}
              handleSave={handleSave}
            />
          )}
        </div>
      </VerticalNavigation>
    </div>
  );
}

export default App;
