import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getShopByOwnerThunk } from '../../store/shop';
import { getProductsForShopOwnerThunk } from '../../store/product';
import OpenModalButton from "../OpenModalButton";
import NewShopFormModal from '../NewShopFormModal'
import DeleteShopModal from '../DeleteShopModal';
import UpdateShopModal from '../UpdateShopModal';
import CreateProductModal from '../CreateProductModal';
import DeleteProductModal from '../DeleteProductModal';
import UpdateProductModal from '../UpdateProductModal';

const ManageShop = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const shop = useSelector(state => state.shops.singleShop)
    const products = useSelector(state => state.products.allProducts)
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getShopByOwnerThunk())
        dispatch(getProductsForShopOwnerThunk())
    }, [dispatch])

    let productArray = Object.values(products)

    if (!shop.id) return <OpenModalButton buttonText="Open a shop" modalComponent={<NewShopFormModal />} />


    return (
        <>
            <div className='shopDetailsContainer'>
                <div className='shopContainerDetails'>
                    <img src={shop.shop_image} alt='' className='imgShopDetails' />
                </div>
                <div className='textShopContainerDetails'>
                    <p>{shop.name}</p>
                    <p>{shop.description}</p>

                </div>
                <OpenModalButton
                    buttonText="Delete your shop"
                    modalComponent={<DeleteShopModal id={shop.id} />} />

                <OpenModalButton
                    buttonText="Update your shop"
                    modalComponent={<UpdateShopModal singleShop={shop} />} />


                <OpenModalButton
                    buttonText="Add products"
                    modalComponent={<CreateProductModal shop={shop} />} />
            </div>

            {shop.owner_id == sessionUser?.id ? productArray.length ? <div className='productCardContainer'>
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
                        <OpenModalButton
                            buttonText="Delete product"
                            modalComponent={<DeleteProductModal id={product.id} />} />
                        <OpenModalButton
                            buttonText="Update product"
                            modalComponent={<UpdateProductModal product={product} />} />

                    </div>
                ))
                }
            </div> : null : null}




        </>
    )

}

export default ManageShop
