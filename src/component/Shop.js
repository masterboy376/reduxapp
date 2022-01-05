import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

function Shop() {
    const dispatch = useDispatch();
    // method 1
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)

    // method 2
    // const action = bindActionCreators(actionCreators, dispatch)
    const amount = useSelector(state => state.amount);
    return (
        <>
            <div className="container mt-5 fs-3 mx-auto d-flex flex-column align-items-center">
                <h2 className="display-5 mb-5">deposit/withdraw money</h2>
                <div className='w-100 d-flex justify-content-center align-items-center'>
                {/* method 1 */}
                <button className="mx-2 fs-1 w-25 btn btn-primary" disabled={amount <= 0} onClick={() => { withdrawMoney(1000) }}>-</button>
                Add to cart
                <button className="mx-2 fs-1 w-25 btn btn-primary" onClick={() => { depositMoney(1000) }}>+</button>

                {/* method 2 */}
                {/* <button className="mx-2 fs-1 w-25 btn btn-primary" disabled={amount <= 0} onClick={() => { action.withdrawMoney(1000) }}>-</button>
                Add to cart
                <button className="mx-2 fs-1 w-25 btn btn-primary" onClick={() => { action.depositMoney(1000) }}>+</button> */}

                {/* method 3 */}
                {/* <button className="mx-2 fs-1 w-25 btn btn-primary" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
          Add to cart 
          <button className="mx-2 fs-1 w-25 btn btn-primary" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
                </div>
            </div>
        </>
    )
}

export default Shop
