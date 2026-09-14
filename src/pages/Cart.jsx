import React from "react";

const Cart = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>

            <div className="cart">
              {/* Cart Header */}
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>

              {/* Cart Item */}
              <div className="cart__body">
                <div className="cart__item">
                  <div className="cart__book">
                    <img src="/" className="cart__book--img" alt="" />

                    <div className="cart__book--info">
                      <span className="cart__book--title">Crack the Code</span>

                      <span className="cart__book--price">$24.99</span>

                      <button className="cart__book--remove" type="button">
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart__quantity">
                    <input type="number" min={1} max={99} defaultValue={1} />
                  </div>

                  <div className="cart__total">$24.99</div>
                </div>
              </div>

              {/* Cart Footer */}
              <div className="cart__footer">
                <span className="cart__subtotal">
                  Subtotal: <strong>$24.99</strong>
                </span>

                <button className="btn" type="button">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
