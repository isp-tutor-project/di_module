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
    eleventyConfig.addWatchTarget("./src/css/");
    
    eleventyConfig.addPassthroughCopy({"dist": "."});
    eleventyConfig.addPassthroughCopy({"src/img": "img"});

    eleventyConfig.addCollection("diScenes", function(collection) {
        let scenes = collection.getFilteredByTag("scenes");
        let sceneData = collection.getAll()[0].data.scenes;

        let diScenes = scenes.map((item) => {
            let id = item.data.page.fileSlug;
            // console.log(id);
            let frontMatter = item.template.frontMatter.data;
            // console.log("\tfrontMatter", frontMatter);
            // console.log("\tsceneData", sceneData[id]);
            item.data.page.data = Object.assign({}, frontMatter, sceneData[id]);
            return item;
        });
        return diScenes;
    });

    eleventyConfig.addNunjucksFilter("jsonify", function(obj, indent=null) {
        return JSON.stringify(obj, null, indent);
    });

    eleventyConfig.addPairedShortcode("vertcenter", verticallyCenter);
    
    return {
        dir: {
            input: "src/templates",
            output: "di",
            includes: "_includes",
            data: "_data"
        },
        htmlTemplateEngine: "njk",
        templateFormats: ["njk", "png", "jpg"]
    }
}