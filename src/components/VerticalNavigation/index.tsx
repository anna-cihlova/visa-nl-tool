import { useState } from "react";
import "./styles.css";

import {
  VisaMediaFastForwardTiny,
  VisaMediaRewindTiny,
} from "@visa/nova-icons-react";
import {
  Button,
  Divider,
  Link,
  Nav,
  NavAppName,
  Typography,
  Utility,
  UtilityFragment,
  VisaLogo,
} from "@visa/nova-react";
import { AccordionGroup } from "./AccordionGroup";

const id = "vertical-navigation";
const navRegionAriaLabel = "Vertical navigation";

type VerticalNavigationProps = {
  children?: React.ReactNode;
  savedSnippets: { title: string; code: string }[];
  handleDelete: (index: number) => void;
};

export const VerticalNavigation = ({
  children,
  savedSnippets,
  handleDelete,
}: VerticalNavigationProps) => {
  const [navExpanded, setNavExpanded] = useState(true);

  return (
    <div className="appContainer">
      <div id="layout" className="layoutContainer">
        <Nav id={id} orientation="vertical" tag="header" className="navigation">
          {navExpanded && (
            <Link skipLink href="#content">
              Skip to content
            </Link>
          )}
          {navExpanded && (
            <>
              <UtilityFragment
                vFlex
                vFlexCol
                vGap={12}
                vMarginTop={16}
                vMarginRight={16}
                vMarginBottom={30}
                vMarginLeft={20}
              >
                <div>
                  <Link
                    aria-label="Visa Application Name Home"
                    href="https://www.visa.com"
                    id={`${id}-home-link`}
                    noUnderline
                    className="link-logo"
                  >
                    <VisaLogo width={54} />
                    <NavAppName>
                      <Typography variant="subtitle-1">UI Generator</Typography>
                    </NavAppName>
                  </Link>
                </div>
              </UtilityFragment>
              <nav aria-label={navRegionAriaLabel}>
                <UtilityFragment vGap={8}>
                  <AccordionGroup
                    savedSnippets={savedSnippets}
                    handleDelete={handleDelete}
                  />
                </UtilityFragment>
              </nav>
            </>
          )}
          <Utility
            vFlex
            vFlexCol
            vAlignSelf="stretch"
            vGap={4}
            vMarginTop="auto"
          >
            {navExpanded && <Divider dividerType="decorative" />}
            <UtilityFragment
              vMarginLeft={navExpanded ? "auto" : 5}
              vMarginRight={navExpanded ? 8 : 5}
            >
              <Button
                aria-label="Side bar"
                aria-expanded={!!navExpanded}
                buttonSize="small"
                colorScheme="tertiary"
                iconButton
                onClick={() => setNavExpanded(!navExpanded)}
                subtle
                className="expand-button"
              >
                {navExpanded ? (
                  <VisaMediaRewindTiny rtl />
                ) : (
                  <VisaMediaFastForwardTiny rtl />
                )}
              </Button>
            </UtilityFragment>
          </Utility>
        </Nav>
        <Utility className="mainContent">{children}</Utility>
      </div>
    </div>
  );
};
