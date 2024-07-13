import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ShopTitle } from "../shop/ShopTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <ReferenceInput source="shop.id" reference="Shop" label="shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
