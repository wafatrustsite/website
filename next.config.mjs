/** @type {import('next').NextConfig} */

// Security headers applied to every response. These are safe for the current
// site (static content + Razorpay checkout + a Formspree contact form) and add
// defense-in-depth against clickjacking, MIME sniffing and referrer leakage.
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
];

const nextConfig = {
  poweredByHeader: false, // don't advertise "X-Powered-By: Next.js"
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
