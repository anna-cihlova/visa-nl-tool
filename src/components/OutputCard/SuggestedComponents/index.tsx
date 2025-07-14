import "./styles.css";
import { Checkbox, Chip, Typography, Utility } from "@visa/nova-react";

export const SuggestedComponents = ({
  suggestedComponents,
  selectedComponents,
  setSelectedComponents,
  getCodeSnippet,
  generateCode,
}: any) => {
  const id = "selection-group-chip";

  return (
    <div>
      <Typography variant="headline-2" className="headline-2">
        Suggested Components
      </Typography>
      <ul className="output-content suggested-components">
        <Utility vFlex vFlexWrap vGap={8} style={{ inlineSize: "50%" }}>
          {suggestedComponents.map((comp: string, i: number) => (
            <Chip
              chipType="selection"
              htmlFor={`${id}-${i}`}
              key={`${id}-${i}`}
              tag="label"
              onChange={() => {
                const updatedSelection = selectedComponents.includes(comp)
                  ? selectedComponents.filter((c: string) => c !== comp)
                  : [...selectedComponents, comp];
                setSelectedComponents(updatedSelection);
                getCodeSnippet(generateCode(updatedSelection));
              }}
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
