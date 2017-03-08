import { combineReducers } from 'redux';


import IRTTitleText from './IRTTextReducer'
import IRTCTitleText from './IRTCTextReducer'


/************* Site Settings Reducers */
import FilterLabelReducer from './SiteSettings/FilterLabelReducer'
import TagLabelReducer from './SiteSettings/TagLabelReducer'
import MaxCardsReducer from './SiteSettings/MaxCardsReducer'


/*********Site Identifier Reducers */
import SiteIdentifier from './SiteIdentifierReducer'
import SiteIdentifierErrors from './SiteIdentifierErrors'



/********** Bulk Upload Refinements */
import DropDownReducer from './BulkUpload/DropDownReducer'
import ChapterSelection from './BulkUpload/ChapterSelection'
import SubChapterSelection from './BulkUpload/SubChapterSelection'


export default combineReducers({

   IRTText : IRTTitleText,
   IRTCText : IRTCTitleText,
   FLText : FilterLabelReducer,
   TagLabelText : TagLabelReducer,
   MaxCardsNumber : MaxCardsReducer,
   SiteIdentifier : SiteIdentifier,
   SiteIdentifierErrors : SiteIdentifierErrors,
   DropDown : DropDownReducer,
   ChapterSelection : ChapterSelection,
   SubChapterSelection : SubChapterSelection
});