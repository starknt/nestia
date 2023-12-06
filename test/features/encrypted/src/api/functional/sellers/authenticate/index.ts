/**
 * @packageDocumentation
 * @module api.functional.sellers.authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { EncryptedFetcher } from "@nestia/fetcher/lib/EncryptedFetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { ISeller } from "../../../structures/ISeller";

export * as password from "./password";

/**
 * Join as a seller.
 *
 * @param input Information of yours
 * @return Information of newly joined seller
 * @setHeader authorization.token Authorization
 *
 * @controller SellerAuthenticateController.join
 * @path POST /sellers/authenticate/join
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function join(
  connection: IConnection,
  input: join.Input,
): Promise<join.Output> {
  const output: join.Output = await EncryptedFetcher.fetch(
    {
      ...connection,
      headers: {
        ...(connection.headers ?? {}),
        "Content-Type": "text/plain",
      },
    },
    {
      ...join.METADATA,
      path: join.path(),
    } as const,
    input,
  );

  // configure header(s)
  connection.headers ??= {};
  connection.headers.Authorization = output.authorization.token;

  return output;
}
export namespace join {
  export type Input = Primitive<ISeller.IJoin>;
  export type Output = Primitive<ISeller.IAuthorized>;

  export const METADATA = {
    method: "POST",
    path: "/sellers/authenticate/join",
    request: {
      type: "text/plain",
      encrypted: true,
    },
    response: {
      type: "text/plain",
      encrypted: true,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/sellers/authenticate/join`;
  };
}

/**
 * Log-in as a seller.
 *
 * @param input Email and password
 * @return Information of the seller
 * @assignHeaders authorization
 *
 * @controller SellerAuthenticateController.login
 * @path POST /sellers/authenticate/login
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function login(
  connection: IConnection,
  input: login.Input,
): Promise<login.Output> {
  const output: login.Output = await EncryptedFetcher.fetch(
    {
      ...connection,
      headers: {
        ...(connection.headers ?? {}),
        "Content-Type": "text/plain",
      },
    },
    {
      ...login.METADATA,
      path: login.path(),
    } as const,
    input,
  );

  // configure header(s)
  connection.headers ??= {};
  Object.assign(connection.headers, output.authorization);

  return output;
}
export namespace login {
  export type Input = Primitive<ISeller.ILogin>;
  export type Output = Primitive<ISeller.IAuthorized>;

  export const METADATA = {
    method: "POST",
    path: "/sellers/authenticate/login",
    request: {
      type: "text/plain",
      encrypted: true,
    },
    response: {
      type: "text/plain",
      encrypted: true,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/sellers/authenticate/login`;
  };
}

/**
 * Erase the seller by itself.
 *
 * @controller SellerAuthenticateController.exit
 * @path DELETE /sellers/authenticate/exit
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function exit(connection: IConnection): Promise<void> {
  return PlainFetcher.fetch(connection, {
    ...exit.METADATA,
    path: exit.path(),
  } as const);
}
export namespace exit {
  export const METADATA = {
    method: "DELETE",
    path: "/sellers/authenticate/exit",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/sellers/authenticate/exit`;
  };
}
