const initialState={};
const reducer =(state=initialState,action)=>{
   switch (action.type){
    case 'ITEM_UPDATE':
        return action.payload;
    default:
        return state;
   }

}
export default reducer;


// const initialState =7;

// const changeNum =( state=initialState,action)=>{
//     switch (action.type){
//      case "INCREMENT":
//          return action.type;
//      case "DECREMENT":
//          return action.type;
//      default:
//          return state;
//     }
 
//  }
//  export default changeNum;