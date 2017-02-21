import axios from 'axios'
const querystring = require('querystring');

export const SaveInstructorTitle = (text) => {
    console.log("action SaveInstructorTitle received the value", text)

    // save the data to db by thunk 
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/SaveInstructorTitle"
        var PostData = querystring.stringify({
            "Title": text
        })
        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                console.log(response)
                if (response.status == 201) {
                    console.log("Successfully Updated Data To DB")
                    dispatch({
                        type: 'INSTRUCTION_TITLE_SAVED',
                        payload: text
                    })
                }
            })


    }

}

export const SaveInstructorTitleCopy = (text) => {
    console.log("action SaveInstructorTitle received the value", text)

    // save the data to db by thunk 
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/SaveInstructorTitleCopy"
        var PostData = querystring.stringify({
            "Title": text
        })
        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                console.log(response)
                if (response.status == 201) {
                    console.log("Successfully Updated Data To DB")
                    dispatch({
                        type: 'INSTRUCTION_TITLE_SAVED',
                        payload: text
                    })
                }
            })


    }

}



export const HandleTextInputForIRT = (text) => {
    console.log("Action to hande HandleTextInputForIRT")
    console.log(text)
    return {
        type: 'IRT_TEXT',
        payload: text
    }
}


export const HandleTextInputForIRTC = (text) => {
    console.log("Action to hande HandleTextInputForIRTC")
    console.log(text)
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
                console.log(response.data[0].Title)
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
                console.log("from irtc action " , response.data[0].Title)
                dispatch({
                    type: 'IRTC_TEXT',
                    payload: response.data[0].Title
                })
            })

    }
}

