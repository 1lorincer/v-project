import * as rspack from "@rspack/core";
import {RspackPluginInstance} from "@rspack/core";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths, isDev}: BuildOptions): RspackPluginInstance[] {
    const plugins = [
        new rspack.HtmlRspackPlugin({
            template: paths.html
        }),
        new rspack.ProgressPlugin(),
        new rspack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API_URL__: JSON.stringify(process.env.API_URL || 'http://localhost:8000'),
            __PROJECT__: JSON.stringify('frontend'),
        }),
        new rspack.EnvironmentPlugin({
            NODE_ENV: isDev ? 'development' : 'production',
            DEBUG: 'false',
            API_URL: 'http://localhost:8000',
        }),
    ]
    return plugins
}
