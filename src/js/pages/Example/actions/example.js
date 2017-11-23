import * as actionType from '../constants/ActionTypes';

export function addRandomItem(itemId) {
    // return action type and the value to be send to reducer for state change
    return {
        type: actionType.ADD_RANDOM_ITEM,
        item: itemId
    };
}
