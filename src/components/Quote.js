// import React, { useState, useEffect } from "react";

// function Quote() {
//   // https://dummyjson.com/quotes
//   const [quote, setQuote] = useState(null);

//   useEffect(() => {
//     fetch("https://dummyjson.com/quotes")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setQuote(data);
//         console.log(quote);
//       });
//   },[]);

//   return (
//     <>
//       <div className="container">
//         <div className="row d-flex align-content-end flex-wrap">
//           <div className="col-md-6 mx-auto bg-primary d-flex align-content-end flex-wrap ">
//             {/* {quote.map((qut) => {
//               return <p>{qut.quote}</p>;
//             })} */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Quote;
