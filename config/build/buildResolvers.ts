import {ResolveOptions} from "@rspack/core";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.ts', '.js', '.vue']
    }
}