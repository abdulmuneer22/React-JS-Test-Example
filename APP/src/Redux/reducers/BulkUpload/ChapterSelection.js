const intitialState = ""

export default (state = intitialState,action) => {

    switch(action.type){
       case 'SELECTED_CHAPTER':
       return action.payload

       default:
       return state
    }


}
