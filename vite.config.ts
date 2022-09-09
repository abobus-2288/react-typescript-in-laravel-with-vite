import { defineConfig } from 'vite';
import laravel from 'vite-plugin-laravel';
import viteReact from "@vitejs/plugin-react";
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
	plugins: [
		laravel({

        }),
        reactRefresh()
	],
})
