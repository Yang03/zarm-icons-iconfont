const gulp = require('gulp')
const rename = require('gulp-rename')
const sketch = require('gulp-sketch')
const iconfont = require('gulp-iconfont')
const consolidate = require('gulp-consolidate')

const sass = require('gulp-dart-sass')
const through2 = require('through2')
const path = require('path')

const gulpCopy = require('gulp-copy')

const getProjectPath = (dir = './') => {
  return path.join(process.cwd(), dir);
}

const fontName = 'zaicons' // set name of your symbol font
const className = 'icon' // set class name in your CSS
const skethcFileName = 'assets/icons.sketch'

const timestamp = Math.round(Date.now() / 1000)

function mapGlyphs (glyph) {
  // codepoint: glyph.unicode[0].charCodeAt(0)
  return { name: glyph.name,  }
}

gulp.task('build', () =>
  gulp.src(skethcFileName)
    .pipe(sketch({
      export: 'artboards',
      formats: 'svg'
    }))
    .pipe(iconfont({
      fontName,
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
      timestamp,
      log: () => {} // suppress unnecessary logging
    }))
    .on('glyphs', (glyphs) => {
      const options = {
        className,
        fontName,
        fontPath: './fonts/', // set path to font (from your CSS file if relative)
        glyphs:  glyphs,
        // version: 1
      }
      gulp.src(`template/styles_template.css`)
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename: fontName }))
        .pipe(gulp.dest('src/style/')) // set path to export your CSS

      // if you don't need sample.html, remove next 4 lines
      gulp.src('template/html_template.html')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename: 'sample' }))
        .pipe(gulp.dest('./')) // set path to export your sample HTML

        gulp.src('template/js_template.js')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename: 'index' }))
        .pipe(gulp.dest('src/react')) 
    })
    .pipe(gulp.dest('src/style/fonts/')) // set path to export your fonts
)

const DIR = {
  sass: getProjectPath(`src/**/index.scss`),
  js: getProjectPath(`lib/**/style/index.js`),
};

const cssInjection = (content) => {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.scss/g, '.css');
};


gulp.task('sass', () => {
  sass.compiler = require('sass');
  return gulp
    .src(DIR.sass)
    .pipe(
      sass({
        includePaths: ['node_modules'],
      }).on('error', sass.logError),
    )
    .pipe(gulp.dest('lib'));
});

gulp.task('css', () => {
  return gulp
    .src(DIR.js)
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        const content = file.contents.toString(encoding);
        file.contents = Buffer.from(cssInjection(content));
        file.path = file.path.replace(/index\.js/, 'css.js');
        this.push(file);
        next();
      }),
    )
    .pipe(gulp.dest('lib'));
});

gulp.task('copyFont', () => {
  return gulp
    .src('src/style/fonts/*')
    .pipe(
      gulpCopy('lib/style', { prefix: 2 }),
    )
    //.//pipe(gulp.dest('lib/style'));
});