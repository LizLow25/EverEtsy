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



    return (
        <div>
            <h2>Complete Purchase?</h2>
            <form className="purchaseform">
                <div className="radio">
                    <label>
                        <input type="radio" />
                        <i class="fa-brands fa-cc-mastercard fa-2xl"></i>
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" />
                        <i class="fa-brands fa-cc-amex fa-2xl"></i>
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" />
                        <i class="fa-brands fa-cc-visa fa-2xl"></i>
                    </label>
                </div>
            </form>

            <button onClick={onClick}>Complete</button>


        </div>
    )
}

export default PurchaseCartModal;
