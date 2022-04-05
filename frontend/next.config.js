/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    EXP: process.env.EXP,
    //원하는 환경변수 여러개 추가 가능
  },
};

(module.exports = nextConfig),
  {
    trailingSlash: true,
  };
