import "./styles.scss";
import { useState } from "react";
import {
  VisaMediaFastForwardTiny,
  VisaMediaRewindTiny,
} from "@visa/nova-icons-react";
import {
  Panel,
  PanelBody,
  PanelContent,
  PanelHeader,
  PanelToggle,
  Typography,
  Utility,
  UtilityFragment,
} from "@visa/nova-react";

export const PanelComponent = () => {
  const [open, setOpen] = useState(() => {
    return !localStorage.getItem("onboardingComplete");
  });

  return (
    <Utility vFlex className="panel-wrapper">
      <UtilityFragment vMarginLeft="auto">
        <PanelToggle
          aria-expanded={open}
          aria-label={open ? "Close panel" : "Open panel"}
          buttonSize="large"
          iconButton
          iconTwoColor
          onClick={() => {
            localStorage.setItem("onboardingComplete", "true");
            setOpen(open ? false : true);
          }}
        >
          {open ? (
            <VisaMediaFastForwardTiny rtl />
          ) : (
            <VisaMediaRewindTiny rtl />
          )}
        </PanelToggle>
      </UtilityFragment>

      {open && (
        <Panel expandable style={{ minInlineSize: "400px" }}>
          <PanelContent>
            <PanelHeader>
              <Typography
                tag="h2"
                variant="headline-3"
                style={{ marginBottom: "0" }}
              >
                Welcome to the UI Generator 👋
              </Typography>
            </PanelHeader>
            <PanelBody>
              <Typography
                tag="h3"
                variant="subtitle-2"
                style={{ marginBottom: "20px" }}
              >
                My name is Anna and I’ve built this app just for you to try out!
                ✨
              </Typography>
              <Typography variant="subtitle-3" style={{ marginBottom: "6px" }}>
                Here’s how it works:
              </Typography>
              <ol>
                <li>
                  <strong>Describe your UI:</strong> Type a short prompt like
                  “Login form with remember me” or “Contact section with social
                  icons.”
                </li>
                <li>
                  <strong>Select components:</strong> Choose which suggested
                  components you want to include — you can toggle them on or
                  off.
                </li>
                <li>
                  <strong>Generate and copy code:</strong> The matching code
                  will appear — just click the copy icon to grab it.
                </li>
                <li>
                  <strong>Save your UI:</strong> You can save your generated UI
                  snippets to the sidebar for quick access later.
                </li>
                <li>
                  <strong>Manage your saved UIs:</strong> Reopen, copy, or
                  delete them anytime from the left-hand navigation.
                </li>
              </ol>
              <Typography>
                Sounds fun? YAY! Let’s generate some UI! 🎉
              </Typography>
            </PanelBody>
          </PanelContent>
        </Panel>
      )}
    </Utility>
  );
};
