import nextConfig from 'eslint-config-next'

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ['node_modules/', 'build/', 'dist/', '.next/'],
  },
  {
    rules: {
      'linebreak-style': ['error', 'unix'],
      'no-console': 'error',
      'no-duplicate-imports': ['error', { includeExports: true }],
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'warn',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      curly: 'error',
      'default-case': 'error',
      eqeqeq: 'error',
    },
  },
]

export default eslintConfig
