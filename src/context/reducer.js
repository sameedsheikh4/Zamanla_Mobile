export let data = {
    User:{},
}

export function reducer(state, action) {
    switch (action.type) {
       
        case "USER_LOGIN": {
            return {
                ...state,
                User: action.payload
            }
        }
       
        
        default:
            return state;

    }
}