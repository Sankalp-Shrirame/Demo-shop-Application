import { useState } from "react";
import "./App.css";

import Product from "./components/Product";
import NewProduct from "./components/NewProduct";

function App() {
 const products =[
  {
    id: 'p1',
    name: 'Apple',
    date: "19-Aug-2023",
    amount: "2000"
  },
  {
    id: 'p2',
    name: 'Mango',
    date: '21-Aug-2023',
    amount: "1000"
  },
  {
    id: 'p3',
    name: "Pineapple",
    date: "20-Aug-2023",
    amount: "2500"
  },
  {
    id: 'p4',
    name: "Buleberry",
    date: "23-Aug-2025",
    amount: "3000"
  }
 ];

 

 

  return (
    <div>
      {/* <Card>
     <Product items={products}></Product>
      </Card> */}
     <NewProduct/>

     {/* learning git purpose */}
    </div>
  );
}

export default App;
