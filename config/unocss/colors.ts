export default {
  dark: '#141416',
  black: '#202020',
  originalBlack: '#000',
  white: '#fdfdfd',
  gray: {
    romanSilver: '#777E90', // gray-t
    stale: '#6E798F', // gray-h
    onyx: '#353945', // gray-b
    raisin: '#23262F', // gray-bg
    coral: '#535864', // gray-muted
    eerie: '#1B1D22', // gray-darker
    eerieLight: '#1E1F22',
    blackEerieLight: '#17181b', // dark-light
    blackEerie: '#19191C', // gray-darker
    battleship: '#888686', // grayer
    silver: '#C4C4C4', // silver
    raisinBlack: '#2A2A2D', // raisin-black
    raisinDark: '#1E1F23',
    raisinLight: '#212227', // To-do: rename
    blueCrayola: '#B8BECA', // gray-crayola
    blueElectric: '#636D80', // black-coral
    gunmetal: '#21272F', // bluish-dull
    spanish: '#939393', // spanish-gray
    cultured: '#f3f2f2',
    culturedLight: '#F5F6F8',
    toner: '#EEEDED',
    lightBlack: '#26272B',
  },
  label: { error: '#DD2727', success: '#00865A', warning: '#F07300', info: '#0D55CF' },
  green: {
    viridian: '#259da8', // cyan
    pastel: '#00C24E', // emerald
    inchworm: '#B7FF6A', // lime
    lime: '#00C600', // long-text
    light: '#8DFAAC', // greenish-text
    charleston: '#212D2F', // cyan-dull
    spring: '#00FF80', // spring-green
    mediumSpring: '#3EFFA6', // medium-spring-green
    pineTree: '#212F21', // long-dull
    dull: '#212F25', // green-dull
    darkJungle: '#212F28', // dark-jungle-green
    seaCrayola: '#10FCC3', // green-crayola used for greenSeaCrayolaC in gradient
    SeaCrayolaC: '#00ffd1', // greenSeaCrayolaC from gradient
    G: '#05ff00', // greenG from gradient
    corvids: '#25212F', // purple-dull
    lincoln: '#015724', // green-profit
    english: '#038200',
    harlequin: '#51ff00', // green-t
  },
  red: {
    maximum: '#DF2424', // red-b
    red: '#f00', // red-t used for red in gradient
    short: '#F80101', // short-text
    blackCoffee: '#2F2121', // short-dull
    bittersweet: '#FF6969',
    blood: '#661004', // loss
    imperial: '#e74141', // avax
  },
  yellow: {
    maizeCrayola: '#FCC958', // yellow used for yellowMaizeCrayola in gradient
    titanium: '#DCE001', // yellow-lime
    xanthic: '#E5E504', // titanium-yellow
    bCrayola: '#FFAA12', // yellowBCrayola Bright Yellow Crayola from gradient
    lemonGlacier: '#faff00', // yellowLemonGlacierOlive from gradient
    greenCrayola: '#ADDC7B', // yellowGreenCrayola from gradient.
    selective: '#feb701',
    limeBitter: '#D1EF00',
  },
  blue: {
    ultramarine: '#2661ff', // blue-t
    jeans: '#00A3FF', // blue-b
    jeansLight: '#31B5FF', // blue-b
    stale: '#7B61FF', // bluish used for blueStale in gradient
    skyCrayola: '#44DCFD', // cyan-text
    littleBoy: '#63A6FF', // bluish-text
    wildYonder: '#8EA1D9', // blue-purple
    crayola: '#627EEA', // blueCrayola from gradient
    capri: '#32c5ff', // blueCapri from gradient
    carolina: '#20A1F2',
  },
  orange: {
    amber: '#ff7d06', // orange-t
    safety: '#f07300', // orange-b
    web: '#FFA400', // orangish
    coral: '#FF8663', // orange used for orangeCoral in gradient
    yellow: '#FF9820',
    orange: '#ff8412', // used for orange in gradient
  },
  purple: {
    elect: '#B620E0', // purpleElect from gradient
    electric: '#c0f', // pink
    lavender: '#D9CAFF', // purple-text
    dark: '#2F212C', // pink-dull
  },
  // pink-text, vivid-violet
  violet: { pink: '#FF7BE2', vivid: '#AD00FF' },
  // tomato, rose
  pink: { paradise: '#FF1167', rose: '#ff1183' },
  fuchsia: { fashion: '#F20F96' },

  // Not an actual Color but alias for gradient names for autocomplete with $color in unocss custom rules
  ...{ cpy: '#fff', cp: '#fff', py: '#fff', pmybgp: '#fff', blu: '#fff' },
}
