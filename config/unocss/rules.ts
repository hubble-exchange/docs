const shadowGradient = ([], { rawSelector }: { rawSelector: string }) => {
  return `.${rawSelector} {
  position: relative;
}

.${rawSelector} > * {
  position: relative;
  z-index: 2;
}
.${rawSelector}::after {
  content: '';
  position: absolute;
  top: -9px;
  right: 0;
  bottom: -9px;
  left: 0;
  z-index: -1;
  filter: blur(26px);
  transition: all 0.3s ease;
}
`
}

export const shadowRules = [
  [
    /^(?:cs|c-shadow)-(\w+)$/,
    ([, shadow]: string[]) => ({ 'box-shadow': `var(--shadow-${shadow})` }),
    { autocomplete: ['cs|c-shadow'] },
  ],
  [/^(?:sgr|shadow-gr)$/, shadowGradient, { autocomplete: ['sgr|shadow-gr'] }],
]

export const otherRules = [...shadowRules]
