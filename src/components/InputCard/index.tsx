import "./styles.css";
import {
  Button,
  ContentCard,
  ContentCardBody,
  InputContainer,
  Label,
  Textarea,
  Utility,
} from "@visa/nova-react";

type InputCardProps = {
  inputValue: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const InputCard = ({
  inputValue,
  handleSubmit,
  setInputValue,
}: InputCardProps) => {
  return (
    <ContentCard>
      <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
        <form onSubmit={handleSubmit} className="input-form">
          <InputContainer className="v-flex-row input-container">
            <Label htmlFor="ui-description" className="visually-hidden">
              Describe your UI
            </Label>
            <Textarea
              id="ui-description"
              value={inputValue}
              onChange={(e) =>
                setInputValue((e.target as HTMLTextAreaElement).value)
              }
              placeholder="Describe your UI (e.g., 'Login form with remember me')"
              required
              fixed
              rows={2}
              style={{ blockSize: "60px" }}
            />
          </InputContainer>
          <Button type="submit">Generate Components</Button>
        </form>
      </Utility>
    </ContentCard>
  );
};
