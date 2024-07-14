import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/7.15',
	plugins: [vue()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
			},
			output: {
				chunkFileNames: 'javascript/[name]-[hash:8].js',
				entryFileNames: 'javascript/[name]-[hash:8].js',
				assetFileNames: chunkInfo => {
					const imageReg = /(png|gif|jpeg|svg|webp)$/
					const [, ext] = path.basename(<string>chunkInfo.name).split('.')
					if (ext === 'css') {
						return `css/[name]-[hash:8].${ext}`
					} else if (imageReg.test(ext)) {
						return `images/[name]-[hash:8].${ext}`
					}
					return 'assets/[name]-[hash:8].[ext]'
				},
			},
		},
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: true,
		emptyOutDir: true,
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/sass/variable.scss";`,
			},
		},
	},
})
