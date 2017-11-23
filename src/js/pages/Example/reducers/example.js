import * as actionType from './../constants/ActionTypes';

// initially populate the state with defaults (there is no controller and thus no js.html.twig with default values)
const initialState = {
    active: false,
	items: [
	    {id: 'initial item 1'},
        {id: 'initial item 2'}
    ]
};

export default function exampleReducer(state = initialState, action) {
    switch (action.type) {
        // attempt to match the action type from the action.type parameter received from the action
        case actionType.ADD_RANDOM_ITEM:
            // define new state with received parameters from the action

            // approach 1
            // let newState = Object.assign({}, state, {
            //     item: action.item
            // });
            // return copy of state with items set to the given itemId
            // return newState;

            // approach 2
            // let newState = Object.assign({}, state);
            // newState.items.push(action.item);
            // return copy of state with items set to the given itemId
            // return newState;

            // approach 3
            // let items = state.items;
            // console.log(items)
            // items.push(action.item);
            // console.log(items)
            // return Object.assign({}, state, { items: items });

            // approach 4
            // console.log('before '+state.items);
            // let newState = Object.assign({}, state.items);
            // state = update(state, { items: newState.push(action.item) });
            // console.log('after'+state.items);
            // break

            let newState = Object.assign({}, state);
            newState.items.push(
                {id: action.item}
            );
            //return copy of state with items set to the given itemId
            return newState;

            // approach 6
            // case ADD_ITEM :
            //     return {
            //         ...state,
            //         arr: [...state.arr, action.newItem]
            //     }
        default:
            return state
    }
}

