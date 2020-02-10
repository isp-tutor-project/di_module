const prettier = require("prettier");

// both indents html output and catches some html syntax errors
function prettify(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
        return prettier.format(content, { parser: "html" })
    }
    return content;
}



function verticallyCenter(content, pctFromTop=30) {
    return `
        <div class="dev centered-wrapper">
            <div class="dev centered" style="top:${pctFromTop}%;">
                ${content}
            </div>
        </div>
    `;
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addTransform("prettier", prettify);

    eleventyConfig.addWatchTarget("./dist/");
    eleventyConfig.addWatchTarget("./src/js/");
    
    eleventyConfig.addPassthroughCopy({"dist": "."});
    eleventyConfig.addPassthroughCopy({"src/img": "img"});
    
    eleventyConfig.addPairedShortcode("vertcenter", verticallyCenter);
    // eleventyConfig.addNunjucksShortcode("columnwidths", function (lhsWidth, rhsWidth) {
    //     return `
    //     {% block lhsWidth %} style="width:${lhsWidth}%;" {% endblock %}
    //     {% block rhsWidth %} style="width:${rhsWidth}%;" {% endblock %}
    // `;
    // });

    return {
        dir: {
            input: "src/templates",
            output: "di"
        },
        htmlTemplateEngine: "njk",
        templateFormats: ["njk", "png", "jpg"]
    }
}