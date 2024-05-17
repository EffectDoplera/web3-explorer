import withPWA from '@ducanh2912/next-pwa'
import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default process.env.ANALYZE === 'true'
  ? withBundleAnalyzer(nextConfig)
  : withPWA({
      dest: 'public',
    })(nextConfig)
