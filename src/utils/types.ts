export type NAV_ITEM_NAMES = 'home' | 'user'
export type INPUT_STATES = 'filled' | 'error' | 'success' | undefined
export type BUTTON_THEME_COLORS = 'blue' | 'green' | 'red' | undefined
export type LANGUAGES = 'spanish' | 'english'

export interface IWord {
  score: number
  spanish: string
  english: string
}
