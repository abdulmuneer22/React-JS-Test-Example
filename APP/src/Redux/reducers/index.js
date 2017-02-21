import { combineReducers } from 'redux';


import IRTTitleText from './IRTTextReducer'
import IRTCTitleText from './IRTCTextReducer'


export default combineReducers({

   IRTText : IRTTitleText,
   IRTCText : IRTCTitleText
});