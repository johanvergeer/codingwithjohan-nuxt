module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'chore',
        'refactor',
        'test',
        'revert',
        'content', // For articles, tutorials, etc...
      ],
    ],
  },
}
