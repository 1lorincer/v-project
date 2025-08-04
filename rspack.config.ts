import {Configuration} from '@rspack/cli';
import {fileURLToPath} from 'url';
import {dirname, resolve,} from 'path';
import {buildRspackConfig} from "./config/build/buildRspackConfig";
import {BuildPaths} from "./config/build/types/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const paths: BuildPaths = {
    entry: resolve(__dirname, 'src', 'index.ts'),
    build: resolve(__dirname, 'build'),
    html: resolve(__dirname, 'public', 'index.html')
}
const mode = "development"
const isDev = mode === 'development'
const config: Configuration = buildRspackConfig({
    mode: 'development',
    paths,
    isDev
})
export default config;
