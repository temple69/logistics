import React from "react";
import { useState } from "react";

const Forms = () => {
  const [radioStates, setRadioStates] = useState({
    searchState: false,
    receiveState: false,
    enquiryState: false,
  });

  const { searchState, receiveState, enquiryState } = radioStates;
  console.log(enquiryState);

  const inputHandler = (event) => {
    let radioVal = event.target.defaultValue;
    let checked = event.target.checked;

    let search = radioVal === "search";
    console.log(event);
    console.log(radioVal);
    setRadioStates((prevState) => {
      if (radioVal === "search") {
        return {
          ...prevState,
          searchState: search ? true : false,
          enquiryState: false,
          receiveState: false,
        };
      }
      if (radioVal === "enquiry") {
        return {
          ...prevState,
          enquiryState: true,
          receiveState: false,
          searchState: false,
        };
      } else if (radioVal !== "search") {
        return {
          ...prevState,
          searchState: false,
          receiveState: radioVal === "receive" ? true : false,
          enquiryState: false,
        };
      }
    });
  };
  return (
    <section className="w-full flex justify-center bg-orange-500 ">
      <form className=" w-[60%] px-10 text-green-900 rounded-lg py-4 bg-green-600">
        <fieldset className="relative my-2">
          <input
            type="radio"
            name="send"
            id="search"
            value="search"
            onClick={inputHandler}
          />
          <label className="pl-4" htmlFor="search">
            Send Cargo
          </label>

          <div className={searchState ? "block pl-4" : "hidden"}>
            <label htmlFor="sending" className="block my-2">
              What Do You Want To Send
            </label>
            <select
              name="sending"
              id="sending"
              className="block border-none outline-none w-full py-2 rounded-lg pl-2"
            >
              <option value="Send a box">Send a Box or Boxes</option>
              <option value="Send a 20ft container">
                Send a 20ft container
              </option>
              <option value="Send a 40ft container">
                Send a 40ft container
              </option>
            </select>
          </div>
        </fieldset>
        <fieldset className="my-2">
          <input
            type="radio"
            name="send"
            id="receive"
            value="receive"
            onClick={inputHandler}
          />
          <label className="pl-4" htmlFor="receive">
            Receive Cargo
          </label>

          <div className={receiveState ? "block pl-4" : "hidden"}>
            <label htmlFor="sending" className="block my-2">
              What Do You Want To Receive
            </label>
            <select
              name="sending"
              id="sending"
              className="block  border-none outline-none rounded-lg w-full h-10 pl-2"
            >
              <option value="Receive a box" className="rounded-lg">
                Receive a Box or Boxes
              </option>
              <option value="Receive a 20ft container">
                Receive a 20ft container
              </option>
              <option value="Receive a 40ft container">
                Receive a 40ft container
              </option>
            </select>
          </div>
        </fieldset>
        <fieldset className="my-2">
          <input
            type="radio"
            name="send"
            id="enquiry"
            value="enquiry"
            onClick={inputHandler}
          />
          <label className="pl-4" htmlFor="enquiry">
            Make An Enquiry
          </label>

          <div className={enquiryState ? "block" : "hidden"}>
            <label htmlFor="sending" className="block my-2">
              What Do You you want To make Enquiry about
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              placeholder="Please make Your Enquiries"
              className="block pl-2 resize-none w-full rounded-lg py-2 h-[200px]"
            ></textarea>
          </div>
        </fieldset>

        <fieldset>
          <label>Are you shipping as individual or Company:</label>
          <fieldset>
          <label htmlFor="Yes">
            <input
              type="radio"
              name="send"
              value={"Yes"}
              id="Yes"
              className="inline-block"
            />
            Yes</label>
            <label htmlFor="No" className="pl-2">
            <input
              type="radio"
              name="send"
              value={"No"}
              id="No"
              className="inline-block ml-2"
            />
            No</label>
          </fieldset>
        </fieldset>
        <label htmlFor="email">Enter Your Email Adrress:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full px-4 h-10 rounded-lg my-2"
          placeholder="Enter Email Address"
        />
        <label htmlFor="description">Enter Nature Of Goods</label>
        <textarea
          name="description"
          cols="30"
          className="block w-full rounded-lg resize-none pl-2 py-2 h-[200px]"
          placeholder="Describe the nature of your goods"
        ></textarea>
      </form>
    </section>
  );
};

export default Forms;
