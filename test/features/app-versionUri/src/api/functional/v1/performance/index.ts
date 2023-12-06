/**
 * @packageDocumentation
 * @module api.functional.v1.performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { IPerformance } from "../../../structures/IPerformance";

/**
 * @controller PerformanceController.get
 * @path GET /v1/performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<get.Output> {
  return PlainFetcher.fetch(connection, {
    ...get.METADATA,
    path: get.path(),
  } as const);
}
export namespace get {
  export type Output = Primitive<IPerformance>;

  export const METADATA = {
    method: "GET",
    path: "/v1/performance",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/v1/performance`;
  };
}
