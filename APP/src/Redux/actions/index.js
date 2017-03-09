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
    console.log("From SaveMaxCardsToDB", number)
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



/**********Site Identifier */
export const HandleTextInputForSiteIdentifier = (text) => {
    //console.log("Action to hande HandleTextInputForSiteIdentifier", text)
    //do validation for text string

    return {
        type: 'SID_TEXT',
        payload: text
    }
    



}


export const GetSiteIdentifier = () => {
    return dispatch => {
        var CMS_END = "http://localhost:8080/cms/getData"
        var PostData = querystring.stringify(
            {
                "collection": "SiteIdentifier",
                "field": "site_identifier"
            }
        );

        var Query = axios.post(CMS_END, PostData)
            .then((response) => {
                console.log("from GetSiteIdentifier action ", response.data[0])
                dispatch({
                    type: 'SID_TEXT',
                    payload: response.data[0].value
                })
            })

    }
}


export const SaveSiteIdentifierToDB = (id) => {
    //alert(id)
    return dispatch => {
        if (!id) {
            //alert("Site Identifier Cannot be empty !")
            dispatch({
                type: 'SITE_IDENTIFIER_EMPTY',
                payload: 0

            })
        } else {

            //alert(typeof id)
            // alert(id.length)
            if (id.length != 5) {
                //alert("Site Identifier Needs to be in XXXXX format")
                dispatch({
                    type: 'SITE_IDENTIFIER_SIZE',
                    payload: 0

                })
            } else {
                var CMS_END = "http://localhost:8080/cms/setData/SiteIdentifier"
                var PostData = querystring.stringify(
                    {
	                "newValue" : id
                    }
                );

                var Query = axios.post(CMS_END, PostData)
                    .then((response) => {
                            // console.log("from SaveSiteIdentifierToDB action ", response.data.status_code)
                        
                        if(response.data.status_code === "Duplicate"){
                            console.log("duplicate")
                            alert("Site Identifier Cannot be Duplicate")
                            dispatch({
                            type: 'SITE_IDENTIFIER_DUPLICATE'
                        })
                        }else{
                            dispatch({
                            type: 'SITE_IDENTIFIER_SAVED'
                        })
                        }
                        
                    })
                    .catch((err)=>{
                        console.log(err)

                    })
            }




        }




    }
}

/*********Chapters */

export const GetAllChapters = () => {
    return dispatch => {
        const END_POINT = "http://localhost:8080/allChapters"
        axios.get(END_POINT)
        .then((response)=>{
            //console.log(response.data)
            dispatch({
                type : 'FETCHED_CHAPTERS',
                payload : response.data
            })
        })
        .catch((err)=>{
            if(err){
                dispatch ({
                    type : 'FAILED_FETCH_CHAPTERS'
                })
            }
        })
    }
}



export const FlipDropDown = (state) => {
    //console.log("Flipped Dropdown" , state)
    return {
        type : 'FLIP_DROP_DOWN',
        payload : state
    }
}


export const SelectChapter = (id,state) => {
    // console.log(id)
    // console.log(state)
    return {
        type : 'SELECTED_CHAPTER',
        payload : {
            Chapter : id,
            Selected : state
        }
    }
}


export const SelectSubChapter = (id,state) => {
    //console.log(id)
    //console.log(state)

    return {
        type : 'SELECTED_SUB_CHAPTER',
        payload : {
            Chapter : id,
            Selected : state

        }
    }
}