import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';//сжатие CSS файлов
import webpcss from 'gulp-webpcss';//вывод webp изображений
import autoprefixer from 'gulp-autoprefixer';//вендорные префиксы
import groupCssMediaQueries from 'gulp-group-css-media-queries';//группировать медиа запросы

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'SCSS',
      message: 'Error: <%= error.message %>'
    })
  )
)
  .pipe(app.plugins.replace(/@img\//g, '../img/'))
  .pipe(sass({
    outputStyle: 'expanded' //скомпилировать
  }))
  .pipe(
    app.plugins.if(
      app.isBuild,
      groupCssMediaQueries()
    )
  )
  .pipe(
    app.plugins.if(
      app.isBuild,
      webpcss({
        webpClass: '.webp',
        noWebpClass: '.no-webp'
      })
    )
  )
  .pipe(app.plugins.if(
    app.isBuild,
    autoprefixer({
      grid: true,
      overrideBrowsersList: ['last 3 versions'],// количество версий браузера ниже
      cascade: true,
    })
  ))

  //если потребуется не сжатый файл дубль
  // .pipe(app.gulp.dest(app.path.build.css))

  .pipe(
    app.plugins.if(
      app.isBuild,
      cleanCss()
    )
  )
  .pipe(rename({
    extname: '.min.css' //сжатие css
  }))
  .pipe(app.gulp.dest(app.path.build.css))
  .pipe(app.plugins.browsersync.stream())
}
