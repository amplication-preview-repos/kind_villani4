import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  id?: StringFilter;
  statistics?: JsonFilter;
  user?: UserWhereUniqueInput;
};
