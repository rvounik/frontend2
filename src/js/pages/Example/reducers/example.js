// initially populate the state (this used to be connected to twig somehow, we do it different this time)
const initialState = {
	tasks: []
};

export default function someReducer(state = initialState) {
	return state;
}
