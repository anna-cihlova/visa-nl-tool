import "./styles.scss";
import { Checkbox, Chip, Typography, Utility } from "@visa/nova-react";

type SuggestedComponentsProps = {
  suggestedComponents: string[];
  selectedComponents: string[];
  setSelectedComponents: React.Dispatch<React.SetStateAction<string[]>>;
  setCodeSnippet: (code: string) => void;
  generateCode: (components: string[]) => string;
};

export const SuggestedComponents = ({
  suggestedComponents,
  selectedComponents,
  setSelectedComponents,
  setCodeSnippet,
  generateCode,
}: SuggestedComponentsProps) => {
  const id = "selection-group-chip";

  const handleComponentToggle = (comp: string) => {
    const updatedSelection = selectedComponents.includes(comp)
      ? selectedComponents.filter((c) => c !== comp)
      : [...selectedComponents, comp];
    setSelectedComponents(updatedSelection);
    setCodeSnippet(generateCode(updatedSelection));
  };

  return (
    <div>
      <Typography variant="headline-2" className="headline-2">
        Suggested Components
      </Typography>
      <ul className="output-content suggested-components">
        <Utility vFlex vFlexWrap vGap={8} style={{ height: "fit-content" }}>
          {suggestedComponents.map((comp: string, i: number) => (
            <Chip
              chipType="selection"
              htmlFor={`${id}-${i}`}
              key={`${id}-${i}`}
              tag="label"
              onChange={() => handleComponentToggle(comp)}
              checked={selectedComponents.includes(comp)}
            >
              <span>{comp}</span>
              <Checkbox id={`${id}-${i}`} defaultChecked />
            </Chip>
          ))}
        </Utility>
      </ul>
    </div>
  );
};
