const fs = require('fs')
const mediumToMarkdown = require('medium-to-markdown')

const url = process.argv[2]

if (url.startsWith('http')) {
  mediumToMarkdown.convertFromUrl(url).then((markdown) => {
    fs.writeFileSync('article.md', markdown)
  })
}
else {
  console.log('not valid url', url)
  console.log(
    'valid url example: https://medium.com/hubbleexchange/makers-in-hubble-vamm-part-2-54eb9845b0b7',
  )
}
