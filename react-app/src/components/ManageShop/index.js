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
import './ManageShop.css'

const ManageShop = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const shop = useSelector(state => state.shops.currentShop)
    const products = useSelector(state => state.products.shopProducts)

    useEffect(() => {
        dispatch(getShopByOwnerThunk())
        dispatch(getProductsForShopOwnerThunk())
    }, [dispatch, shop.id])

    let productArray = Object.values(products)
    // <OpenModalButton buttonText="Open a shop" modalComponent={<NewShopFormModal />} />


    if (!shop.id) {
        return (

            <div className='parentmanageshop'>
                <div className='manageshoptop'>
                    <h2 className='managecopy'>Share your products with the world</h2>
                    <div className='manageshopbuttoncontainer'>
                        <OpenModalButton buttonText="Open a shop" modalComponent={<NewShopFormModal />} />
                    </div>
                </div>
                <div className='manageshopbottom'>
                </div>
            </div>
        )
    }

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
                    buttonText="Stock your shop"
                    modalComponent={<CreateProductModal shop={shop} />} />
            </div>

            <div className='productCardContainer'>
                {productArray?.map(product => (
                    <div key={product.id} className='productCard' >
                        <div className='imageContainerCard'

                            onClick={(e) => {
                                history.push(`/products/${product.id}`)
                            }
                            }>
                            <img src={product.main_image} alt='' className='cardImage' />
                        </div>
                        <div className='cardDetails'>
                            <div className='toppoduct'>
                                <p>{product.name}</p>
                                <p>${product.price.toFixed(2)}</p>
                            </div>
                            <p className='manageprodcat'>{product.category}</p>
                            <div className='detailsprodman'>{product.details}</div>
                        </div>
                        <div className='manageproductbuttons'>
                            <OpenModalButton
                                buttonText="Delete product"
                                modalComponent={<DeleteProductModal id={product.id} />} />
                            <OpenModalButton
                                buttonText="Update product"
                                modalComponent={<UpdateProductModal product={product} />} />
                        </div>
                    </div>
                ))
                }
            </div>




        </>
    )

}

export default ManageShop
