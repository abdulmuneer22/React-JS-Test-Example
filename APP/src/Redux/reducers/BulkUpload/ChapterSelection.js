const intitialState = []
export default (state = intitialState,action) => {

    switch(action.type){
       case 'SELECTED_CHAPTER':
       //console.log(state)
       if(action.payload.Selected){
           state.push(action.payload.Chapter)
           //console.log("Selected Chapters")
           state.forEach((item)=>{
               //console.log(item)
           })
           return state
           
       }else{
        //    console.log("pop from selected list" , action.payload.Chapter )
           const index = state.indexOf(action.payload.Chapter)
           delete state[index]
           //console.log(state)
        //    console.log("Selected Chapters")
           state.forEach((item)=>{
            //    console.log(item)
           })

           return state

       }

       default:
       return state
    }


}
