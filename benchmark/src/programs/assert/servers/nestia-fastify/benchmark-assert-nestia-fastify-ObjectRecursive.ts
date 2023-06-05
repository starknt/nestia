import { Controller } from "@nestjs/common";

import core from "@nestia/core";

import { Collection } from "../../../../structures/pure/Collection";
import { ObjectRecursive } from "../../../../structures/pure/ObjectRecursive";
import { createNestFastifyAssertProgram } from "../createNestFastifyAssertProgram";

createNestFastifyAssertProgram(false)(37_022)(() => {
    @Controller()
    class NestiaController {
        @core.TypedRoute.Post("assert")
        public assert(@core.TypedBody() input: Collection<ObjectRecursive>): void {
            input;
        }
    }
    return NestiaController;
});