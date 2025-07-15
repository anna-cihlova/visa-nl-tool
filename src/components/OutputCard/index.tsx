import "./styles.scss";
import {
  Button,
  ContentCard,
  ContentCardBody,
  Typography,
  Utility,
} from "@visa/nova-react";
import { VisaChevronRightTiny, VisaSaveTiny } from "@visa/nova-icons-react";
import { SuggestedComponents } from "./SuggestedComponents";
import { CodeComponent } from "./CodeComponent";

export const OutputCard = ({
  setSuggestedComponents,
  suggestedComponents,
  selectedComponents,
  setSelectedComponents,
  setCodeSnippet,
  generateCode,
  codeSnippet,
  handleSave,
}: any) => {
  return (
    <ContentCard>
      <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
        <Utility className="primary-card output-card">
          <SuggestedComponents
            suggestedComponents={suggestedComponents}
            selectedComponents={selectedComponents}
            setSelectedComponents={setSelectedComponents}
            setCodeSnippet={setCodeSnippet}
            generateCode={generateCode}
          />
          <div>
            <Typography variant="headline-2" className="headline-2">
              Generated Code
            </Typography>
            <CodeComponent
              components={suggestedComponents}
              codeSnippet={codeSnippet}
            />
          </div>
          <Utility className="next-steps">
            <Button colorScheme="secondary" onClick={handleSave}>
              Save UI
              <VisaSaveTiny />
            </Button>
            <Button
              colorScheme="tertiary"
              element={
                <a href="./button">
                  Reset
                  <VisaChevronRightTiny rtl />
                </a>
              }
              onClick={() => setSuggestedComponents([])}
            />
          </Utility>
        </Utility>
      </Utility>
    </ContentCard>
  );
};
