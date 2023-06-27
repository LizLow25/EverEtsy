const ADD_ITEM = 'cart/ADD_ITEM'

const REMOVE_ITEM = 'cart/REMOVE_ITEM'

const REDUCE_ITEM = 'cart/REDUCE_ITEM'

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

export const reduceItem = (id) => {
    return {
        type: REDUCE_ITEM,
        id
    }

}

export const populateCartThunk = (id) => async (dispatch) => {
    const res = await fetch('/api/cart/new', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id)
      })

      if (res.ok) {
        dispatch(populateCart(id))
      }

    }

export const fetchCartItemsThunk = () => async (dispatch) => {
    const res = await fetch('/api/cart')

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

        case REDUCE_ITEM:
            let rid = action.id
            if (state[rid]) {
                const newState = { ...state }
                let obj = newState[rid]
                obj.count--
                return newState
            }

        case REMOVE_ITEM:
            let newState = { ...state };
            console.log(newState[action.id])
            delete newState[action.id]
            return newState;



        default:
            return state;
    }
}
