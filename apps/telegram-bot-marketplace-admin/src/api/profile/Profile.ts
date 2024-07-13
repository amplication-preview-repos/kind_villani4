import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  statistics: JsonValue;
  user?: User | null;
};
