import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getAllShopsThunk } from '../../store/shop'
// import { getSingleShopThunk } from '../../store/shop'
// import { getProductsForShopThunk } from '../../store/product'
import './ShopDetails.css'


const ShopDetails = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    // const singleShop = useSelector(state => state.shops.singleShop)
    // const products = useSelector(state => state.products.allProducts)
    const shop = useSelector(state => state.shops.allShops)
    let { shopId } = useParams()
    shopId = parseInt(shopId)


    useEffect(() => {
        dispatch(getAllShopsThunk())
        // dispatch(getProductsForShopThunk(shopId))
    }, [dispatch, shopId])

    let singleShop = shop[shopId]
    let productArray = singleShop?.products
    if (!singleShop) return <h1>Shop loading...</h1>



    return (
        <>
            <div className='shopDetailsContainer'>

                <div className='shopimgcontainer'>
                    <img src={singleShop.shop_image} alt='' className='imgShopDetails' />
                </div>
                <div className='textShopContainerDetails'>
                    <h2>{singleShop.name}</h2>
                    <p>{singleShop.description}</p>


                </div>
                <div>
                <i class="fa-solid fa-truck fa-lg"></i>
                <p>Smooth shipping</p>
                <p>Has a history of shipping on time with tracking.</p>
                </div>
                <div>
                <i class="fa-brands fa-swift fa-rotate-270 fa-lg"></i>
                <p>Swift replies</p>
                <p>Has a history of replying to messages quickly.</p>
                </div>
                {/* {sessionUser ? sessionUser.id == singleShop.shop_owner ? !productArray.length ? <button>Add products</button> : null : null : null} */}
            </div>
      

            <div className='productCardContainer'>
                {productArray?.map(product => (
                    <div key={product.id} className='productCard' onClick={(e) => {
                        history.push(`/products/${product.id}`)
                    }
                    }>
                        <div className='imageContainerCard'>
                            <img src={product.main_image} alt='' className='cardImage' />
                        </div>
                        <div className='cardDetails'>
                            <div className='productPrice'>${product.price.toFixed(2)}</div>
                        </div>
                    </div>
                ))
                }
            </div>


        </>
    )

}

export default ShopDetails
