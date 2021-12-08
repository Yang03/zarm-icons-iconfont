const gulp = require('gulp')
const rename = require('gulp-rename')
const sketch = require('gulp-sketch')
const iconfont = require('gulp-iconfont')
const consolidate = require('gulp-consolidate')


const fontName = 'zaicons' // set name of your symbol font
const className = 'icon' // set class name in your CSS
const template = 'template/fontawesome-style' // or 'foundation-style'
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
        fontPath: '../fonts/', // set path to font (from your CSS file if relative)
        glyphs:  glyphs,
        // version: 1
      }
      gulp.src(`template/styles_template.css`)
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename: fontName }))
        .pipe(gulp.dest('dist/css/')) // set path to export your CSS

      // if you don't need sample.html, remove next 4 lines
      gulp.src('template/html_template.html')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename: 'sample' }))
        .pipe(gulp.dest('./')) // set path to export your sample HTML
    })
    .pipe(gulp.dest('dist/fonts/')) // set path to export your fonts
)