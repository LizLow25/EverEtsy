import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllShopsThunk } from '../../store/shop'

const LandingPage = () => {
    const dispatch = useDispatch()
    const shops = useSelector(state => state.shops.allShops)
    console.log('shops', shops)


    useEffect(() => {
        dispatch(getAllShopsThunk())
    }, [dispatch])

    if (!shops) return <h1>Shops loading...</h1>
    let shopArray = Object.values(shops)
    return (
        <div>
            <h1>here</h1>
            <ul>
                {shopArray?.map(shop => (
                    <li>
                        {shop.name}
                        <img src={shop.shop_image} alt=''/>
                    </li>
                ))
                }
            </ul>

        </div>
    )


}

export default LandingPage;
