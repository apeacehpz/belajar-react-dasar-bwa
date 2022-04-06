import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reviews from './Reviews';

function App() {
  return (
    <div class="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Neudora dora" category="LEBARAN" />
      <Reviews />
    </div>
  );
}

function FotoProduk(){
  return(
    <div class="Parentbox">
      <div class="Foto">
        <img src="sneaker.webp" />
      </div>
    </div>
  )
}

function CheckDiscount(props){
  const { isDiscount } = props;
  if(isDiscount == "yes") {
    return(
      <p>Diskon 50% Off</p>
    );
  }else if(isDiscount == "comming") {
    return(
      <p>Akan ada diskon</p>
    );
  }else{
    return(
      <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefit = ["Tidak kusut kena air", "Bahan lebih halus", "Tidak gerah"];
  const listBenefit = benefit.map((itemBenefit) =>
    <li>{itemBenefit}</li>
  );
  const price = "7.500.000";
  return (
    <div>
      <div class="Deskripsi">
        <p class="Cate">{category}</p>
        <p class="Title">{name}</p>
        <p class="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p class="Info">
          One of the most recognizable shoes in the AJ collection, the The Brown Lion Retro 3 features lightweight, visible
        </p>
        <ul>
          {listBenefit}
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href='#'>Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e){
  console.log("Menambahkan", e);
}

export default App;
