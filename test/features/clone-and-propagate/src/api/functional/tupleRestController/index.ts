/**
 * @packageDocumentation
 * @module api.functional.tupleRestController
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, IPropagation, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { TupleRest } from "../../structures/TupleRest";

/**
 * @controller TupleRestController.get
 * @path GET /tupleRestController
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection)
    : PlainFetcher.propagate(connection, {
        ...get.METADATA,
        path: get.path(),
      } as const);
}
export namespace get {
  export type Output = IPropagation<{
    200: TupleRest;
  }>;

  export const METADATA = {
    method: "GET",
    path: "/tupleRestController",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/tupleRestController`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Primitive<TupleRest> => typia.random<Primitive<TupleRest>>(g);
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
