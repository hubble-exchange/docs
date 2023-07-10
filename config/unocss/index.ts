import type { UnocssNuxtOptions } from '@unocss/nuxt'
import transformerDirective from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

import colors from './colors'
import { gradientRules } from './gradients'
import { otherRules } from './rules'

export const unocss: UnocssNuxtOptions = {
  components: false,
  preflight: true,

  // presets
  uno: true, // enabled `@unocss/preset-uno`
  attributify: false, // enabled `@unocss/preset-attributify`,
  icons: false, // enabled `@unocss/preset-icons`

  transformers: [transformerVariantGroup(), transformerDirective()],

  // core options
  shortcuts: [
    {
      'a-hide': '!after:opacity-0 !before:opacity-100',
      'b-hide': '!after:opacity-100 !before:opacity-0',

      // show after on hover
      'a-h-in': 'after:opacity-0 hover:after:opacity-100',
      // show before on hover
      'b-h-in': 'before:opacity-0 hover:before:opacity-100',
      // show after on focus
      'a-f-in': 'after:opacity-0 focus-within:after:opacity-100',
      // show before on focus
      'b-f-in': 'before:opacity-0 focus-within:before:opacity-100',
      // show after on hover and focus
      'a-hf-in': 'after:opacity-0 hover:after:opacity-100 focus-within:after:opacity-100',
      // show before on hover and focus
      'b-hf-in': 'before:opacity-0 hover:before:opacity-100 focus-within:before:opacity-100',
      // hide after on hover
      'a-h-out': 'hover:after:opacity-0',
      // hide before on hover
      'b-h-out': 'hover:before:opacity-0',
      // hide after on focus
      'a-f-out': 'focus-within:after:opacity-0',
      // hide before on focus
      'b-f-out': 'focus-within:before:opacity-0',
      // hide after on hover and focus
      'a-hf-out': 'hover:after:opacity-100 focus-within:after:opacity-100',
      // hide before on hover and focus
      'b-hf-out': 'hover:before:opacity-100 focus-within:before:opacity-100',

      // before to after hover
      'ba-h-toggle': 'after:opacity-0 before:opacity-100 hover:after:opacity-100 hover:before:opacity-0',
      // after to before hover
      'ab-h-toggle': 'before:opacity-0 after:opacity-100 hover:before:opacity-100 hover:after:opacity-0',
      // before to after focus
      'ba-f-toggle': 'after:opacity-0 before:opacity-100 focus-within:after:opacity-100 focus-within:before:opacity-0',
      // after to before focus
      'ab-f-toggle': 'before:opacity-0 after:opacity-100 focus-within:before:opacity-100 focus-within:after:opacity-0',
      // before to after hover and focus
      'ba-hf-toggle':
        'after:opacity-0 before:opacity-100 hover:after:opacity-100 hover:before:opacity-0 focus-within:after:opacity-100 focus-within:before:opacity-0',
      // after to before hover and focus
      'ab-hf-toggle':
        'before:opacity-0 after:opacity-100 hover:before:opacity-100 hover:after:opacity-0 focus-within:before:opacity-100 focus-within:after:opacity-0',

      'border-common': 'dark:border-gray-raisin border-gray-cultured',
      'common-transition': 'transition-all duration-300',
      'common-shadow': 'dark:cs-dark cs-light',

      'text-xxs': 'text-2.75', // text-11 in v1
    },
    /**
     * @syntax bgr-border-[gradient]-[deg]-[border in px]
     * @default deg=0 px=1
     */

    /**
     * @example bgr-border-blueCapriPurpleElect-90 bgr-border-blueCapriPurpleElectBCrayola-90-2 bgr-border-cpy
     */
    [
      /^agr-border-(\w+)-(\d+)-(\d+)$/,
      ([, gr, deg, b]: string[]) => `agr-border after:border-gr-${gr}-${deg} after:p-[${b}px] p-[${b}px]`,
    ],
    [
      /^agr-border-(\w+)-(\d+)$/,
      ([, gr, deg]: string[]) => `agr-border after:border-gr-${gr}-${deg} after:p-[1px] p-[1px]`,
    ],
    [/^agr-border-(\w+)$/, ([, gr]: string[]) => `agr-border after:border-gr-${gr} after:p-[1px] p-[1px]`],
    /**
     * @example agr-border-blueCapriPurpleElect-90 agr-border-blueCapriPurpleElectBCrayola-90-2 agr-border-cpy
     */
    [
      /^bgr-border-(\w+)-(\d+)-(\d+)$/,
      ([, gr, deg, b]: string[]) => `bgr-border before:border-gr-${gr}-${deg} before:p-[${b}px] p-[${b}px]`,
    ],
    [
      /^bgr-border-(\w+)-(\d+)$/,
      ([, gr, deg]: string[]) => `bgr-border before:border-gr-${gr}-${deg} before:p-[1px] p-[1px]`,
    ],
    [/^bgr-border-(\w+)$/, ([, gr]: string[]) => `bgr-border before:border-gr-${gr} before:p-[1px] p-[1px]`],

    /**
     * @example b-border-gray-raisin b-border-red-2
     */
    [/^b-border-(\w+-\w+)-(\d+)$/, ([, c, b]: string[]) => `bgr-border before:bg-${c} before:p-[${b}px] p-[${b}px]`],
    [/^b-border-(\w+-\w+|\w+)$/, ([, c]: string[]) => `bgr-border before:bg-${c} before:p-[1px] p-[1px]`],
    /**
     * @example a-border-gray-raisin a-border-red-2
     */
    [/^a-border-(\w+-\w+|\w+)-(\d+)$/, ([, c, b]: string[]) => `agr-border after:bg-${c} after:p-[${b}px] p-[${b}px]`],
    [/^a-border-(\w+-\w+|\w+)$/, ([, c]: string[]) => `agr-border after:bg-${c} after:p-[1px] p-[1px]`],
    /**
     * @example abg-gr-cpy abg-gr-blueCapriPurpleElectBCrayola-90
     */
    [/^abg-gr-(\w+)-(\d+)$/, ([, gr, deg]: string[]) => `abggr after:bg-gr-${gr}-${deg}`],
    [/^abg-gr-(\w+)$/, ([, gr]: string[]) => `abggr after:bg-gr-${gr}`],
    /**
     * @example bbg-gr-cpy bbg-gr-blueCapriPurpleElectBCrayola-90
     */
    [/^bbg-gr-(\w+)-(\d+)$/, ([, gr, deg]: string[]) => `bbggr before:bg-gr-${gr}-${deg}`],
    [/^bbg-gr-(\w+)$/, ([, gr]: string[]) => `bbggr before:bg-gr-${gr}`],
    /**
     * @example abg-purple-electric
     */
    [/^abg-(\w+-\w+|\w+)$/, ([, bg]: string[]) => `abggr after:bg-${bg}`],
    /**
     * @example bbg-blue-stale
     */
    [/^bbg-(\w+-\w+|\w+)$/, ([, bg]: string[]) => `bbggr before:bg-${bg}`],
    /**
     * @example hf-blue-stale
     */
    [/^hf-(.*)$/, ([, cls]: string[]) => `focus-within:${cls} hover:${cls}`],
    /**
     * @example common-transition-300
     */
    [/^common-transition-(\d+)$/, ([, duration]: string[]) => `transition-all duration-${duration}`],
  ],

  rules: [...gradientRules, ...otherRules],

  theme: {
    colors,
  },
}
