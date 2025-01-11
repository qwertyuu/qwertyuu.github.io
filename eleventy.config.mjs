import { EleventyRenderPlugin, EleventyI18nPlugin } from '@11ty/eleventy';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import esbuild from 'esbuild';
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import yaml from 'js-yaml';
import CleanCSS from 'clean-css';

export default function (eleventyConfig) {

  eleventyConfig.setServerOptions({
    domdiff: false,
  });

  eleventyConfig.setDataFileBaseName('_data');

  eleventyConfig.addPassthroughCopy({
    '_site/_assets/files': '_assets/files',
    '_site/_assets/img': '_assets/img',
    '_site/_assets/_root': './',
    'CNAME': 'CNAME',
  });

  eleventyConfig.addWatchTarget('./_site/_app/_app.js');

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "fr",
  });
  

  //{% renderTemplate "md" %}
  //# Blah{.text-center}
  //{% endrenderTemplate %}
  const markdownLibrary = markdownIt({
    html: true,
  }).disable('code').use(markdownItAttrs);
  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

  // shortcodes
  eleventyConfig.addShortcode('bust', () => `${new Date().getFullYear()}${new Date().getMonth()}${new Date().getDate()}${new Date().getHours()}`);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode('renderblock', function(name) {
    return (this.page.setblock || {})[name] || '';
  });
  eleventyConfig.addPairedShortcode('setblock', function(content, name) {
    if (!this.page.setblock) this.page.setblock = {};
    this.page.setblock[name] = content;
    return '';
  });

  // md {{ some.content | md | safe }}
  eleventyConfig.addFilter('md', function(content) {
    return markdownLibrary.render(content);
  });

  eleventyConfig.addFilter('current_locale_content', function(content) {
    return content.filter((c) => c.page.lang === this.page.lang);
  });

  // cssmin
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // {%- for item in (items | flatMap('category') | unique('category')) %}
  eleventyConfig.addFilter('flatMap', (list, key) => list.flatMap((x) => x[key]));
  eleventyConfig.addFilter('unique', (list, key) => {
    const map = new Map(list.map((x) => [x[key], x]))
    return [...map.values()]
  });

  // esbuild
  eleventyConfig.on('eleventy.after', async ({ dir, results, runMode, outputMode }) => {
    return esbuild.build({
      entryPoints: ['_site/_app/_app.js'],
      outfile: 'public/_assets/js/_app.js',
      bundle: true,
      minify: true,
      sourcemap: false,
    });
  });

  return {
    jsDataFileSuffix: '.data',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: '_site',
      output: 'public',
    },
    pathPrefix: '/',
  };
};
