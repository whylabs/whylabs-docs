const apis = require('./docs/whylogs-api/sidebar.json')
module.exports = {
  docs: [
    'intro',
    {
      Overview: ['concepts', 'profiling', 'logger', 'data-types'],
      whylogs: ['mdx'],
      "Use Cases": ['doc2', 'doc3'],
      "WhyLabs Platform": ['whylabs-api', 'whylabs-architecture'],
    },
    'external-resources',
    {
      "whylogs API": apis.items[0].items,
    }
  ],
};
