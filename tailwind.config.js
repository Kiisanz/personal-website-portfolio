/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#232931',
                secondary: '#4ECCA3',
                third: '#393E46',
                light: '#EEEEEE',
            },
        },
    },
    plugins: [],
};
