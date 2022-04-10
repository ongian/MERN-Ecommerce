import { MODAL } from "../actionTypes/actionTypes";

export const popupModal = (state = false, action) => {
    switch(action.type){
        case MODAL:
            return state = !state;
        default: return state
    }
}