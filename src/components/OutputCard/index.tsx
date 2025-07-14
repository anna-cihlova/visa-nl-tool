import "./styles.css";
import {
  Button,
  ContentCard,
  ContentCardBody,
  Utility,
} from "@visa/nova-react";
import { VisaChevronRightTiny, VisaSaveTiny } from "@visa/nova-icons-react";
import { SuggestedComponents } from "./SuggestedComponents";
import { GeneratedCode } from "./GeneratedCode";

export const OutputCard = ({
  suggestedComponents,
  selectedComponents,
  setSelectedComponents,
  getCodeSnippet,
  generateCode,
  codeSnippet,
}: any) => {
  return (
    <ContentCard>
      <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
        <Utility className="primary-card output-card">
          <SuggestedComponents
            suggestedComponents={suggestedComponents}
            selectedComponents={selectedComponents}
            setSelectedComponents={setSelectedComponents}
            getCodeSnippet={getCodeSnippet}
            generateCode={generateCode}
          />
          <GeneratedCode
            suggestedComponents={suggestedComponents}
            codeSnippet={codeSnippet}
          />
        </Utility>
        <Utility className="next-steps">
          <Button colorScheme="secondary">
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
          />
        </Utility>
      </Utility>
    </ContentCard>
  );
};
