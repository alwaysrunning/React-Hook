# __项目创建__

本项目基于 [Reactseed](https://github.com/reactseed/reactseed) 创建。

## 开发命令

- 开发 : `npm start`
- 测试 : `npm test`
- 构建 : `npm run build`
- 分析 : `npm run analyze`

## 文件结构

```bash
__name__
├── mock
├── public
├── src
│ ├── components
│ ├── configs
│ ├── constants
│ ├── hooks
│ ├── pages
│ │ ├── Playground
│ ├── routes
│ ├── service
│ ├── themes
│ ├── typings
│ ├── utils
│ ├── index.tsx
│ ├── react-app-env.d.ts
│ ├── react.d.ts
│ ├── reportWebVitals.ts
│ ├── router.tsx
│ ├── setupTests.ts
│ └── setupProxy.js
├── .cz-config.js
├── .env
├── .eslintignore
├── .eslint.js
├── .gitignore
├── .prettierrc
├── .stylelintrc
├── craco.config.ts
├── README.md
├── tsconfig.eslint.json
├── tsconfig.json
└── package.json
```

## 主要依赖

- 组件库：[antd](https://ant.design/components/overview-cn/)
- 标准库：[core-js](https://github.com/zloirock/core-js)
- Hooks：[react-use](https://github.com/streamich/react-use)
- 数据请求：[axios](https://axios-http.com)、[axios-hooks](https://github.com/simoneb/axios-hooks)
- 数据管理：[zustand](https://github.com/pmndrs/zustand)
- 错误捕获：[use-error-boundary](https://github.com/JoschuaSchneider/use-error-boundary)

### 内置 Hooks

项目内置了基础的 `Hooks`，如下：

- `useRequest`：数据请求，建议根据业务进行调整
- `useAppStore`：全局数据管理

### 模块联邦

项目内置了模块联邦配置，[参考详情](https://webpack.js.org/plugins/module-federation-plugin/)

- 新增远程模块更新 `craco.config.ts` 下 `remotes` 配置
- 在 `src/typings/remote.d.ts` 手动声明远程模块类型

## 相关文档

- [Reactseed 文档](https://reactseed.surge.sh/docs/getting-started)
- [Create React App 文档](https://create-react-app.dev/docs/getting-started)
- [Craco 文档](https://github.com/dilanx/craco)
