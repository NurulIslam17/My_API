import React, { useState, useEffect } from "react";
import axios from "axios";

// const baseURL = "https://dummyjson.com/quotes/{}";

function Quote() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRandom = () => {
    let number = Math.floor(Math.random() * 30) + 1;
    return number;
  };

  const [quoteId, setQuoteId] = useState(1);

  const handleQuote = () => {
    setIsLoading(true);
    setQuoteId(getRandom);
    axios.get(`https://dummyjson.com/quotes/${quoteId}`).then((response) => {
      setQuote(response.data);
      // console.log(response.data);
    });
    setIsLoading(true);
  };

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://dummyjson.com/quotes/${quoteId}`).then((response) => {
      setQuote(response.data);
    });
    setIsLoading(false);
  }, []);

  return (
    // {quote && <p>{quote.id}</p> }
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 bg-secondary mx-auto">
            <h3 className="text-center pt-2 text-light">Favourite Quotes</h3>
            <hr className="b-light" />
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div>
              {quote && <p className=" text-light">{quote.quote}</p>}

              <div className="btnDiv d-flex justify-content-end">
                <p className="text-light">
                  {" "}
                  ------ {quote && quote.author} ----{" "}
                </p>
              </div>
            </div>
            <div className="btnDiv d-flex justify-content-center">
              <button
                onClick={handleQuote}
                className="btn btn-light text-dark btn-sm m-2"
              >
                Change Quetes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote;
