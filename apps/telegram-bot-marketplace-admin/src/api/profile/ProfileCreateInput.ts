import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  statistics?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
