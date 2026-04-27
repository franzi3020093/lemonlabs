import type { NextConfig } from 'next'

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: false,
})

const nextConfig: NextConfig = {
  // Next.js configuration options go here
}

export default withPWA(nextConfig)