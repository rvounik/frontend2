import * as actionType from './../constants/ActionTypes';

// initially populate the state with defaults (there is no controller and thus no js.html.twig with default values)
const initialState = {
    active: false,
	item: null
};

// export default function someReducer(state = initialState) {
// 	return state;
// }

export default function exampleReducer(state = initialState, action) {
    // console.log('in reducer:');
    // console.log('state.item:'+state.item);
    // console.log('action.item:'+action.item);
    // if (state.item !== action.item) {
    //     console.log('updating state');
    // }
    switch (action.type) {
        case actionType.ADD_RANDOM_ITEM:
            //console.log('found right case');
            console.log('old state: '+state.item);
            let newState = Object.assign({}, state, {item: action.item});
            console.log('newState: '+newState.item);
            // return copy of state with items set to the given itemId
            return newState;
        default:
            return state;
    }
}
