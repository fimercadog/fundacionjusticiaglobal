import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // vinext emits dist/standalone/server.js when this is set — that's what the
  // host runs (`node dist/standalone/server.js`).
  output: 'standalone',
};

export default nextConfig;
