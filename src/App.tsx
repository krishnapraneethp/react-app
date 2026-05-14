import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Hyderabad", "Bengaluru", "Mumbai", "Pune", "Chennai"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
