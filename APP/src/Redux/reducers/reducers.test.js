//testing reducers

import IRTTextReducer from './IRTTextReducer'
import IRTCTextReducer from './IRTCTextReducer'



/************* Site Settings Reducers */
import FilterLabelReducer from './SiteSettings/FilterLabelReducer'
import TagLabelReducer from './SiteSettings/TagLabelReducer'
import MaxCardsReducer from './SiteSettings/MaxCardsReducer'


// Testng initial values for all reducers

it('should return the initial state', () => {
    expect(
      IRTTextReducer(undefined, {})
    ).toEqual("")
  })


  it('should return the initial state for IRTCTextReducer', () => {
    expect(
      IRTCTextReducer(undefined, {})
    ).toEqual("")
  })


  it('should return the initial state for FilterLabelReducer', () => {
    expect(
      FilterLabelReducer(undefined, {})
    ).toEqual("")
  })

  it('should return the initial state for TagLabelReducer', () => {
    expect(
      TagLabelReducer(undefined, {})
    ).toEqual("")
  })


  it('should return the initial state for MaxCardsReducer', () => {
    expect(
      MaxCardsReducer(undefined, {})
    ).toEqual(0)
  })


