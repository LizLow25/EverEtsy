const ADD_ITEM = 'cart/ADD_ITEM'

const REMOVE_ITEM = 'cart/REMOVE_ITEM'

const REDUCE_ITEM = 'cart/REDUCE_ITEM'

export const populateCart = (id, count) => {
    return {
        type: ADD_ITEM,
        id,
        count
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id)
    })

    if (res.ok) {
        dispatch(populateCart(id))
    }

}

export const fetchCartItemsThunk = () => async (dispatch) => {
    const res = await fetch('/api/cart/')
    if (res.ok) {
        const { products } = await res.json()
        console.log('products', products)
        for (let product of products) {
            dispatch(populateCart(product.id, product.count))

        }
    }

}

export const deleteCartItemsThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/cart/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        
    })

    if (res.ok) {
        dispatch(populateCart(id))
    }

}



export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_ITEM:
            const cart = {}
            let id = action.id
            let count = action.count
            cart[action.id] = { id, count}
            return { ...state, ...cart };


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
