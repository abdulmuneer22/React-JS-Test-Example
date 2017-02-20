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
    console.log("action SaveInstructorTitleCopy received the value", text)
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




/*********Get Data From DB */
// export const GetTitle = (_target) => {
//     console.log("action GetTitle to get existing title  value with target" ,_target)

//     return dispatch => {
//         var CMS_END = "http://localhost:8080/cms/GetTitle"
//         var PostData = querystring.stringify({
//             "target": _target
//         })

//         var Query = axios.post(CMS_END, PostData)
//         .then((response)=>{
//             console.log(response.data[0].Title)
//             dispatch({
//                 type : "GOT_TITLE_FROM_DB",
//                 payload : response.data[0].Title
//             })
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
        

//     }


// }



