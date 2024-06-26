import { UseFormReturn } from "react-hook-form";
import React from "react";
import { z } from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/app/auth/register/constants/signup-admin";

interface Props {
  control: UseFormReturn<z.infer<typeof formSchema>>["control"];
  name: keyof z.infer<typeof formSchema>;
  label: string;
  placeholder: string;
  type: string;
}

const InputField: React.FC<Props> = ({
  name,
  label,
  placeholder,
  type,
  control,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mx-auto w-full">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
