# Hubble Exchange

Documents and Blogs of Hubble Exchange

## Setup

Prepare machine for development

```bash
# for Mac OS
zsh scripts/init.sh

# Linux or Mac OS bash
bash scripts/init-bash.sh

```

[Windows Instructions](./scripts/WINDOWS.md)

Install dependencies:

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Edge Side Rendering

Can be deployed to Vercel Functions, Netlify Functions, AWS, and most Node-compatible environments.

Look at all the available presets [here](https://v3.nuxtjs.org/guide/deploy/presets).

```bash
pnpm build
```

## Static Generation

Use the `generate` command to build your application.

The HTML files will be generated in the .output/public directory and ready to be deployed to any static compatible hosting.

```bash
pnpm generate
```

## Preview build

You might want to preview the result of your build locally, to do so, run the following command:

```bash
pnpm preview
```

---

For a detailed explanation of how things work, check out [Docus](https://docus.dev).

## Contributing to Blogs
Use this [template for blogs](/content/3.blogs/_0.template.md)
Start writing blog create new file at `/content/blogs/[blog-url].md` replace [blog-url] with blog title replacing space with - and removing special characters e.g. (/,&,%, etc.)

### Blog Config
Populate with the url path of the blog
[Config file](blogs.config.ts) to manage cover story, weekly spotlight

## Converting Medium Articles to Markdown

Run below command with medium article URL it will generate article.md file copy and format the markdown and download image from article and use them similar to medium

```bash
node scripts/fetchMedium.js [medium url]
# eg. node scripts/fetchMedium.js https://medium.com/hubbleexchange/makers-in-hubble-vamm-part-2-54eb9845b0b7
```
