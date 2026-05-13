import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Hyderabad", "Bengaluru", "Mumbai", "Pune", "Chennai"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
