const ADD_ITEM = 'cart/ADD_ITEM'
const REMOVE_ITEM = 'cart/REMOVE_ITEM'
const REDUCE_ITEM = 'cart/REDUCE_ITEM'
const INCREASE_ITEM = 'cart/INCREASE_ITEM'
const REFRESH_CART = 'cart/REFRESH_CART'

const populateCart = (id, count) => {
    return {
        type: ADD_ITEM,
        id,
        count
    }
}


const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

const reduceItem = (id) => {
    return {
        type: REDUCE_ITEM,
        id
    }

}

const increaseItem = (id) => {
    return {
        type: INCREASE_ITEM,
        id
    }
}

export const refreshCart = () => {
    return {
        type: REFRESH_CART,

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
        dispatch(removeItem(id))
    }

}

export const reduceCartItemThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/cart/reduce/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },

    })

    if (res.ok) {
        dispatch(reduceItem(id))
    }

}

export const increaseCartItemThunk = (id) => async (dispatch) => {
    const res = await fetch('/api/cart/new', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id)
    })
    if (res.ok) {
        dispatch(increaseItem(id))
    }

}





export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_ITEM:
            const cart = {}
            let id = action.id
            let count = action.count
            cart[action.id] = { id, count }
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
            delete newState[action.id]
            return newState;

        case INCREASE_ITEM:
            let newState2 = { ...state }
            let obj = newState2[action.id]
            obj.count++
            return newState2

        case REFRESH_CART:
            return {}




        default:
            return state;
    }
}
