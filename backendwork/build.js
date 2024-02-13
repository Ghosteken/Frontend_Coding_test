const sass = require('sass');
const less = require('less');
const { minify } = require('html-minifier');
const { minify: minifyJS } = require('uglify-js');
const concat = require('concat');
const fs = require('fs');



// Compile LESS to CSS
less.render(fs.readFileSync('styles.less', 'utf8'), (err, result) => {
    if (!err) {
        fs.writeFileSync('styles.css', result.css);
    }
});

// Minify JavaScript
const minifiedJS = minifyJS(fs.readFileSync('script.js', 'utf8'));
fs.writeFileSync('script.min.js', minifiedJS.code);

// Minify HTML
const minifiedHTML = minify(fs.readFileSync('index.html', 'utf8'), {
    collapseWhitespace: true,
    removeComments: true
});
fs.writeFileSync('index.min.html', minifiedHTML);

// Merge HTML parts into JS
const headerHTML = fs.readFileSync('header.html', 'utf8');
const footerHTML = fs.readFileSync('footer.html', 'utf8');
fs.writeFileSync('output.js', headerHTML + footerHTML);
