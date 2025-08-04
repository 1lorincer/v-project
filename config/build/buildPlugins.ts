import * as rspack from "@rspack/core";
import {RspackPluginInstance} from "@rspack/core";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths} : BuildOptions): RspackPluginInstance[] {
    return [
        new rspack.HtmlRspackPlugin({
            template: paths.html
        }),
        new rspack.ProgressPlugin()
    ]
}
