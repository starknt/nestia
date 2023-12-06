import type { Primitive, Resolved } from "@nestia/fetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import api from "../../../../api";
import type { IBbsArticle } from "../../../../api/structures/IBbsArticle";

export const test_api_headers_update = async (
  connection: api.IConnection,
): Promise<void> => {
  await api.functional.headers.update(
    connection,
    typia.random<Resolved<string>>(),
    typia.random<Resolved<string & Format<"uuid">>>(),
    typia.random<Primitive<IBbsArticle.IStore>>(),
  );
};
