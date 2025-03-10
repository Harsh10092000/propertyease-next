/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        webURL: "https://api.propertyease.in/",
        //webURL: "http://localhost:8010/",
      },
      images: {
        domains: ['api.propertyease.in'],
      },
};

export default nextConfig;
