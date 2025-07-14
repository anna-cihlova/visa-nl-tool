import "./styles.css";
import { Badge, Button, Typography, Utility } from "@visa/nova-react";
import { VisaCopyTiny, VisaSuccessTiny } from "@visa/nova-icons-react";
import { useState } from "react";

export const GeneratedCode = ({ suggestedComponents, codeSnippet }: any) => {
  const [copied, setCopied] = useState(Boolean);

  return (
    <div>
      <Typography variant="headline-2" className="headline-2">
        Generated Code
      </Typography>
      {suggestedComponents.length > 0 && (
        <pre className="output-content code-block">
          <code>{codeSnippet}</code>
          <Button
            aria-label="Copy code"
            buttonSize="small"
            subtle
            iconButton
            onClick={() => {
              navigator.clipboard.writeText(codeSnippet);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            <Utility className="copy-icon">
              {copied && (
                <Badge badgeType="stable">
                  <VisaSuccessTiny aria-label="success" /> Code Copied! 🎊
                </Badge>
              )}
              <VisaCopyTiny />
            </Utility>
          </Button>
        </pre>
      )}
    </div>
  );
};
