const {series, parallel, src, dest} = require('gulp')
const del = require('del')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')
const uglift = require('gulp-uglify')
const rename = require('gulp-rename')

function limparDestino(){
    return del('dist')
}

function copiarHTML(){
    return src('public/**/*').pipe(dest('dist'))
}

function gerarJS(callback){
    return browserify({
        basedir:'.',
        entries: ['scr/main.ts']
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(disct('dist'))
}

function gerarJSProducao(){
    return src('dist/app.js')
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(disct('disct'))
}

exports.default = series (
    limparDestino,
    parallel(gerarJS, copiarHTML)
)