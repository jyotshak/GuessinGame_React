import {actionTypes} from '../actions';

// Testing conflict
export default (state=[], action) => {
   switch(action.type){
      case actionTypes.GUESS_WORD:
         return [...state, action.payload];
      default:
         return state;
   }
}