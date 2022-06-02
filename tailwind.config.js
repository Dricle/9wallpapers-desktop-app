module.exports = {
    content: [
        './src/renderer/pages/**/*.vue',
        './src/renderer/components/**/*.vue',
        './src/renderer/layouts/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', 'sans-serif']
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
