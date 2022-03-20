// eslint-disable-next-line no-undef
module.exports = {
    "siteMetadata": {
        "title": `Test Mbg`,
        "siteUrl": `https://www.yourdomain.tld`,
    },
    "plugins": [
        {
            "resolve": `gatsby-plugin-sass`,
        },
        {
            "resolve": `gatsby-plugin-compile-es6-packages`,
            "options": {
                "modules": [ `@twicpics/components-demo-wrapper` ],
                "test": /\.jsx$/,
            },
        },
    ],
};
