import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
};

const PHForm = ({ onSubmit, children }: TFormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
