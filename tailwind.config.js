module.exports = {
  content: [
    './theme/layout/*.liquid',
    './theme/templates/*.liquid',
    './theme/templates/customers/*.liquid',
    './theme/sections/*.liquid',
    './theme/snippets/*.liquid',
    './**/*.liquid'
  ],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '468px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    extend: {
      container: {
        center: true
      },
      spacing: {
        "0.5": "0.125rem",
        13: '3.25rem',
        18: '4.5rem',
        30: '7.5rem',
        48: '12rem',
        53: '13.31rem',
        77: '19.25rem',
        104: '26rem',
        112: '28rem',
        124: '31rem',
        136: '33rem',
        160: '40rem',
        192: '48rem',
        200: '50rem',
        240: '60rem',
        245: '61.25rem',
        252: '63rem',
        264: '66rem',
        300: '75rem',
        '1/76': '76.8%',
        '1/45': '45%',
        '1/55': '55%'
      },
      colors: {
        green: '#458334',
        'green-1': '#009344',
        'green-2': '#558E54',
        orange: "#EFA24C",
        'dark-orange': "#E38D30",
        'orange-1': '#FC9B2A',
        'orange-2': "#FAA440",
        blue: "#081346",
        'blue-1': "#081833",
        yellow: "#C7A945",
        grey: "#6F6F6F",
        "grey-2": "#F8F8F9",
        "dark-grey": "#676767",
        "light-grey": "#FAFAFA"
      },
      backgroundSize: {
        'full': '100% 100%',
      },
      maxWidth: {
        '33': '33%',
        '30': '30rem'
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
        '1/4': '25%',
        '2/5': '40%',
        '52': '13rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '128': '32rem',
        '192': '44rem',
        '196': "49rem",
        '274': '68.5rem',
        '290': '72rem'
      }),
      fontFamily: {
        'loto': ['Loto'],
        'aeonik': ['Aeonik'],
        'recoleta': ['Recoleta'],
        'baskerville': ['Baskerville']
      },
      fontSize: {
        '8': '2rem',
        '45': '45px',
        '20': '5rem',
        '22': '1.375rem',
        '26': '26px',
        '28': '28px',
        '65': '65px',
        '68': '68px',
        '87': '87px',
        '9xl': '9rem',
        '14': '3.5rem',
        '8.1xl': '6.75rem',
        '32': '32px'
      },
      gridTemplateColumns: {
        'cta': '1.78fr 1.22fr',
        'footer': '1.78fr 1.22fr',
        '2-gb-1': '1.4fr 1.6fr',
        '2-gb-2': '1.6fr 1.4fr',
        'product' : '0.4fr 0.3fr 0.3fr'
      },
      height: (theme) => ({
        ...theme('spacing'),
        '25vh': '25vh',
        '30vh': '30vh',
        '32vh': '32vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '112': '28rem',
        '128': '32rem',
        '172': '43rem',
        '192': '44rem',
        '196': "49rem"
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
        '25vh': '25vh',
        '30vh': '30vh',
        '32vh': '32vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '112': '28rem',
        '128': '32rem',
        '172': '43rem',
        '192': '44rem',
        '196': "49rem"
      }),
      lineHeight: {
        '16': '4rem',
        '20': '5rem',
        '21': '5.32rem',
      },
      borderRadius: {
        '25': '25px'
      },
      bottom: {
        88: '22rem',
        160: '40rem',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};