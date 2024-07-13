import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  statistics?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
