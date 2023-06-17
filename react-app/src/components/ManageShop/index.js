import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getShopByOwnerThunk } from '../../store/shop';
import { getProductsForShopOwnerThunk } from '../../store/product';
import OpenModalButton from "../OpenModalButton";
import NewShopFormModal from '../NewShopFormModal'
import DeleteShopModal from '../DeleteShopModal';
import UpdateShopModal from '../UpdateShopModal';

const ManageShop = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const shop = useSelector(state => state.shops.singleShop)
    const products = useSelector(state => state.products.allProducts)

    useEffect(() => {
        dispatch(getShopByOwnerThunk())
        dispatch(getProductsForShopOwnerThunk())
    }, [dispatch])

    let productArray = Object.values(products)




    return (
        <>

            {!shop.id ? <OpenModalButton
                buttonText="Open a shop"
                modalComponent={<NewShopFormModal />}
            /> : null}


            <div className='shopDetailsContainer'>
                <div className='shopContainerDetails'>
                    <img src={shop.shop_image} alt='' className='imgShopDetails' />
                </div>
                <div className='textShopContainerDetails'>
                    <p>{shop.name}</p>
                    <p>{shop.description}</p>

                </div>
                {shop.id ? <OpenModalButton
                    buttonText="Delete your shop"
                    modalComponent={<DeleteShopModal id={shop.id} />} /> : null}

                {shop.id ? <OpenModalButton
                    buttonText="Update your shop"
                    modalComponent={<UpdateShopModal singleShop={shop} />} /> : null}


                {shop.id ? <OpenModalButton
                    buttonText="Add products"
                    modalComponent={<CreateProductModal shop={shop} />} /> : null}
            </div>

            {productArray.length ? <div className='productCardContainer'>
                {productArray?.map(product => (
                    <div key={product.id} className='productCard' onClick={(e) => {
                        history.push(`/products/${product.id}`)
                    }
                    }>
                        <div className='imageContainerCard'>
                            <img src={product.main_image} alt='' className='cardImage' />
                        </div>
                        <div className='cardDetails'>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))
                }
            </div> : null }




        </>
    )

}

export default ManageShop
