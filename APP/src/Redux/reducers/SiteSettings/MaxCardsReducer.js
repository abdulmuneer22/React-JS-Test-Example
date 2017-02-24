const intitialState = 0
export default (state = intitialState,action) => {

    switch(action.type){
       case 'MAX_CARDS_NUMBER':
    //    alert(action.payload)
       return action.payload

       default:
       return state
    }


}
