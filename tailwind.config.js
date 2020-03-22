module.exports = {
    theme: {
        fontSize: {
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '2rem',
            '4xl': '2.5rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem'
        },
        backgroundColor: theme => ({
            'primary': '#f3f3f3',
            'secondary': '#ff896b'
        }),
        textColor: theme => ({
            ...theme('colors'),
            'primary': '#f3f3f3',
            'secondary': '#ff896b',
        }),
        minWidth: {
            '0': '0',
            '0.5': '0.5rem',
            '0.8': '0.8rem',
            '1' : '1rem',
            '2' : '2rem',
            '10' : '10rem',
            '15' : '15rem',
            '20': '20rem',
            '24': '24rem',
            'full': '100%',
        },
        minHeight: {
            '0': '0',
            '10' : '10rem',
            '15' : '15rem',
            '20': '20rem',
            '24': '24rem',
            'full': '100%',
            'screen': '100vh'
        },
        borderColor: theme => ({
            ...theme('colors'),
            'primary': '#f3f3f3',
            'secondary': '#ff896b',
        })
    }
};