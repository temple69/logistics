import React from "react";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Forms = () => {
  const formData = useRef();
  const [radioStates, setRadioStates] = useState({
    searchState: false,
    receiveState: false,
    enquiryState: false,
  });
  const [formValues, setFormValues] = useState({
    send: "Send a Box or Boxes",
    receive: "Receive a Box or Boxes",
    email: "",
    CompanyIndividualStatus: "",
    goodsDescription: "",
  });
  const enquiryMessage = useRef("");


  const { send, receive, email, goodsDescription } = formValues;
  const assignObject = (incomingData) => {
    if (incomingData === "Yes" || incomingData === "No") {
      Object.assign(formValues, {
        CompanyIndividualStatus: incomingData,
      });
    } else {
      Object.assign(formValues, {
        enquiryMessage: incomingData,
      });
    }
  };
  const formDataHandler = (event) => {
    const { value, name } = event.target;
    setFormValues((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    assignObject(enquiryMessage.current.value);
    emailjs
      .send("logistics", "template_zh34vcr", formValues, "aB_IKH546QhdYCK2i")
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
  };

  const { searchState, receiveState, enquiryState } = radioStates;

  const inputHandler = (event) => {
    let radioVal = event.target.defaultValue;
    let checked = event.target.checked;
    if (radioVal === "Yes" && checked) {
      assignObject(radioVal);
    }
    if (radioVal === "No" && checked) {
      assignObject(radioVal);
    }

    let search = radioVal === "search";
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
  let output = goodsDescription.length === "" ? [] : goodsDescription.length;

  return (
    <section className="w-full flex justify-center bg-orange-500 ">
      <form
        className="w-[70%] px-10 text-green-900 rounded-lg py-4 bg-green-600"
        onSubmit={submitHandler}
      >
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
              required
              value={send}
              onChange={formDataHandler}
              name="send"
              id="sending"
              className="block border-none outline-none w-full py-2 rounded-lg pl-2"
              placeholder="What do you want to send"
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
              required
              name="receive"
              id="sending"
              className="block  border-none outline-none rounded-lg w-full h-10 pl-2"
              onChange={formDataHandler}
              value={receive}
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
              required
              autoFocus
              placeholder="Please make Your Enquiries"
              className="block pl-2 resize-none w-full rounded-lg py-2 h-[150px]"
              ref={enquiryMessage}
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
                value="Yes"
                id="Yes"
                className="inline-block"
                onClick={inputHandler}
              />
              Yes
            </label>
            <label htmlFor="No" className="pl-2">
              <input
                type="radio"
                name="send"
                value="No"
                id="No"
                className="inline-block ml-2"
                onClick={inputHandler}
              />
              No
            </label>
          </fieldset>
        </fieldset>
        <label htmlFor="email">Enter Your Email Adrress:</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          className="block w-full px-4 h-10 rounded-lg my-2"
          placeholder="Enter Email Address"
          value={email}
          onChange={formDataHandler}
        />
        <label htmlFor="description">Enter Nature Of Goods</label>
        <textarea
          required
          name="goodsDescription"
          cols="30"
          className="block w-full rounded-lg resize-none pl-2 py-2 h-[120px]"
          placeholder="Describe the nature of your goods Also include weight or dimension of cargo boxes"
          value={goodsDescription}
          onChange={formDataHandler}
        ></textarea>
        {<span className="text-white">Max Words:{300 - output}</span>}
        <button className="h-[60px] bg-red-600 w-full rounded-lg text-white">
          {" "}
          Request Quote
        </button>
      </form>
    </section>
  );
};

export default Forms;
