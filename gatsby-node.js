'use strict';

exports.onCreateWebpackConfig = require('./gatsby/onCreateWebpackConfig');
exports.createPages = require('./gatsby/createPages');
exports.onCreateNode = require('./gatsby/onCreateNode');
exports.onCreatePage = require('./gatsby/onCreatePage');


exports.sourceNodes = ({graphql, actions}) => {
  const {createNode} = actions;

  const path = resolve(__dirname, '../../content/authors.yml');
  const file = readFileSync(path, 'utf8');
  const authors = safeLoad(file);

  // authors.yml structure is {[username: string]: {name: string, url: string}}
  Object.keys(authors).forEach(username => {
    const author = authors[username];

    createNode({
      id: username,
      children: [],
      parent: 'AUTHORS',
      internal: {
        type: 'AuthorYaml',
        contentDigest: JSON.stringify(author),
      },
      frontmatter: author,
    });
  });
};