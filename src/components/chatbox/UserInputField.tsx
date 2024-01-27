import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  control: Control<T>;
  name: FieldPath<T>;
}

const UserInputField = <T extends FieldValues>({
  label,
  control,
  name,
}: Props<T>) => {
  return (
    <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
      <InputLabel htmlFor={"outlined-" + label}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <OutlinedInput
              {...field}
              id={"outlined-" + label}
              type="text"
              label={label}
            />
          </>
        )}
      />
    </FormControl>
  );
};

export default UserInputField;
