import './ItemDate.css';

function ItemDate(props) {
return(
<div className='mfg-date'>
    <span>{props.date} </span>
    <span>{props.month} </span>
    <span>{props.year}</span>
</div>
);
}

export default ItemDate;