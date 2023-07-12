import './ProductItem.css'
import ProductDate from './ProductDate';

function ProductItem(props) {
    return(
        <div>
            <ProductDate date={props.date}/>
            <h1>{props.name}</h1>
            <h1>{props.amount}</h1>
        </div>
    );
}
export default ProductItem;