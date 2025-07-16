import "./styles.scss";
import { Badge, Button, Utility } from "@visa/nova-react";
import { VisaCopyTiny, VisaSuccessTiny } from "@visa/nova-icons-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeComponentProps = {
  codeSnippet: string;
};

export const CodeComponent = ({ codeSnippet }: CodeComponentProps) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="output-content code-block">
      <SyntaxHighlighter language="tsx" style={dracula} wrapLines wrapLongLines>
        {codeSnippet}
      </SyntaxHighlighter>
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
        <VisaCopyTiny />
      </Button>
      <Utility className="copy-icon">
        {copied && (
          <Badge badgeType="stable">
            <VisaSuccessTiny aria-label="success" /> Code Copied! 🎊
          </Badge>
        )}
      </Utility>
    </div>
  );
};
