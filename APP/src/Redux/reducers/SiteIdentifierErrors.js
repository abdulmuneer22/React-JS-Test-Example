const intitialState = ""
export default (state = intitialState,action) => {

    switch(action.type){
       case 'SITE_IDENTIFIER_EMPTY':
       console.log("Site Identifier Cannot be empty")
       return "Site Identifier Cannot be empty"

       case 'SITE_IDENTIFIER_SIZE':
       console.log("Site Identifier Needs to be in XXXXX format")
       return "Site Identifier Needs to be in XXXXX format !"
       

       default:
       return state
    }


}
