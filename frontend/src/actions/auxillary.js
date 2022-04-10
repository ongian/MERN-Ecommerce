import { MODAL } from "../actionTypes/actionTypes"

export const popupModal = () => async(dispatch) => {
    dispatch({
        type: MODAL
    })
}