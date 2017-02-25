import {
    HandleTextInputForIRT,
    HandleTextInputForIRTC,
    GetIRTCTitleFromDB,
    HandleTextInputForFilterLabel,
    HandleTextInputForTagLabel,
    SaveInstructorTitle,
    HandleTextInputForMaxCards,

    GetMaxCardsFromDB

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


// it('GetMaxCardsFromDB should return maxcard number from network', () => {
//     expect(GetMaxCardsFromDB()).toEqual({
//         type: 'MAX_CARDS_NUMBER',
//         payload: 10
//     })
// })

function fetchData() {
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/GetTitle/IRTC"
        var PostData = querystring.stringify(
            {
                "target": "Title"
            }
        );
        axios.post(CMS_END,PostData)
        .then((response)=>{
            console.log("from GetMaxCardsFromDB action ", response.data[0])
                dispatch({
                    type: 'MAX_CARDS_NUMBER',
                    payload: response.data[0].value
                })
        })
    }
}


// it('should execute fetch data', () => {
//     console.log(store.getState())
// })





