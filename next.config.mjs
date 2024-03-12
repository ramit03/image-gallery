/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol:'https',
                hostname:'images.unsplash.com',
              
            },
            {
                protocol:'https',
                hostname:'pro.unsplash.com',

            },
        ]
    }
};

export default nextConfig;
