import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
	server: {
		port: 3001,
		headers: {
			"Access-Control-Allow-Origin": "http://localhost:3000",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	},
	output: {
		assetPrefix: "http://localhost:3001",
		sourceMap: {
			js: "source-map",
		},
	},
	dev: {
		assetPrefix: true,
		client: {
			port: 3001,
		},
	},
	tools: {
		rspack: (config, { appendPlugins }) => {
			config.output!.uniqueName = "app1";
			appendPlugins([
				new ModuleFederationPlugin({
					name: "remote1",
					exposes: {
						"./button": "./src/button.tsx",
						"./app": "./src/App.tsx",
					},
					shared: [
						"react",
						"react-dom",
						// 'antd'
					],
				}),
			]);
		},
	},
	plugins: [
		pluginReact({
			splitChunks: {
				react: false,
				router: false,
			},
		}),
	],
});