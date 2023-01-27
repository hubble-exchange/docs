import { toEscapedSelector as e } from 'unocss'

const commonGradientBorderStyles = ([], { rawSelector }: { rawSelector: string }) => {
  const selector = e(rawSelector)
  const psuedo = selector.startsWith('.a') ? '::after' : selector.startsWith('.b') ? '::before' : ''
  if (psuedo === '')
    return

  return `${selector} {
  position: relative;
}

${selector} > * {
  position: relative;
  z-index: 2;
}

${selector}${psuedo} {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  content: '';
  height: 100%;
  position: absolute;
  border-radius: inherit;
  background-size: 100% 100%;
  transition: background-position 0.3s ease-in-out, opacity 0.3s ease-in-out;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
`
}
const commonGradientStyles = ([], { rawSelector }: { rawSelector: string }) => {
  const selector = e(rawSelector)
  const psuedo = selector.startsWith('.a') ? '::after' : selector.startsWith('.b') ? '::before' : ''
  if (psuedo === '')
    return

  return `${selector} {
    position: relative;
  }

  ${selector} > * {
    position: relative;
    z-index: 2;
  }

  ${selector}${psuedo} {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    border-radius: inherit;
    transition: background-position 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
`
}

const gradientResolver = ([, name, deg = '0']: string[]) => {
  deg = `${deg}deg`

  return {
    '--deg': deg,
    'background': `linear-gradient(var(--deg), var(--${name}))`,
  }
}

const gradientTextResolver = ([, name, deg = '0']: string[]) => {
  deg = `${deg}deg`

  return {
    '--deg': deg,
    'background': `linear-gradient(var(--deg), var(--${name}))`,
    'color': 'rgba(0, 0, 0, 0.2)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    'background-clip': 'text',
  }
}

export const gradientRules = [
  /**
   * Background gradient
   * @example bggr-blueCapriPurpleElectBCrayola bg-gr-blueCapriPurpleElectBCrayola bg-gradient-cpy
   */
  [/^(?:bggr|bg-gr|bg-gradient)-(.+)$/, gradientResolver, { autocomplete: ['(bggr|bg-gr|bg-gradient)-$colors'] }],
  /**
   * background gradient with degree
   * @example bggr-blueCapriPurpleElectBCrayola-12 bg-gr-blueCapriPurpleElectBCrayola-45 bg-gradient-blueCapriPurpleElectBCrayola-32 // defaults to 0
   */
  [
    /^(?:bggr|bg-gr|bg-gradient)-(.+)-(\d+)$/,
    gradientResolver,
    { autocomplete: ['(bggr|bg-gr|bg-gradient)-$colors-<num>'] },
  ],

  /**
   * Alias for bg-gr or bg-gradient
   * @example b-gr-blueCapriPurpleElectBCrayola bgr-blueCapriPurpleElectBCrayola border-gr-blueCapriPurpleElectBCrayola bordergr-blueCapriPurpleElectBCrayola
   */
  [/^(?:border-|border|b-|b|)gr-(.+)$/, gradientResolver, { autocomplete: ['b(-gr|gr|order-gr|ordergr)-$colors'] }],
  /**
   * Alias for bg-gr or bg-gradient
   * @example b-gr-blueCapriPurpleElectBCrayola-90 bgr-blueCapriPurpleElectBCrayola-90 border-gr-blueCapriPurpleElectBCrayola-90 bordergr-blueCapriPurpleElectBCrayola-90
   */
  [/^(?:border-|border|b-|b|)gr-(.+)-(\d+)$/, gradientResolver, { autocomplete: ['(b-gr|border-gr)-$colors-<num>'] }],

  /**
   * Background Position
   * @example bg-xy-12-22 bgxy-12-343
   */
  [
    /^(?:bgxy|bg-xy)-(.+)-(.+)$/,
    ([, x, y]: string[]) => ({ 'background-position': `${x}% ${y}%` }),
    { autocomplete: ['bg-xy-<num>-<num>'] },
  ],

  /**
   * Background Width
   * @example bg-w-12 bgw-12
   */
  [/^(?:bgw|bg-w)-(.+)$/, ([, w]: string[]) => ({ 'background-size': `${w}% auto` }), { autocomplete: ['bg-w-<num>'] }],

  /**
   * Background Height
   * @example bg-h-22 bgh-343
   */
  [/^(?:bgh|bg-h)-(.+)$/, ([, h]: string[]) => ({ 'background-size': `auto ${h}%` }), { autocomplete: ['bg-h-<num>'] }],

  /**
   * Background Width and Height
   * @example bg-wh-12-22 bgwh-12-343
   */
  [
    /^(?:bgwh|bg-wh)-(.+)-(.+)$/,
    ([, w, h]: string[]) => ({ 'background-size': `${w}% ${h}%` }),
    { autocomplete: ['bg-wh-<num>-<num>'] },
  ],

  /**
   * Text Gradient
   * @example textgr-blueCapriPurpleElect text-gr-blueCapriPurpleElect tgr-blueCapriPurpleElect
   */
  [/^(?:textgr|text-gr|tgr)-(.+)$/, gradientTextResolver],
  [/^(?:textgr|text-gr|tgr)-(.+)-(\d+)$/, gradientTextResolver],

  [
    /^(?:agr-b|agr-border|bgr-b|bgr-border)$/,
    commonGradientBorderStyles,
    { autocomplete: ['agr-b', 'agr-border', 'bgr-b', 'bgr-border'] },
  ],
  [/^(?:bbggr|bbg-gr|bbg-gradient)$/, commonGradientStyles, { autocomplete: ['bbggr', 'bbg-gr', 'bbg-gradient'] }],
  [/^(?:abggr|abg-gr|abg-gradient)$/, commonGradientStyles, { autocomplete: ['abggr', 'abg-gr', 'abg-gradient'] }],
]

// import type { RuleContext } from '@unocss/core'
// import type { Theme } from '@unocss/preset-mini'
// import { colorToString, parseColor } from '@unocss/preset-mini/utils'

// const bgBorderColorResolver = ([, body]: string[], { theme }: RuleContext<Theme>) => {
//   const data = parseColor(body, theme)
//   if (!data) return

//   const { color, cssColor } = data

//   if (color)
//     return {
//       '--border-color': color,
//     }

//   if (cssColor)
//     return {
//       '--un-border-opacity': cssColor.alpha ?? 1,
//       '--border-color': colorToString(cssColor, `var(--un-border-opacity)`),
//     }
// }

// const gradientAnResolver = ([, name, deg = '90']: string[]) => {
//   deg = deg + 'deg'

//   return {
//     '--deg': deg,
//     '--border-color': 'white',
//     background: `linear-gradient(var(--deg), var(--border-color) 0%, var(--border-color) 50%, var(--an-${name}))`,
//   }
// }

// export const gradientRules = [
// e.g. bg-an-gradient-pink, bg-an-gr-pink
// e.g. bg-an-gradient-pink-90, bg-an-gr-pink-90
// an == animated gradient
// [/^(?:bg-an-gradient|bg-an-gr)-(.+)/, gradientAnResolver],
// [/^(?:bg-an-gradient|bg-an-gr)-(.+)-(\d+)/, gradientAnResolver],
// [/^(?:bg-an-gradient|bg-an-gr)-(.+)-(?:color)-(\d+)/, gradientAnResolver],

// [/^(?:gr-b|grb)-(.+)$/, bgBorderColorResolver, { autocomplete: ['(gr-b|grb)-$colors'] }],

// ]
