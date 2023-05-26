/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            fontFamily: {
                'sans': ['IRANSansX']
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class', // only generate classes
        }),
    ],
}