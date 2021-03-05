const apis = require('./docs/whylogs-api/sidebar.json')
module.exports = {
  docs: [
    'intro',
    {
      Overview: ['concepts', 'profiling', 'open-spec', 'data-types'],
      whylogs: ['mdx'],
      "Use Cases": ['doc2', 'doc3'],
      "WhyLabs Platform": ['whylabs-api', 'whylabs-architecture'],
    },
    {
      "whylogs API": apis.items[0].items,
    },
    'external-resources'
  ],
};
