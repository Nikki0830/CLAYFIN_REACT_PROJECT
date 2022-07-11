import React, { Component, useState } from "react";
import { data } from "../../db";
import { Route, Link, Redirect } from "react-router-dom";
import Booking from "../Booking/Booking";

// export class Home extends Component {
//   constructor() {
//     super();
//     this.state = {
//       myData: [],
//     };
//   }
//   handleChange() {
//     this.setState();
//   }
//   handleClick() {
//     this.setState();
//   }
//   render() {
//     return (
//       <>
//         <input
//           onChange={this.handleChange}
//           type="text"
//           placeholder="Enter your item name"
//         />
//         <button onClick={this.handleClick}>Hii</button>
//         <div>
//           {data.map((ele) => {
//             console.log(ele);
//             //     return(
//             //    <alert>{ele.temple_name}</alert>
//             //     )
//           })}
//         </div>
//       </>
//     );
//   }
// }

// export default Home;

export default function Home({ authorized }) {
  //   const [msg, setMsg] = useState([]);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  //   setMsg("")
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked", search);
  };
  const filterName = data.filter((ele) =>
    ele.temple_name.toLowerCase().includes(search.toLowerCase())
  );

  console.log("filter", filterName);
  //   console.log("flower",flowerName)
  if (authorized) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <input
        style={{
          height: "30px",
          outline: "none",
          border: "none",
          borderBottom: "2px solid black",
        }}
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={search}
        autoComplete="off"
      />

      {/* <h2>Message: {search}</h2> */}

      <button
        onClick={handleClick}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
      >
        Click
      </button>
      <div>
        {data.map((ele) => {
          console.log(ele);
          return <></>;
        })}
      </div>
      <div>
        {filterName.map((e) => {
          console.log("filter", e);
          return (
            <>
              <div className="main_temple_div">
                <div className="temple_div">
                  <h2 className="temple_name">{e.temple_name}</h2>
                  <img className="temple_img" src={e.url}></img>
                  <Link to="/booking">
                    {/* Login button */}
                    <button type="button" className="btn btn-warning">
                      Book now
                    </button>
                  </Link>

                  {/* <Switch> */}
                  <Route exact path="/booking">
                    <Booking />
                  </Route>
                  {/* </Switch> */}
                </div>
              </div>
            </>
          );
        })}
        {/* 
        {flowerName.map((e) => {
          console.log("filter", e);
          return (
            <>
              <h2>{e.flowers.name}</h2>
            
            </>
          );
        })} */}
      </div>
    </>
  );
}
