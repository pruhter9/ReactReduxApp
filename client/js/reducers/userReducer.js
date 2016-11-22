const initState = {
	firstName: "Philip",
	lastName: "Ruhter"
};

export default function reducer(state=initState, action) {
	switch (action.type) {
		case "SAMPLE_ACTION":
			return state;
		default:
			return state;
	}
}

/* const headline = (state, action) => {
	// helper functions for reducer to abstract state updates
}
*/
