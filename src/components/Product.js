import './Product.css'

function Product(props) {
    return(
        <div>
            <div>
                name={props.items[0].name}
                date={props.items[0].date}
                amount={props.items[0].amount}
            </div>
            <div>
                name={props.items[1].name}
                date={props.items[1].date}
                amount={props.items[1].amount}
            </div>
            <div>
                name={props.items[2].name}
                date={props.items[2].date}
                amount={props.items[2].amount}
            </div>
        </div>
    );
}

export default Product;