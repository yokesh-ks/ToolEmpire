module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  jsxSingleQuote: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^@/components/(.*)$',
    '^@/constants/(.*)$',
    '^@/container/(.*)$',
    '^@/hooks/(.*)$',
    '^@/icon/(.*)$',
    '^@/store/(.*)$',
    '^@/lib/(.*)$',
    '^@radix-ui/(.*)$',
    '^@/utils/(.*)$',
    '^@/(.*)$',
    '^@/emails/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}