import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["Hyderabad", "Bengaluru", "Mumbai", "Pune"];
  const handleClick = (item: string) => console.log(item);
  return (
    <ListGroup items={cities} heading="Cities" onSelectedItem={handleClick} />
  );
}

export default App;
