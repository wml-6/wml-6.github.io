import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/origin/", // 改为你的仓库名，如果部署到根目录则改为 '/'
});
