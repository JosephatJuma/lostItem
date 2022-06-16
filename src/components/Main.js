import FormControl from "@material-ui/core/FormControl";
import { Input, TextField, Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControl";
import { useState } from "react";
import apiRequest from "./apiRequest";

export const Main = ({ items, onAdd, remain, url }) => {
  const [full, setFull] = useState(false);
  const [fetchError, setFetchError] = useState("");
  //const [showButton, setShowButton] = useState(false);
  const [itemname, setItemname] = useState("");
  const [brand, setBrand] = useState("");
  const [serial, setSerial] = useState("");
  const [color, setColor] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [name, steName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const addNewItem = async (item) => {
    if (!itemname || !name || !serial || !phone) {
      alert("Items with a starisk (*) must be filled before submitting");
      remain();
      return;
    } else {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = {
        id,
        itemname,
        brand,
        serial,
        color,
        date,
        name,
        address,
      };
      const listItems = [...items, myNewItem];
      //setItems(listItems);
      onAdd(listItems);

      const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myNewItem),
      };
      const result = await apiRequest(url, postOptions);
      if (result) setFetchError(result);
    }
  };
  return (
    <div className="form-handler">
      <h1>ADD NEW ITEM</h1>
      <form onSubmit={addNewItem}>
        <div className="line">
          <FormControl className="item">
            <FormControlLabel>Item Name*</FormControlLabel>
            <Input
              type="Text"
              name="item"
              value={itemname}
              onChange={(e) => setItemname(e.target.value)}
            />
          </FormControl>
          <FormControl className="item">
            <FormControlLabel>Brand of the item</FormControlLabel>
            <Input
              placeholder="Brand Name"
              type="Text"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </FormControl>
          <FormControl className="item">
            <FormControlLabel>Serial Number*</FormControlLabel>
            <Input
              placeholder="Serial Number"
              type="Text"
              name="serial"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
            />
          </FormControl>
        </div>

        <div className="line">
          <FormControl className="item">
            <FormControlLabel>Color</FormControlLabel>
            <Input
              placeholder="e.g Red"
              type="Text"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </FormControl>
          <FormControl className="item">
            <FormControlLabel>Details</FormControlLabel>
            <Input
              placeholder="Describe the item"
              type="Text"
              name="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </FormControl>
          <FormControl className="item">
            <FormControlLabel>Date Added</FormControlLabel>
            <Input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormControl>
        </div>

        <hr />

        <h2>Poster's Details</h2>
        <div className="line">
          <FormControl className="item">
            <FormControlLabel>Full name*</FormControlLabel>
            <Input
              placeholder="e.g Micheal Walusimbi"
              type="Text"
              name="fullname"
              value={name}
              onChange={(e) => steName(e.target.value)}
            />
          </FormControl>
          <FormControl className="item">
            <FormControlLabel>Email</FormControlLabel>
            <Input
              placeholder="e.g micheal@gmail.com"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </div>
        <div className="line">
          <FormControl className="item">
            <FormControlLabel>Phone Number*</FormControlLabel>
            <Input
              placeholder="e.g +256701234567"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl className="item">
            <FormControlLabel>Address</FormControlLabel>
            <Input
              placeholder="Kampala"
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
        </div>
        <button className="btn">SUBMIT</button>
      </form>
    </div>
  );
};
