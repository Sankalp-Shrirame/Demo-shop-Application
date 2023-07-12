import './Item.css';

function Item(props) {
return(
    <div>
    <h1 className='item'>{props.name}</h1>
    {props.children}
    </div>
)
}

export default Item;