import {RuleSetRule} from "@rspack/core";

export function buildLoaders(): RuleSetRule[] {
    // порядок лоадеров обязателен !!!
    const typescriptLoader = {

        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'builtin:swc-loader',
        options: {
            jsc: {
                parser: {
                    syntax: 'typescript',
                },
            }
        },
        type: 'javascript/auto',
    }
    return [
        typescriptLoader
    ]
}