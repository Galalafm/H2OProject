var appSrc    = 'app',
    appDest   = 'build',
    bourbon   = require('node-bourbon');


module.exports = {
  appSrc: appSrc,
  appDest: appDest,

  styles: {
    watchSrc: appSrc + '/assets/styles/**/*.scss',
    src: appSrc + '/assets/styles/main.scss',
    vendorSrc: [
      appSrc + '/assets/styles/vendors/**/*',
      'node_modules/slick-carousel/slick/slick.scss',
      'node_modules/slick-carousel/slick/slick-theme.scss'
    ],
    dest: appDest + '/css/',
    sassOpts: {
      includePaths: [
        bourbon.includePaths,
        //'node_modules/reset-css/_reset.scss'
      ]
    },
    autoprefixerOpts: {
      browsers: [
        'last 2 versions',
        'not ie <= 10',
        'not ie_mob <= 10',
        'last 4 Android versions',
        'Safari >= 8'
      ]
    }
  },


  scripts: {
    src: [
      appSrc + '/assets/scripts/*',
    ],
    vendorSrc: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/countup.js/dist/countUp.min.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      appSrc + '/assets/scripts/vendors/*.js',
      appSrc + '/assets/scripts/vendors/**/*.js'
    ],
    dest: appDest + '/scripts/'
  },

  iconfont: {
    src: appSrc + '/assets/icons/*.svg',
    dest: appSrc + '/assets/fonts/',
    fontSrc: appSrc + '/assets/fonts/icons.*',
    fontDest: appDest + '/fonts/',
    opts: {
      fontName: 'icons',
      path: appSrc + '/assets/styles/base/_icons-tpl.scss',
      targetPath: '../styles/base/_icons.scss',
      fontPath: '../fonts/'
    }
  },

  images: {
    src: appSrc + '/assets/img/**/*.{jpg,png,gif,svg}',
    dest: appDest + '/img/',
    opts: {
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }
  },

  views: {
     watchSrc: appSrc + '/views/**/*.html',
     src: appSrc + '/views/**/*.html',
     dest: appDest,
     opts: {
       process: true
     }
   },

  copy: {
    watchSrc: appSrc + '/views/**/*',
    src: appSrc + '/views/**/*',
    dest: appDest,
    opts: {
      pretty: true
    }
  },

  fonts: {
    src: appSrc + '/assets/fonts/*',
    dest: appDest + '/fonts/'
  },

  datas: {
    watchSrc: appSrc + '/assets/datas/*',
    src: appSrc + '/assets/datas/*',
    dest: appDest + '/datas/',
    opts: {
      pretty: true
    }
  },

  medias: {
    src: appSrc + '/assets/medias/*',
    dest: appDest + '/medias/'
  },

  clean: {
    src: [
      appDest + '/*'
    ]
  },

  browserSync: {
    server: {
      baseDir: appDest,
      directory: true
    }
  }
};
