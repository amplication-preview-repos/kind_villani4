import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ShopTitle } from "../shop/ShopTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <ReferenceInput source="shop.id" reference="Shop" label="shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
