import { SET_SCROLL_HEIGHT, SET_SCROLL_WIDTH } from './mutation_types'
export default {
  [SET_SCROLL_HEIGHT] (state, height) {
    state.scrollHeight = height
  },
  [SET_SCROLL_WIDTH] (state, width) {
    state.scrollWidth = width
  }
}
