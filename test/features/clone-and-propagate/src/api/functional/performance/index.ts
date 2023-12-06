/**
 * @packageDocumentation
 * @module api.functional.performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, IPropagation, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { process } from "../../structures/process";

/**
 * @controller PerformanceController.cpu
 * @path GET /performance/cpu
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function cpu(connection: IConnection): Promise<cpu.Output> {
  return !!connection.simulate
    ? cpu.simulate(connection)
    : PlainFetcher.propagate(connection, {
        ...cpu.METADATA,
        path: cpu.path(),
      } as const);
}
export namespace cpu {
  export type Output = IPropagation<{
    200: process.global.NodeJS.CpuUsage;
  }>;

  export const METADATA = {
    method: "GET",
    path: "/performance/cpu",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/performance/cpu`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Primitive<process.global.NodeJS.CpuUsage> =>
    typia.random<Primitive<process.global.NodeJS.CpuUsage>>(g);
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

/**
 * @controller PerformanceController.memory
 * @path GET /performance/memory
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function memory(connection: IConnection): Promise<memory.Output> {
  return !!connection.simulate
    ? memory.simulate(connection)
    : PlainFetcher.propagate(connection, {
        ...memory.METADATA,
        path: memory.path(),
      } as const);
}
export namespace memory {
  export type Output = IPropagation<{
    200: process.global.NodeJS.MemoryUsage;
  }>;

  export const METADATA = {
    method: "GET",
    path: "/performance/memory",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/performance/memory`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Primitive<process.global.NodeJS.MemoryUsage> =>
    typia.random<Primitive<process.global.NodeJS.MemoryUsage>>(g);
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

/**
 * @controller PerformanceController.resource
 * @path GET /performance/resource
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function resource(
  connection: IConnection,
): Promise<resource.Output> {
  return !!connection.simulate
    ? resource.simulate(connection)
    : PlainFetcher.propagate(connection, {
        ...resource.METADATA,
        path: resource.path(),
      } as const);
}
export namespace resource {
  export type Output = IPropagation<{
    200: process.global.NodeJS.ResourceUsage;
  }>;

  export const METADATA = {
    method: "GET",
    path: "/performance/resource",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/performance/resource`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Primitive<process.global.NodeJS.ResourceUsage> =>
    typia.random<Primitive<process.global.NodeJS.ResourceUsage>>(g);
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
