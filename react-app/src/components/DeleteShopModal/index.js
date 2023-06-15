import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";

function DeleteShopModal({id}) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const closeDelete = () => {
        return closeModal()
    }

    const deleteShop = async () => {
        console.log(id)
        //await dispatch(deleteShopThunk(id))

        return closeModal()

    }


    return (
        <div className="deletemodal">
            <div>
                <h2>Confirm Delete</h2>
                <h3>Are you sure you want to delete your shop?</h3>
                <button
                    onClick={deleteShop}>Yes</button>
                <button
                    onClick={closeDelete}>No</button>
            </div>
        </div>
    )

}


export default DeleteShopModal
