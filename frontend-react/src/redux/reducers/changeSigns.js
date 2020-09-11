const defaultState = {
    signUser: null,
    signAI: null,
    outcome: 0
}

function changeSigns(state = defaultState, action) {
    switch (action.type) {
        case "SET_SIGNS":
            return {
                ...state,
                signUser: action.signUser,
                signAI: action.signAI,
                outcome: action.outcome
            }
        default:
            return state
    }
}

export default changeSigns