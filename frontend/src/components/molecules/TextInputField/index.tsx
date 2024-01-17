import { FieldLabel, IFieldLabel } from "components/atoms/FieldLabel";
import { ITextInputProps, TextInput } from "components/atoms/TextInput";

export interface TextInputFieldProps
  extends ITextInputProps,
    Omit<IFieldLabel, "children"> {}

export const TextInputField = ({
  label,
  id,
  hasError,
  bottomText,
  value,
  className,
  ...rest
}: TextInputFieldProps) => (
  <FieldLabel
    label={label}
    displayLabel={true}
    hasError={hasError}
    id={id}
    bottomText={bottomText}
    className={className}
  >
    <TextInput id={id} hasError={hasError} value={value} {...rest} />
  </FieldLabel>
);
