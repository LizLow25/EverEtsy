import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { deleteProductThunk, getProductsForShopOwnerThunk } from "../../store/product";


function DeleteProductModal({id}) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const history = useHistory();

    const closeDelete = () => {

        return closeModal()
    }

    const deleteProduct = async () => {
        console.log(id)
        await dispatch(deleteProductThunk(id))
        await dispatch(getProductsForShopOwnerThunk())


        return closeModal()

    }


    return (
        <div className="deletemodal">
            <div>
                <h2>Confirm Delete</h2>
                <h3>Are you sure you want to delete your product?</h3>
                <button
                    onClick={deleteProduct}>Yes</button>
                <button
                    onClick={closeDelete}>No</button>
            </div>
        </div>
    )

}


export default DeleteProductModal
