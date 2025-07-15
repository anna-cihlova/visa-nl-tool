import "./styles.scss";
import {
  Accordion,
  AccordionHeading,
  AccordionPanel,
  AccordionToggleIcon,
  Button,
  Utility,
  UtilityFragment,
} from "@visa/nova-react";
import { CSSProperties, useState } from "react";
import { CodeComponent } from "../../OutputCard/CodeComponent";
import { VisaDeleteTiny } from "@visa/nova-icons-react";

type AccordionGroupProps = {
  savedSnippets: { title: string; code: string }[];
  handleDelete: (index: number) => void;
};
const id = "accordion-group";

export const AccordionGroup = ({
  savedSnippets,
  handleDelete,
}: AccordionGroupProps) => {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <Utility vFlex vFlexCol vGap={2} style={{ maxWidth: "500px" }}>
      {savedSnippets.map(
        ({ title, code }: { title: string; code: string }, index: number) => (
          <Accordion key={`${id}-${index}`} open={index === openIndex}>
            <UtilityFragment vGap={2}>
              <AccordionHeading
                className="v-typography-body-2-medium accordion-heading"
                colorScheme="tertiary"
                onClick={(event) => {
                  event.preventDefault();
                  // If open, close accordion, else open accordion
                  setOpenIndex(openIndex === index ? -1 : index);
                }}
                style={
                  {
                    "--v-accordion-foreground-initial":
                      "var(--palette-default-active)",
                    "--v-button-default-background": "transparent",
                  } as CSSProperties
                }
              >
                <AccordionToggleIcon />
                {title}
                <Button
                  onClick={() => handleDelete(index)}
                  aria-label="Delete"
                  className="delete-button"
                >
                  <VisaDeleteTiny />
                </Button>
              </AccordionHeading>
            </UtilityFragment>

            <UtilityFragment vPaddingHorizontal={32}>
              <AccordionPanel
                style={
                  {
                    "--v-accordion-panel-background-color": "transparent",
                    "--v-accordion-panel-border-size": "0px",
                  } as CSSProperties
                }
              >
                <CodeComponent components={savedSnippets} codeSnippet={code} />
              </AccordionPanel>
            </UtilityFragment>
          </Accordion>
        )
      )}
    </Utility>
  );
};
