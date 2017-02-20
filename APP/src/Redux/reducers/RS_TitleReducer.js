const intitialState = null

export default (state = intitialState,action) => {
    // console.log("called the reducer")
   switch(action.type){
       case 'INSTRUCTION_TITLE_SAVED':
       return action.payload


    //    case 'GOT_TITLE_FROM_DB':
    //    console.log("Payload from reducer GOT_TITLE_FROM_DB" , action.payload)
    //    return action.payload

       default:
       return state

   }
   
}