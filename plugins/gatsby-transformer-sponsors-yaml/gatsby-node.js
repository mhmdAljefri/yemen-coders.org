const readFileSync = require('fs').readFileSync;
const resolve = require('path').resolve;
const safeLoad = require('js-yaml').safeLoad;

// TODO It would be nice to replace this plugin with gatsby-transformer-yaml
// That plugin errors on some of the YML files in the docs folder though,
// And doesn't currently support any options to whitelist/blacklist files.

// Reads sponsors.yml data into GraphQL.
// This is auto-linked by gatsby-config.js to blog posts.
exports.sourceNodes = ({graphql, actions}) => {
  const {createNode} = actions;

  const path = resolve(__dirname, '../../content/sponsors.yml');
  const file = readFileSync(path, 'utf8');
  const sponsors = safeLoad(file);

  // sponsors.yml structure is {[username: string]: {name: string, url: string}}
  Object.keys(sponsors).forEach(username => {
    const sponsor = sponsors[username];

    createNode({
      id: username,
      children: [],
      parent: 'SPONSORS',
      internal: {
        type: 'SponsorYaml',
        contentDigest: JSON.stringify(sponsor),
      },
      frontmatter: sponsor,
    });
  });
};
