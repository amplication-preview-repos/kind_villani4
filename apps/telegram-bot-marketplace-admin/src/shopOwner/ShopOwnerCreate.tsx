import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ShopOwnerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Create>
  );
};
