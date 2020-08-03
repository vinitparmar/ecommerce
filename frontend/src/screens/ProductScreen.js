import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailProducts } from '../actions/productsActions';

function ProductScreen(props) {
    
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch(detailProducts(props.match.params.id));
        return () => {
        };
    },[])
    
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
                                    status : {product.status}
                                </li>
                                <li>
                                    Qty : <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </li>
                                <li>
                                    <button className="button">
                                        Add to Cart
                        </button>
                                </li>
                            </ul>

                        </div>

                    </div>
                )
                
            }
        </div>
    
}

export default ProductScreen;