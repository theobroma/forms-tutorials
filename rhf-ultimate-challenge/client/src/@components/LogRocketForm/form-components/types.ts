export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
}

export type OptionType = {
  label: React.ReactNode;
  value: unknown;
};
