import { useState } from "react";

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
  Tab,
  Tabs,
  Typography,
  Utility,
  UtilityFragment,
  VisaLogo,
} from "@visa/nova-react";
import Styles from "./styles.module.css";

const id = "vertical-navigation";
const navRegionAriaLabel = "Vertical navigation";

const tabsContent = [
  {
    tabLabel: "L1 label 1",
    id: `${id}-tab-0`,
    href: "./vertical-navigation",
  },
  {
    tabLabel: "L1 label 2",
    id: `${id}-tab-1`,
    href: "./vertical-navigation",
  },
  {
    tabLabel: "L1 label 3",
    id: `${id}-tab-2`,
    href: "./vertical-navigation",
  },
  {
    tabLabel: "L1 label 4",
    id: `${id}-tab-3`,
    href: "./vertical-navigation",
  },
  {
    tabLabel: "L1 label 5",
    id: `${id}-tab-4`,
    href: "./vertical-navigation",
  },
];

type VerticalNavigationProps = {
  children?: React.ReactNode;
};

export const VerticalNavigation = ({ children }: VerticalNavigationProps) => {
  const [navExpanded, setNavExpanded] = useState(true);

  return (
    <div className={Styles.appContainer}>
      <div id="layout" className={Styles.layoutContainer}>
        <Nav
          id={id}
          orientation="vertical"
          tag="header"
          className={Styles.navigation}
        >
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
                <Link
                  aria-label="Visa Application Name Home"
                  href="https://www.visa.com"
                  id={`${id}-home-link`}
                  noUnderline
                  style={{ backgroundColor: "transparent" }}
                >
                  <VisaLogo width={54} />
                  <NavAppName>
                    <Typography variant="subtitle-1">
                      Product Design System Generator
                    </Typography>
                  </NavAppName>
                </Link>
              </UtilityFragment>
              <nav aria-label={navRegionAriaLabel}>
                <UtilityFragment vGap={8}>
                  <Tabs orientation="vertical">
                    {tabsContent.map((tabContent) => (
                      <Tab key={tabContent.id}>
                        <Button
                          colorScheme="tertiary"
                          element={
                            <a href="./vertical-navigation">
                              {tabContent.tabLabel}
                            </a>
                          }
                        />
                      </Tab>
                    ))}
                  </Tabs>
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
        <Utility className={Styles.mainContent}>{children}</Utility>
      </div>
    </div>
  );
};
