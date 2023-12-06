/**
 * @packageDocumentation
 * @module api.functional.partial_dto_test
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, IPropagation, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IOriginal } from "../../structures/IOriginal";

export * as partial_interface from "./partial_interface";
export * as partial_type from "./partial_type";

/**
 * @controller PartialDTOTestController.original
 * @path GET /partial-dto-test/original
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function original(
  connection: IConnection,
): Promise<original.Output> {
  return !!connection.simulate
    ? original.simulate(connection)
    : PlainFetcher.propagate(connection, {
        ...original.METADATA,
        path: original.path(),
      } as const);
}
export namespace original {
  export type Output = IPropagation<{
    200: IOriginal;
  }>;

  export const METADATA = {
    method: "GET",
    path: "/partial-dto-test/original",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/partial-dto-test/original`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Primitive<IOriginal> => typia.random<Primitive<IOriginal>>(g);
  export const simulate = async (connection: IConnection): Promise<Output> => {
    return {
      success: true,
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      data: random(
        typeof connection.simulate === "object" && connection.simulate !== null
          ? connection.simulate
          : undefined,
      ),
    };
  };
}
