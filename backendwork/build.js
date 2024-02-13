const sass = require('sass');
const less = require('less');
const { minify } = require('html-minifier');
const { minify: minifyJS } = require('uglify-js');
const concat = require('concat');
const fs = require('fs');

// Compile LESS to CSS
less.render(fs.readFileSync('./backendwork/styles/styles.less', 'utf8'), (err, result) => {
    if (!err) {
        fs.writeFileSync('./backendwork/styles/styles.css', result.css);
    }
});

// Minify JavaScript
const minifiedJS = minifyJS(fs.readFileSync('./backendwork/scripts/script.js', 'utf8'));
fs.writeFileSync('./backendwork/scripts/script.min.js', minifiedJS.code);

// Minify HTML
const minifiedHTML = minify(fs.readFileSync('./backendwork/html/index.html', 'utf8'), {
    collapseWhitespace: true,
    removeComments: true
});
fs.writeFileSync('./backendwork/html/index.min.html', minifiedHTML);

// Merge HTML parts into JS
const headerHTML = fs.readFileSync('./backendwork/html/header.html', 'utf8');
const footerHTML = fs.readFileSync('./backendwork/html/footer.html', 'utf8');
fs.writeFileSync('./backendwork/scripts/output.js', headerHTML + footerHTML);
