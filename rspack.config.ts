import {Configuration} from '@rspack/cli';
import {fileURLToPath} from 'url';
import {dirname, resolve,} from 'path';
import {buildRspackConfig} from "./config/build/buildRspackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const paths: BuildPaths = {
        entry: resolve(__dirname, 'src', 'index.ts'),
        build: resolve(__dirname, 'build'),
        html: resolve(__dirname, 'public', 'index.html')
    }

    // process.env.NODE_ENV as BuildMode ||
    const mode = env.mode || 'development';
    const isDev = mode === 'development'
    const PORT = env.port || Number(process.env.PORT) || 8080;
    const analyze = env.analyze || process.env.ANALYZE === 'true';
    const config: Configuration = buildRspackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        analyze
    })
    return config
};
