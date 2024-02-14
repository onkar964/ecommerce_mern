// import React, { useContext } from 'react'
// import './Checkout.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import { ShopContext } from '../../Context/ShopContext';


// export const Checkout = () => {
//     // const {cartItems, all_product, removeFromCart} = useContext(ShopContext)
//     // all_product.map((e)=>{
//     //    if(cartItems[e.id]>0){
//     //      removeFromCart(e.id)
//     // }http://localhost:4000/checkout
     
//     const chekout = async ()=>{
        
//         toast.success('Order placed successfully', {
//             position: "top-right",
//             autoClose: 1500,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//         })
 
//         window.location.replace("/");
//     }


//     return (
//     <>
//         <ToastContainer
//             position="top-right"
//             autoClose={1500}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//         />
//         <div className='container'>
//             <div className='inputfield'>
//             <input type="text" placeholder='Please Enter your delivery address' name="" id="" />
//             <button onClick={()=>chekout()}>Buy with Cash on delivery</button> 
//         </div>
//     </div>
//     </>
    
//   )
// }

// export default Checkout;

import React, { useContext } from 'react';
import './Checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Import axios for making HTTP requests

export const Checkout = () => {

    const checkout = async () => {
        try {
            // Make a POST request to the backend to handle checkout
            await axios.post('http://localhost:4000/checkout');

            // Display success message
            toast.success('Order placed successfully', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            // Redirect to homepage after successful checkout
            window.location.replace("/");
        } catch (error) {
            // Display error message if there's any issue during checkout
            console.error('Error during checkout:', error);
            toast.error('Failed to place order. Please try again later.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='container'>
                <div className='inputfield'>
                    <input type="text" placeholder='Please Enter your delivery address' name="" id="" />
                    <button onClick={checkout}>Buy with Cash on delivery</button>
                </div>
            </div>
        </>
    )
}

export default Checkout;
