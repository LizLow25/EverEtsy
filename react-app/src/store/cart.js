const ADD_ITEM = 'cart/ADD_ITEM'

const REMOVE_ITEM = 'cart/REMOVE_ITEM'

export const populateCart = (id) => {
    return {
        type: ADD_ITEM,
        id
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}


export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_ITEM:
            const cart = {}
            let id = action.id
            if (state[id]) {
                const newState = { ...state }
                let obj = newState[id]
                obj.count++
                return newState
            } else {
                cart[action.id] = { id, 'count': 1 }
                return { ...state, ...cart };
            };

        case REMOVE_ITEM:
            let newState = { ...state};
            console.log(newState[action.id])
            delete newState[action.id]
            return newState;

        default:
            return state;
    }
}
