# Nestia Fetcher
## Outline
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/@nestia/fetcher/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/@nestia/fetcher.svg)](https://www.npmjs.com/package/@nestia/fetcher)
[![Downloads](https://img.shields.io/npm/dm/@nestia/fetcher.svg)](https://www.npmjs.com/package/@nestia/fetcher)
[![Build Status](https://github.com/samchon/@nestia/fetcher/workflows/build/badge.svg)](https://github.com/samchon/@nestia/fetcher/actions?query=workflow%3Abuild)

```bash
npm install --save @nestia/fetcher
```

`@nestia/fetcher` is a fetcher library of [**Nestia**](https://github.com/samchon/nestia) SDK.

When you build an SDK (Software Development Kit) library interacting with remote HTTP server through the [**Nestia**](https://github.com/samchon/nestia), the SDK library would be dependent on this `@nestia/fetcher`. Therefore, if you publish the SDK library on the NPM module, you have to add this `@nestia/fetcher` in the `dependencies` field of the `package.json`.

Also, if you're a client developer who've installed an SDK library which has been generated by the [**Nestia**](https://github.com/samchon/nestia), you also need to install this `@nestia/fetcher` module. With the `IConnection` and `HttpError` instances provided this `@nestia/fetcher`, you can enjoy the SDK library much conveniently. 




## Example
### `package.json`
When you build an SDK library who've been generated by the [**Nestia**](https://github.com/samchon/nestia), you have to add this `@nestia/fetcher` in the `dependencies` field of the `package.json`. If your project had installed the [**Nestia**](https://github.com/samchon/nestia), you can write the `dependencies`' property by writing the `npx nestia dependencies` command on your console.

```json
{
  "name": "payments-server-api",
  "dependencies": {
    "@nestia/fetcher": "^1.0.0"
  }
}
```

### SDK Library
Opening the SDK library source file who've been generated by the [**Nestia**](https://github.com/samchon/nestia), you can find the SDK library is importing this `@nestia/fetcher` module in every `functional` files. Therefore, I repeat that you have to put this `@nestia/fetcher` down into the `dependencies` field of the `package.json`.

```typescript
import { Fetcher, IConnection, Primitive } from "@nestia/fetcher";

/**
 * 결제 내역 발행하기.
 * 
 * @param connection connection information
 * @param input 결제 내역 입력 정보
 * @returns 결제 내역
 * 
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller PaymentHistoriesController.store()
 * @path POST /histories
 */
export function store
    (
        connection: IConnection,
        input: Primitive<store.Input>
    ): Promise<store.Output>
{
    return Fetcher.fetch
    (
        connection,
        store.CONFIG,
        store.METHOD,
        store.path(),
        input
    );
}
export namespace store
{
    export type Input = Primitive<IPaymentHistory.IStore>;
    export type Output = Primitive<IPaymentHistory>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/histories";
    export const CONFIG: IConnection.IEncrypted = {
        input_encrypted: true,
        output_encrypted: true,
    };

    export function path(): string
    {
        return `/histories`;
    }
}
```

### Utilization Code
After you've published the SDK library and let client developers to install the SDK library, the client developers would import this `@nestia/fetcher` module, too. They would utilize the `IConnection` and `HttpError` instances like below.

```typescript
import payments from "payments-server-api";
import { IPaymentHistory } from "payments-server-api/lib/structures/IPaymentHistory";
import { IConnection, HttpError } from "@nestia/fetcher";

export async function main(): Promise<void>
{
    // CONNECTION INFO OF THE REMOTE HTTP SERVER
    const connection: IConnection = {
        host: "http://payments.somewhere.com",
        encryption: {
            key: "SqwHmmXm1fZteI3URPtoyBWFJDMQ7FBQ",
            iv: "9eSfjygAClnE1JJs"
        }
    };

    try
    {
        const input: IPaymentHistory.IStore = { ...SOME_DATA };
        const history: IPaymentHistory = await payments.functional.histories.store
        (
            connection,
            input
        );
    }
    catch (exp)
    {
        // HTTP-ERRROR
        if (exp instanceof HttpError)
            console.log(exp);
    }
}
```