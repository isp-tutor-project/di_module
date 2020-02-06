const prettier = require("prettier");

// both indents html output and catches some html syntax errors
function prettify(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
        return prettier.format(content, { parser: "html" })
    }
    return content;
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addTransform("prettier", prettify);
    eleventyConfig.addWatchTarget("dist/*.js");
    eleventyConfig.addPassthroughCopy({"dist/*.*": "."});
    eleventyConfig.addPassthroughCopy({"src/img": "img"});
    return {
        dir: {
            input: "src/templates",
            output: "di"
        },
        htmlTemplateEngine: "njk",
        templateFormats: ["njk", "png", "jpg"]
    }
}