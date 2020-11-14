// From tailwindcss setup guide: https://github.com/tailwindlabs/tailwindcss-setup-examples/tree/master/examples/nextjs
const purgecss = [
    "@fullhuman/postcss-purgecss",
    {
        content: ["./components/**/*.js", "./pages/**/*.js"],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
];

module.exports = {
    plugins: [
        "postcss-import",
        "tailwindcss",
        "autoprefixer",
        ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    ],
};
