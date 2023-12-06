import { TestValidator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";

import api from "@api";

const test = api.functional.success.union;

export const test_expired = async (connection: IConnection) => {
  const response = await test(connection, "EXPIRED_PERMISSION");
  if (response.status === 401)
    TestValidator.equals("response")(response.data)("EXPIRED_PERMISSION");
  else throw Error("unexpected response");
};
export const test_requred = async (connection: IConnection) => {
  const response = await test(connection, "REQUIRED_PERMISSION");
  if (response.status === 401)
    TestValidator.equals("response")(response.data)("REQUIRED_PERMISSION");
  else throw Error("unexpected response");
};
