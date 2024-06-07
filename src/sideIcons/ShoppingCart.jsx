import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import './ShoppingCart.css';

function ShoppingCart() {
    const [menuOpen, IsMenuOpen] = useState(true);

    const closeMenu = () => {
        IsMenuOpen(false);
    };

    return (
        <>
            <div className={`Gen-shop-cart ${menuOpen ? 'show' : ''}`}>
                {menuOpen && (
                    <div className='cartShow'>
                        <div className="cry">
                            <FaShoppingCart className='cart-icon' />
                            <h6 className='cart-h6'>SHOPPING CART</h6>
                            <IoMdClose className='cart-close' onClick={closeMenu} />
                        </div>

                        <div className="cart-section">
                            <FaShoppingCart className='cart-icon-2' />
                            <p className='cart-p'>Your shopping cart is empty</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ShoppingCart;
