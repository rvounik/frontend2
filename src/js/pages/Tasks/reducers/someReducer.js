// initially populate the state (this used to be connected to twig somehow, we do it different this time)
const initialState = {
	tasks: []
};

export default function someReducer(state = initialState) {
	return state;
}








// I like this approach. is that how we did it in frontend? see if it fits.

// // todos/reducer.js
// import t from './actionTypes';
// import type { State } from './model';
//
// const initialState: State = [{
//     text: 'Use Redux',
//     completed: false,
//     id: 0
// }];
//
// export (state = initialState, action: any): State => {
//     switch (action.type) {
//         case t.ADD:
//             return [
//                 // ...
//             ];
//         // ...
//     }
// };
