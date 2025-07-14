import "./styles.css";
import {
  Button,
  ContentCard,
  ContentCardBody,
  InputContainer,
  Textarea,
  Utility,
} from "@visa/nova-react";

type InputCardProps = {
  handleSubmit: any;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const InputCard = ({
  handleSubmit,
  inputValue,
  setInputValue,
}: InputCardProps) => {
  return (
    <ContentCard>
      <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
        <form onSubmit={handleSubmit} className="input-form">
          <InputContainer className="v-flex-row input-container">
            <Textarea
              value={inputValue}
              onChange={(e) =>
                setInputValue((e.target as HTMLTextAreaElement).value)
              }
              placeholder="Describe your UI (e.g., 'Login form with remember me')"
              aria-required="true"
              fixed
              rows={2}
              style={{ blockSize: "60px" }}
            />
          </InputContainer>
          <Button type="submit" aria-label="Generate components">
            Generate Components
          </Button>
        </form>
      </Utility>
    </ContentCard>
  );
};
