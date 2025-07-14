import {
  Input,
  InputContainer,
  Label,
  Utility,
  Button,
} from "@visa/nova-react";

type InputProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
};

const id = "primary-input";
export const PrimaryInput = ({ inputValue, setInputValue }: InputProps) => {
  return (
    <Utility vFlex vFlexCol vGap={12}>
      <Label htmlFor={id}>Write it. Generate it. Copy it. Implement it.</Label>
      <InputContainer>
        <Input
          aria-required="true"
          id={id}
          type="text"
          value={inputValue}
          placeholder="Describe your UI (e.g., 'Login form with remember me')"
          onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}
        />
      </InputContainer>
      <Button type="submit">Submit</Button>
    </Utility>
  );
};
