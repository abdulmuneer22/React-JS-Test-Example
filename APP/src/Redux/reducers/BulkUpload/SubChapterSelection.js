const intitialState = ""

export default (state = intitialState,action) => {

    switch(action.type){
       case 'SELECTED_SUB_CHAPTER':
       //console.log(action.payload)
       return action.payload

       default:
       return state
    }


}
