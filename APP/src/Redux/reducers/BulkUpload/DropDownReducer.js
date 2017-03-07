const intitialState = false

export default (state = intitialState,action) => {

    switch(action.type){
       case 'FLIP_DROP_DOWN':
       return action.payload

       default:
       return state
    }


}
