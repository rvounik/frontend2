// is this extra import REALLY needed..
import * as actionType from '../constants/ActionTypes';

export function addRandomItem(itemId) {
    // fetch logic etc.

    // console.log('in action:');
    // console.log('action was called with actionType = '+actionType.ADD_RANDOM_ITEM);
    // console.log('action was called with itemId = '+itemId);

    // return action type and the value to be send to reducer for state change
    return {
        // this is returned to the caller so it can be dispatched and state can be updated
        type: actionType.ADD_RANDOM_ITEM,
        item: itemId
    };
}

// export function someOtherAction(parameter1, parameter2) {
//     // call an end point using a fetch request and use a promise to update the state (and DOM) for the new item(s)
//     return (dispatch, getState) => {
//         const { urls, tokens } = getState();
//
//         return $.ajax({
//             url: urls.addCompetency.replace('0000000000', parameter1),
//             type: 'POST',
//             data: {
//                 'someId': parameter2
//             }
//         }).done(function(data) {
//             dispatch(updateBrowserView('some-type'));
//         }).fail(function(data) {
//         });
//     };
// }
