import { FETCH_DATA, methodTypes } from "../middlewares/api";
import { schema, getHero } from './entities/heroes';
import url from '../../utils/url';
import { combineReducers } from "redux";

// action types
export const types = {
  FETCH_HERO_REQUEST: 'HERO/FETCH_HERO_REQUEST',
  FETCH_HERO_SUCCESS: 'HERO/FETCH_HERO_SUCCESS',
  FETCH_HERO_FAILURE: 'HERO/FETCH_HERO_FAILURE',
};

// 同步action creator
const fetchHeroInfo = endpoint => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_HERO_REQUEST,
      types.FETCH_HERO_SUCCESS,
      types.FETCH_HERO_FAILURE
    ],
    endpoint,
    schema,
    method: methodTypes.GET
  }
});

const fetchHeroSuccess = id => ({
  type: types.FETCH_HERO_SUCCESS,
  id
});

// 异步actions
export const actions = {
  loadHeroInfo: id => (dispatch, getState) => {
    const endpoint = url.getHeroInfo(id);
    const info = getHero(getState(), id);
    if (info) {
      return dispatch(fetchHeroSuccess(id));
    }
    return dispatch(fetchHeroInfo(endpoint));
  }
};

// 初始状态
const initialState = {
  info: {
    isFetching: false,
    id: null
  }
};

// reducer
const info = (state = initialState.info, action) => {
  switch (action.type) {
    case types.FETCH_HERO_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_HERO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        id: action.id
      };
    case types.FETCH_HERO_FAILURE:
      return {
        ...state,
        isFetching: false,
        id: null
      };
    default:
      return state;
  }
}

export default combineReducers({
  info
});
