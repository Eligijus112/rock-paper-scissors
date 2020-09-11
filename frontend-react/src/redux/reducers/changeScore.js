const defaultState = {
    winsAI: 0,
    winsUser: 0,
    draws: 0,
    totalMatches: 0
}

function changeScore(state = defaultState, action) {
    switch (action.type) {
        case "INCREMENT_USER_WINS":
            return {
                ...state,
                winsUser: state.winsUser + 1,
                totalMatches: state.totalMatches + 1
            }
        case "INCREMENT_AI_WINS":
            return {
                ...state,
                winsAI: state.winsAI + 1,
                totalMatches: state.totalMatches + 1
            }
        case "INCREMENT_DRAWS":
            return {
                ...state,
                draws: state.draws + 1,
                totalMatches: state.totalMatches + 1
            }
        default:
            return state
    }
}

export default changeScore