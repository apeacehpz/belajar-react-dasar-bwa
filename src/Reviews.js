import React from "react";
import './App.css';

function Reviews() {
    //mempersiapkan data dummy JSON
    const users =[
      {
        "id": 1,
        "name": "Hafiz Aprilizar",
        "review": "Harganya murah, tetapi kualitasnya bukan kaleng-kaleng",
        "foto": "https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 2,
        "name": "Masasi",
        "review": "Harganya murah tetapi kualitas mantap",
        "foto": "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1933873.jpg&fm=jpg"
      },
      {
        "id": 3,
        "name": "Sunka",
        "review": "Mantap, harga bersahabat",
        "foto": "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ];
    const listReview = users.map((itemReview) =>
      <div className="Item">
      <img src={itemReview.foto} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
    );
    return(
      <div className='Reviewbox'>
        <h2>Reviews</h2>
        {listReview}
      </div>
    );
  }

export default Reviews;