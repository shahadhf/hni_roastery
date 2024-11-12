import "./App.css";
import storeImage from "../src/joshua-rodriguez-f7zm5TDOi4g-unsplash.jpg";

function App() {
  const product = [
    {
      name: "Flat White",
      price: " 2.100 KWD",
    },
    {
      name: "Cappucino",
      price: " 1.950 KWD",
    },
  ];

  const productList = products.map((product, index) => {
    return (
      <div key={index}>
        <img> className="Product-Image" src= {storeImage}</img>
        <p> {product.price}</p>
        <p> {product.name}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Hni Roastery</h1>
      <p> More than just Coffee </p>
      <img className="store-Image" src={storeImage}></img>
      <div className="Products-List">
        {productList}

        <img> className="Product-Image" src= {storeImage}</img>
        <p> Flat White</p>
        <p>2.000 KWD</p>
      </div>
    </div>
  );
}

export default App;
