import CracoLess from 'craco-less';
import CracoAlias from 'craco-alias';
import * as CracoSwcPlugin from 'craco-swc';
import { CracoConfig } from '@craco/types';
import path from 'path';
import webpack from 'webpack';

const isDev = process.env.NODE_ENV === 'development';
const config: CracoConfig = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.plugins = [
            ...(webpackConfig.plugins || []),
            new webpack.ProvidePlugin({
              security: [
                path.resolve(path.join(__dirname, 'src/service/index.ts')),
                'default',
              ],
            }),
          ];

          const miniCssExtractPlugin = webpackConfig.plugins.find((plugin) => {
            if (plugin) {
              return plugin?.constructor?.name === 'MiniCssExtractPlugin';
            }
            return false;
          }) as any;
          if (miniCssExtractPlugin?.options) {
            miniCssExtractPlugin.options.filename = `static/css/min.[name].[contenthash:16].${+new Date()}.css`;
            miniCssExtractPlugin.options.chunkFilename = `static/css/min.[name].[contenthash:16].${+new Date()}.chunk.css`;
          }
          if (webpackConfig.output) {
            webpackConfig.output.filename = `static/js/[name].[contenthash:16].${+new Date()}.js`;
            webpackConfig.output.chunkFilename = `static/js/[name].[contenthash:16].${+new Date()}.chunk.js`;
            webpackConfig.output.cssFilename = `static/css/[name].[contenthash:16].${+new Date()}.css`;
            webpackConfig.output.cssChunkFilename = `static/css/[name].[contenthash:16].${+new Date()}.chunk.css`;
          }
          return webpackConfig;
        },
      },
      options: {},
    },
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.json',
      },
    },
  ],
  webpack: {
    configure: {
      optimization: {
        splitChunks: {
          chunks: isDev ? 'async' : 'all',
          cacheGroups: {
            'core-js': {
              name: 'core-js',
              test: /[\\/]node_modules[\\/]core-js[\\/]/,
            },
            'antd': {
              name: 'antd',
              test: /[\\/]node_modules[\\/]antd[\\/]/,
            },
            echarts: {
              name: 'echarts',
              test: /[\\/]node_modules[\\/]echarts[\\/]/,
            },
          },
        },
      },
    },
  },
};
if (isDev) {
  config.plugins?.push({ plugin: CracoSwcPlugin });
}
export default config;
