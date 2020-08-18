import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailProducts } from '../actions/productsActions';

function ProductScreen(props) {
    const [qty,setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch(detailProducts(props.match.params.id));
        return () => {
        };
    },[])

    const handleAddToCart = () => {
        props.history.push("/cart/"+props.match.params.id+"?qty="+qty)
    }
    
    return <div>
            <div className="back-to-res">
                <Link to="/">Back to result</Link>
            </div>
            {loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
                    (
                    
                        <div class="details">
                            <div class="details-image">
                                <img src={product.image} alt="no image to show"></img>
                            </div>
                        
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    Price: <b>${product.price}</b>
                                </li>
                            </ul>

                        </div>
                        <div className="details-action">
                            <ul>
                                <li>
                                    price : {product.price}
                                </li>
                                <li>
                                    status : {product.countInStock > 0 ? "In Stock": "Unavailable"}
                                </li>
                                <li>
                                    Qty : <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                        {[...Array(product.countInStock).keys()].map(x=>
                                            <option key={x+1} value={x+1}>{x+1}</option>
                                            )} 
                                    </select>
                                </li>
                                <li>
                                    {product.countInStock>0 &&
                                    <button onClick={handleAddToCart} className="button">
                                        Add to Cart</button>
                                    }
                                </li>
                            </ul>

                        </div>

                    </div>
                )
                
            }
        </div>
    
}

export default ProductScreen;