import axios from 'axios'
const querystring = require('querystring');

export const SaveInstructorTitle = (text) => {
    // console.log("action SaveInstructorTitle received the value", text)

    // save the data to db by thunk 
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/SaveInstructorTitle"
        var PostData = querystring.stringify({
            "Title": text
        })
        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                // console.log(response)
                if (response.status == 201) {
                    // console.log("Successfully Updated Data To DB")
                    dispatch({
                        type: 'INSTRUCTION_TITLE_SAVED',
                        payload: text
                    })
                }
            })


    }

}

export const SaveInstructorTitleCopy = (text) => {
    // console.log("action SaveInstructorTitle received the value", text)

    // save the data to db by thunk 
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/SaveInstructorTitleCopy"
        var PostData = querystring.stringify({
            "Title": text
        })
        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                // console.log(response)
                if (response.status == 201) {
                    // console.log("Successfully Updated Data To DB")
                    dispatch({
                        type: 'INSTRUCTION_TITLE_SAVED',
                        payload: text
                    })
                }
            })


    }

}



export const HandleTextInputForIRT = (text) => {
    // console.log("Action to hande HandleTextInputForIRT")
    // console.log(text)
    return {
        type: 'IRT_TEXT',
        payload: text
    }
}


export const HandleTextInputForIRTC = (text) => {
    // console.log("Action to hande HandleTextInputForIRTC")
    // console.log(text)
    return {
        type: 'IRTC_TEXT',
        payload: text
    }
}


export const GetIRTTitleFromDB = () => {
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/GetTitle/IRT"
        var PostData = querystring.stringify({
            "target": "Title"
        })

        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                // console.log(response.data[0].Title)
                dispatch({
                    type: 'IRT_TEXT',
                    payload: response.data[0].Title
                })
            })

    }
}

export const GetIRTCTitleFromDB = () => {
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/GetTitle/IRTC"
        var PostData = querystring.stringify({
            "target": "Title"
        })

        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                // console.log("from irtc action ", response.data[0].Title)
                dispatch({
                    type: 'IRTC_TEXT',
                    payload: response.data[0].Title
                })
            })

    }
}






/*************** Site settings actions */

export const HandleTextInputForFilterLabel = (text) => {
    // console.log("Action to hande HandleTextInputForFilterLabel")
    // console.log(text)
    return {
        type: 'FilterLabel_TEXT',
        payload: text
    }
}


export const HandleTextInputForTagLabel = (text) => {
    // console.log("Action to hande HandleTextInputForFilterLabel")
    // console.log(text)
    return {
        type: 'TagLabel_TEXT',
        payload: text
    }
}

export const GetFilterLabelFromDB = () => {
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/getData"
        var PostData = querystring.stringify(
            {
                "collection": "FilterLabel",
                "field": "filter_label"
            }
        );

        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                console.log("from GetFilterLabelFromDB action ", response.data[0].value)
                dispatch({
                    type: 'FilterLabel_TEXT',
                    payload: response.data[0].value
                })
            })

    }
}


export const SaveFilterLabelToDB = (text) => {
    // console.log("action SaveInstructorTitle received the value", text)

    // save the data to db by thunk 
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/setData"
        var PostData = querystring.stringify(
            {
                "collection": "FilterLabel",
                "target": "filter_label",
                "value": text
            }
        )
        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                // console.log(response)
                if (response.status == 201) {
                    // console.log("Successfully Updated Data To DB")
                    dispatch({
                        type: 'Filter_Label_Saved',
                        payload: text
                    })
                }
            })


    }

}



export const GetTagLabelFromDB = () => {
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/getData"
        var PostData = querystring.stringify(
            {
                "collection": "TagLabel",
                "field": "tag_label"
            }
        );

        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                // console.log("from GetFilterLabelFromDB action ", response.data[0].value)
                dispatch({
                    type: 'TagLabel_TEXT',
                    payload: response.data[0].value
                })
            })

    }
}


export const SaveTagLabelToDB = (text) => {
    // console.log("action SaveInstructorTitle received the value", text)

    // save the data to db by thunk 
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/setData"
        var PostData = querystring.stringify(
            {
                "collection": "TagLabel",
                "target": "tag_label",
                "value": text
            }
        )
        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                // console.log(response)
                if (response.status == 201) {
                    // console.log("Successfully Updated Data To DB")
                    dispatch({
                        type: 'Tag_Label_Saved',
                        payload: text
                    })
                }
            })


    }

}



export const GetMaxCardsFromDB = () => {
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/getData"
        var PostData = querystring.stringify(
            {
                "collection": "MaxCards",
                "field": "max_cards"
            }
        );

        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                console.log("from GetMaxCardsFromDB action ", response.data[0])
                dispatch({
                    type: 'MAX_CARDS_NUMBER',
                    payload: response.data[0].value
                })
            })

    }
}

export const HandleTextInputForMaxCards = (text) => {
    // console.log("Action to hande HandleTextInputForFilterLabel")
    // console.log(text)

    return {
        type: 'MAX_CARDS_NUMBER',
        payload: text
    }
}

export const SaveMaxCardsToDB = (number) => {
    console.log("From SaveMaxCardsToDB" , number)
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/setData"
        var PostData = querystring.stringify(
            {
                "collection": "MaxCards",
                "target": "max_cards",
                "value": number
            }
        );

        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                // console.log("from GetFilterLabelFromDB action ", response.data[0].value)
                dispatch({
                    type: 'MAX_CARDS_NUMBER_Updated'
                    
                })
            })

    }
}