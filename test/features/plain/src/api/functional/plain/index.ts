/**
 * @packageDocumentation
 * @module api.functional.plain
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { NestiaSimulator } from "../../utils/NestiaSimulator";

/**
 * @controller PlainController.string
 * @path POST /plain/string
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function string(
  connection: IConnection,
  body: string.Input,
): Promise<string.Output> {
  return !!connection.simulate
    ? string.simulate(connection, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "text/plain",
          },
        },
        {
          ...string.METADATA,
          path: string.path(),
        } as const,
        body,
      );
}
export namespace string {
  export type Input = Primitive<string>;
  export type Output = Primitive<string>;

  export const METADATA = {
    method: "POST",
    path: "/plain/string",
    request: {
      type: "text/plain",
      encrypted: false,
    },
    response: {
      type: "text/plain",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/plain/string`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Primitive<string> => typia.random<Primitive<string>>(g);
  export const simulate = async (
    connection: IConnection,
    body: string.Input,
  ): Promise<Output> => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "text/plain",
    });
    assert.body(() => typia.assert(body));
    return random(
      typeof connection.simulate === "object" && connection.simulate !== null
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * @controller PlainController.template
 * @path POST /plain/template
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function template(
  connection: IConnection,
  body: template.Input,
): Promise<template.Output> {
  return !!connection.simulate
    ? template.simulate(connection, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "text/plain",
          },
        },
        {
          ...template.METADATA,
          path: template.path(),
        } as const,
        body,
      );
}
export namespace template {
  export type Input = Primitive<
    | `something_${number}_interesting_${string}_is_not_false_it?`
    | `something_${number}_interesting_${string}_is_not_true_it?`
  >;
  export type Output = Primitive<string>;

  export const METADATA = {
    method: "POST",
    path: "/plain/template",
    request: {
      type: "text/plain",
      encrypted: false,
    },
    response: {
      type: "text/plain",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/plain/template`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Primitive<string> => typia.random<Primitive<string>>(g);
  export const simulate = async (
    connection: IConnection,
    body: template.Input,
  ): Promise<Output> => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "text/plain",
    });
    assert.body(() => typia.assert(body));
    return random(
      typeof connection.simulate === "object" && connection.simulate !== null
        ? connection.simulate
        : undefined,
    );
  };
}

/**
 * @controller PlainController.constant
 * @path POST /plain/constant
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function constant(
  connection: IConnection,
  body: constant.Input,
): Promise<constant.Output> {
  return !!connection.simulate
    ? constant.simulate(connection, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "text/plain",
          },
        },
        {
          ...constant.METADATA,
          path: constant.path(),
        } as const,
        body,
      );
}
export namespace constant {
  export type Input = Primitive<"A" | "B" | "C">;
  export type Output = Primitive<string>;

  export const METADATA = {
    method: "POST",
    path: "/plain/constant",
    request: {
      type: "text/plain",
      encrypted: false,
    },
    response: {
      type: "text/plain",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (): string => {
    return `/plain/constant`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Primitive<string> => typia.random<Primitive<string>>(g);
  export const simulate = async (
    connection: IConnection,
    body: constant.Input,
  ): Promise<Output> => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "text/plain",
    });
    assert.body(() => typia.assert(body));
    return random(
      typeof connection.simulate === "object" && connection.simulate !== null
        ? connection.simulate
        : undefined,
    );
  };
}
