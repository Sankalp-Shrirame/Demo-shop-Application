import { useState } from "react";
import "./ProductFrom.css";

function ProductFrom() {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function emailChangeHandler(event){
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title: title,
            date: date
        }

        console.log(productData);
        
        setTitle('');
        setDate('');
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-product_title">
        <label>Email</label>
        <input type="text" value={title} onChange={titleChangeHandler}/>
      </div>

      <div className="new-product_date">
        <label>Date</label>
        <input type="date" min='2023-01-01' max='2023-12-31' value={date} onChange={emailChangeHandler} />
      </div>

      <div className="new-product_button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ProductFrom;
