import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { deleteShopThunk } from "../../store/shop";

function DeleteShopModal({ id }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const history = useHistory();

    const closeDelete = () => {
        return closeModal()
    }

    const deleteShop = async () => {
        console.log(id)
        await dispatch(deleteShopThunk(id))


        return closeModal()

    }


    return (
        <div className="deletemodal">
            <div>
                <h2>Confirm Delete</h2>
                <h3>Are you sure you want to delete your shop?</h3>
                <div className="deletebuttoncontainer">
                    <button
                        className="deletebutton"
                        onClick={deleteShop}>Yes</button>
                    <button
                        className="deletebutton"
                        onClick={closeDelete}>No</button>
                </div>
            </div>
        </div>
    )

}


export default DeleteShopModal
