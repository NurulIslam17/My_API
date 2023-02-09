import React, { useState, useEffect } from "react";

function Quote() {
  // https://dummyjson.com/quotes
  const [quote, setQuote] = useState(null);

  const fetchData = () => {
    return fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  useEffect(() => {
    fetchData();
    console.log(quote);
  }, []);
  
  return (
    <>
      <div className="container">
        <div className="row d-flex align-content-end flex-wrap">
          <div className="col-md-6 mx-auto bg-primary d-flex align-content-end flex-wrap ">
            {/* {quote.map((qut)=>{
                <p>{qut.quote}</p>
                // <p>{qut.author}</p>
              })} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote;
