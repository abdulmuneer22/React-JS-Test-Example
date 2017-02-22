import { combineReducers } from 'redux';


import IRTTitleText from './IRTTextReducer'
import IRTCTitleText from './IRTCTextReducer'


/************* Site Settings Reducers */
import FilterLabelReducer from './SiteSettings/FilterLabelReducer'
import TagLabelReducer from './SiteSettings/TagLabelReducer'
import MaxCardsReducer from './SiteSettings/MaxCardsReducer'


export default combineReducers({

   IRTText : IRTTitleText,
   IRTCText : IRTCTitleText,
   FLText : FilterLabelReducer,
   TagLabelText : TagLabelReducer,
   MaxCardsNumber : MaxCardsReducer
});