import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function ProductScreen(props){
    const product = data.products.find( x => x._id === props.match.params.id);
    return <div className="details">
            <div className="back-to-res">
                 <Link to="/">Back to result</Link>
            </div>
            <div class="details">
                <div class="details-image">
                    <img src={product.image} alt="no image to show"></img>
                </div>
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
}

export default ProductScreen;