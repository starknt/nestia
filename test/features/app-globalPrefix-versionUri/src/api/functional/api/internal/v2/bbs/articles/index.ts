/**
 * @packageDocumentation
 * @module api.functional.api.internal.v2.bbs.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { Format } from "typia/lib/tags/Format";

import type { IBbsArticle } from "../../../../../../structures/IBbsArticle";
import type { IPage } from "../../../../../../structures/IPage";

/**
 * @controller BbsArticlesController.index
 * @path GET /api/internal/v2/bbs/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  section: string,
  query: index.Query,
): Promise<index.Output> {
  return PlainFetcher.fetch(connection, {
    ...index.METADATA,
    path: index.path(section, query),
  } as const);
}
export namespace index {
  export type Query = Resolved<IPage.IRequest>;
  export type Output = Primitive<IPage<IBbsArticle.ISummary>>;

  export const METADATA = {
    method: "GET",
    path: "/api/internal/v2/bbs/:section/articles",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (section: string, query: index.Query): string => {
    const variables: Record<any, any> = query as any;
    const search: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(variables))
      if (value === undefined) continue;
      else if (Array.isArray(value))
        value.forEach((elem) => search.append(key, String(elem)));
      else search.set(key, String(value));
    const encoded: string = search.toString();
    return `/api/internal/v2/bbs/${encodeURIComponent(
      section ?? "null",
    )}/articles${encoded.length ? `?${encoded}` : ""}`;
  };
}

/**
 * Update an article.
 *
 * @param section Section code
 * @param id Target article ID
 * @param input Content to update
 * @returns Updated content
 *
 * @controller BbsArticlesController.update
 * @path PUT /api/internal/v2/bbs/:section/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
  connection: IConnection,
  section: string,
  id: string & Format<"uuid">,
  input: update.Input,
): Promise<update.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...(connection.headers ?? {}),
        "Content-Type": "application/json",
      },
    },
    {
      ...update.METADATA,
      path: update.path(section, id),
    } as const,
    input,
  );
}
export namespace update {
  export type Input = Primitive<IBbsArticle.IStore>;
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "PUT",
    path: "/api/internal/v2/bbs/:section/articles/:id",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (
    section: string,
    id: string & Format<"uuid">,
  ): string => {
    return `/api/internal/v2/bbs/${encodeURIComponent(
      section ?? "null",
    )}/articles/${encodeURIComponent(id ?? "null")}`;
  };
}
