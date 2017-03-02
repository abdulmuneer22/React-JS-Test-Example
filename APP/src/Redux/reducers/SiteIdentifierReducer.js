const intitialState = ""
export default (state = intitialState,action) => {

    switch(action.type){
       case 'SID_TEXT':
       //alert(action.payload)
       const Size = action.payload.length
       return {
           value : action.payload,
           size : Size
        }

       default:
       return state
    }


}
