import { Configuration } from '@rspack/cli';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import * as rspack from "@rspack/core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: Configuration = {
    mode: 'development',
    entry: resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: '[name].[contenthash].js',
        path: resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new rspack.HtmlRspackPlugin({
            template: resolve(__dirname, 'public', 'index.html')
        }),
        new rspack.ProgressPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue']
    }
};
export default config;
