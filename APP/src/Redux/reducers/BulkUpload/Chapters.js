const intitialState = ""

export default (state = intitialState,action) => {

    switch(action.type){
       case 'FETCHED_CHAPTERS':
       return action.payload

       default:
       return state
    }


}
