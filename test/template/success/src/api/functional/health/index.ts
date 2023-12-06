/**
 * @packageDocumentation
 * @module api.functional.health
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

/**
 * @controller HealthController.get()
 * @path GET /health
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function get(connection: IConnection): Promise<void> {
  return Fetcher.fetch(connection, get.ENCRYPTED, get.METHOD, get.path());
}
export namespace get {
  export const METHOD = "GET" as const;
  export const PATH: string = "/health";
  export const ENCRYPTED: Fetcher.IEncrypted = {
    request: false,
    response: false,
  };

  export function path(): string {
    return `/health`;
  }
}
