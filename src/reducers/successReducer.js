import { act } from "react-dom/test-utils";
import { actionTypes } from "../actions";

export default (state=false,action) => {
    switch(action.type) {
        case(actionTypes.CORRECT_GUESS):
            return true;
        default:
            return state;
    }
}