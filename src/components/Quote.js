import React, { useState, useEffect } from "react";

function Quote() {
  // https://dummyjson.com/quotes
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuote(data);
        console.log(quote);
      });
  },quote);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 bg-secondary mx-auto">
            <h3 className="text-center pt-2 text-light">Your Favourite Quote</h3>
            <hr className="b-light"/>
            <p className=" text-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ali quam
              velit nulla, odio mollitia sint consectetur minus perferendis
              autem amet natus eos est a tque. Dolore id, esse eligendi
              quibusdam quam sed!
            </p>

            <div className="btnDiv d-flex justify-content-end">
              <p className="text-light"> ------ ernest Hemingwaya ---- </p>
            </div>
            <div className="btnDiv d-flex justify-content-center">
              <button className="btn btn-light text-dark btn-sm m-2">Change Quetes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote;
