import {
    HandleTextInputForIRT,
    HandleTextInputForIRTC,
    GetIRTCTitleFromDB,
    HandleTextInputForFilterLabel,
    HandleTextInputForTagLabel,
    SaveInstructorTitle,
    HandleTextInputForMaxCards,
    GetMaxCardsFromDB,
    HandleTextInputForSiteIdentifier

} from './index'

const querystring = require('querystring');
import axios from 'axios'
import { createStore  , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'



const store = createStore(
  applyMiddleware(thunk)
);



it('HandleTextInputForIRT should create IRT_TEXT action', () => {
    expect(HandleTextInputForIRT('Test Value 2')).toEqual({
        type: 'IRT_TEXT',
        payload: 'Test Value 2'
    })
})

it('HandleTextInputForIRTC should create IRTC_TEXT action', () => {
    expect(HandleTextInputForIRTC('Test Value')).toEqual({
        type: 'IRTC_TEXT',
        payload: 'Test Value'
    })
})

it('HandleTextInputForFilterLabel should create FilterLabel_TEXT action', () => {
    expect(HandleTextInputForFilterLabel('Test Value')).toEqual({
        type: 'FilterLabel_TEXT',
        payload: 'Test Value'
    })
})

it('HandleTextInputForTagLabel should create TagLabel_TEXT action', () => {
    expect(HandleTextInputForTagLabel('Test Value')).toEqual({
        type: 'TagLabel_TEXT',
        payload: 'Test Value'
    })
})

it('HandleTextInputForMaxCards should create TagLabel_TEXT action', () => {
    expect(HandleTextInputForMaxCards(10)).toEqual({
        type: 'MAX_CARDS_NUMBER',
        payload: 10
    })
})

it('HandleTextInputForSiteIdentifier should create SID_TEXT action', () => {
    expect(HandleTextInputForSiteIdentifier("Test")).toEqual({
        type: 'SID_TEXT',
        payload: "Test"
    })
})











