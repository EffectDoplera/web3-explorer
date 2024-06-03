import withPWA from '@ducanh2912/next-pwa'
import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default process.env.ANALYZE === 'true'
  ? withBundleAnalyzer(nextConfig)
  : withPWA({
      dest: 'public',
      register: true,
      cacheOnFrontEndNav: true,
      aggressiveFrontEndNavCaching: true,
      cacheStartUrl: true,
      dynamicStartUrl: true,
      buildExcludes: [/middleware-manifest.json$/],
      extendDefaultRuntimeCaching: true,
      workboxOptions: {
        skipWaiting: true,
      },
    })(nextConfig)
