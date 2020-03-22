const withCSS = require('@zeit/next-css');
module.exports = withCSS({
    /* config options here */
});
module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        {dev, dir, outDir, distDir, buildId}
    ) {
        return {
            '/': {page: '/'},
            '/privacypolicy': {page: '/privacypolicy'},
            '/tos': {page: '/tos'},
            '/nl': {page: '/', query: {locale: 'nl'}},
            '/nl/privacypolicy': {page: '/privacypolicy', query: {locale: 'nl'}},
            '/nl/tos': {page: '/tos', query: {locale: 'nl'}},
        }
    },
};