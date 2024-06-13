/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors:true
    },
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'lovely-flamingo-139.convex.cloud'
            },
            {
                protocol:'https',
                hostname:'bright-trout-212.convex.cloud'
            },
            {
                protocol:'https',
                hostname:'img.clerk.com'
            }
        ]
    }
};

export default nextConfig;
