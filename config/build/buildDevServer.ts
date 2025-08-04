import {BuildOptions} from "./types/config";
import {DevServer} from "@rspack/core";

export function buildDevServer(options: BuildOptions): DevServer {
    return {
        port: options.port,
        open: true,
    }
}
