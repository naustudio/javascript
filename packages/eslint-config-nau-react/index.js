module.exports = {
  extends: [
    'eslint-config-nau',
    'eslint-config-nau/rules/strict',
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
