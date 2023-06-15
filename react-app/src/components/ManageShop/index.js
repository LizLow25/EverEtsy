import React, { useEffect } from 'react'
import OpenModalButton from "../OpenModalButton";
import NewShopFormModal from '../NewShopFormModal';

const ManageShop = () => {
    // const dispatch = useDispatch()

    // const singleShop = useSelector(state => state.shops.singleShop)
    // const { shopId } = useParams()
    // console.log('single shop', singleShop)

    // useEffect(() => {
    //     dispatch(getSingleShopThunk(shopId))
    // }, [dispatch, shopId])

    // if (!singleShop) return <h1>Shop loading...</h1>

    // if ( shopId == ':shopId' ) return <ManageShop />

    return (
        <>

            <OpenModalButton
              buttonText="Open a shop"
              modalComponent={<NewShopFormModal />}
            />


        </>
    )

}

export default ManageShop
