import gulp from "gulp";
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import gulpSass from "gulp-sass";
import livereload from "gulp-livereload";

const sass = gulpSass(dartSass);

function reload(done) {
	gulp.src('./scss/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 5 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./css/'))
		.pipe(livereload());
	done();
};

function watcher() {
	livereload.listen();
	gulp.watch('./scss/*.scss', reload);
};
const dev = gulp.series(watcher);
gulp.task('default', dev);