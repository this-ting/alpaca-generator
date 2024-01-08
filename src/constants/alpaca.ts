export const PNG_FILE = '.png'

export const DEFAULT_CHARACTERISTICS = { default: 'Default' }
export const TILT_CHARACTERISTICS = {
  ...DEFAULT_CHARACTERISTICS,
  'tilt-backward': 'Tilt Backward',
  'tilt-forward': 'Tilt Forward',
}

export const ALPACA_CHARACTERISTICS_MAP = {
  accessories: {
    earings: 'Earings',
    flower: 'Flower',
    glasses: 'Glasses',
    headphoens: 'Headphones',
  },
  backgrounds: {
    blue50: 'blue50',
    blue60: 'blue60',
    blue70: 'blue70',
    darkblue30: 'darkblue30',
    darkblue50: 'darkblue50',
    darkblue70: 'darkblue70',
    green50: 'green50',
    green60: 'green60',
    green70: 'green70',
    grey40: 'grey40',
    grey70: 'grey70',
    grey80: 'grey80',
    red50: 'red50',
    red60: 'red60',
    red70: 'red70',
    yellow50: 'yellow50',
    yellow60: 'yellow60',
    yellow70: 'yellow70',
  },
  ears: {
    ...TILT_CHARACTERISTICS,
  },
  eyes: {
    angry: 'Angry',
    default: 'Default',
    naughty: 'Naughty',
    panda: 'Panda',
    smart: 'Smart',
    star: 'Star',
  },
  hair: {
    ...DEFAULT_CHARACTERISTICS,
    bang: 'Bang',
    curls: 'Curls',
    elegant: 'Elegant',
    fancy: 'Fancy',
    quiff: 'Quiff',
    short: 'Short',
  },
  leg: {
    ...TILT_CHARACTERISTICS,
    'bubble-tea': 'Bubble Tea',
    cookie: 'Cookie',
    'game-console': 'Game Console',
  },
  mouth: {
    ...DEFAULT_CHARACTERISTICS,
    astonished: 'Astonished',
    eating: 'Eating',
    laugh: 'Laugh',
    tongue: 'Tongue',
  },
  neck: {
    ...DEFAULT_CHARACTERISTICS,
    'bend-backward': 'Bend Backward',
    'bend-forward': 'Bend Forward',
    thick: 'Thick',
  },
}

export const ALPACA_CHARACTERISTICS = Object.keys(ALPACA_CHARACTERISTICS_MAP)

export const DEFAULT_ALPACA_CHARACTERISTICS = Object.entries(
  ALPACA_CHARACTERISTICS_MAP
).map(([part, characteristic]) =>
  console.log([part, Object.keys(characteristic)[0]])
)
