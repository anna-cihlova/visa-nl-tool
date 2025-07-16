import React, { useEffect, useState } from "react";
import "./App.scss";
import { Typography } from "@visa/nova-react";
import { InputCard, OutputCard, VerticalNavigation } from "./components/index";

type Snippet = {
  title: string;
  code: string;
};

type ComponentMeta = {
  name: string;
  description: string;
  keywords: string[];
  components: string[];
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [suggestedComponents, setSuggestedComponents] = useState<string[]>([]);
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [codeSnippet, setCodeSnippet] = useState("");
  const [savedSnippets, setSavedSnippets] = useState<any>(() => {
    return JSON.parse(localStorage.getItem("savedSnippets") || "[]");
  });
  const [componentMetadata, setComponentMetadata] = useState<ComponentMeta[]>(
    []
  );

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
    if (components.length === 0) return "/* Select Components */";

    const imports = `import { ${components.join(
      ", "
    )} } from "@visa/nova-react";\n\n`;
    const jsx = components.map((comp) => `  <${comp} />`).join("\n");

    return `${imports}function MyComponent() {\n  return (\n${jsx}\n  );\n}`;
  };

  // Generate List of Components
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const query = inputValue.trim().toLowerCase();
    // Sort Suggested Components
    const sorted = componentMetadata
      .map((meta) => ({
        ...meta,
        score: meta.keywords.reduce(
          (acc, keyword) => acc + (query.includes(keyword) ? 1 : 0),
          0
        ),
      }))
      .filter((meta) => meta.score > 0)
      .sort((a, b) => b.score - a.score);
    const matched = sorted[0]?.components || ["Container", "Heading", "Text"];
    setSuggestedComponents(matched);
    setSelectedComponents(matched);
    setCodeSnippet(generateCode(matched));
  };

  // Save UI
  const handleSave = () => {
    const newSnippet: Snippet = {
      title: `Saved UI ${savedSnippets.length + 1}`,
      code: codeSnippet,
    };
    const updated = [...savedSnippets, newSnippet];
    localStorage.setItem("savedSnippets", JSON.stringify(updated));
    setSavedSnippets(updated);
  };

  // Delete UI
  const handleDelete = (index: number) => {
    const updated = savedSnippets.filter((_: string, i: number) => i !== index);
    localStorage.setItem("savedSnippets", JSON.stringify(updated));
    setSavedSnippets(updated);
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
              setCodeSnippet={setCodeSnippet}
              codeSnippet={codeSnippet}
              generateCode={generateCode}
              handleSave={handleSave}
            />
          )}
        </div>
      </VerticalNavigation>
    </div>
  );
}

export default App;
