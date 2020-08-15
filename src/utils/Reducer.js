export const initialState = {
    isPlaying: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_PLAYING":
            return {
                ...state,
                isPlaying: !state.isPlaying
            };

        default:
            return state;
    }
};

export default reducer;
