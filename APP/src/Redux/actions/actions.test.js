import {
    HandleTextInputForIRT,
    HandleTextInputForIRTC,
    GetIRTCTitleFromDB,
    HandleTextInputForFilterLabel,
    HandleTextInputForTagLabel,
    SaveInstructorTitle,
    HandleTextInputForMaxCards

} from './index'

const querystring = require('querystring');



import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)




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











