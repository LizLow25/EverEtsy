import { deleteCartForUserThunk } from "../../store/cart";
import { useDispatch } from 'react-redux';
import { useModal } from "../../context/Modal";
import './PurchaseCartModal.css'

function PurchaseCartModal() {
    const dispatch = useDispatch()
    const { closeModal } = useModal();


    const onClick = async () => {

        await dispatch(deleteCartForUserThunk())

        return closeModal()


    }

    const dontCheckout = () => {
        return closeModal()
    }



    return (
        <div className="purchaseModal">
            <h2>Complete Purchase?</h2>
            <button className='deletebutton cartbutton' onClick={dontCheckout}>Return to shopping</button>
            <button className='deletebutton cartbutton' onClick={onClick}>Purchase cart</button>


        </div>
    )
}

export default PurchaseCartModal;
