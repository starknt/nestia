/**
 * @packageDocumentation
 * @module api.functional.selles.sales.entire
 */
//================================================================
import { AesPkcs5, Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { IPage } from "./../../../../../../../nestia.config.ts/src/api/structures/common/IPage";
import type { ISaleEntireArtcle } from "./../../../../structures/sales/articles/ISaleEntireArticle";

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller SellerSaleEntireArticlesController.index()
 * @path GET /selles/:section/sales/:saleId/entire
 */
export function index
    (
        connection: IConnection,
        section: string,
        saleId: number,
        input: Primitive<index.Query>
    ): Promise<index.Output>
{
    return Fetcher.fetch
    (
        connection,
        index.ENCRYPTED,
        index.METHOD,
        index.path(section, saleId, input)
    );
}
export namespace index
{
    export type Query = Primitive<IPage.IRequest<string>>;
    export type Output = Primitive<IPage<ISaleEntireArtcle.ISummary>>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/selles/:section/sales/:saleId/entire";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(section: string, saleId: number, input: IPage.IRequest<string>): string
    {
        return `/selles/${section}/sales/${saleId}/entire?${new URLSearchParams(input as any).toString()}`;
    }
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller SellerSaleEntireArticlesController.at()
 * @path GET /selles/:section/sales/:saleId/entire/:id
 */
export function at
    (
        connection: IConnection,
        section: string,
        saleId: number,
        id: number
    ): Promise<at.Output>
{
    return Fetcher.fetch
    (
        connection,
        at.ENCRYPTED,
        at.METHOD,
        at.path(section, saleId, id)
    );
}
export namespace at
{
    export type Output = Primitive<ISaleEntireArtcle>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/selles/:section/sales/:saleId/entire/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(section: string, saleId: number, id: number): string
    {
        return `/selles/${section}/sales/${saleId}/entire/${id}`;
    }
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;