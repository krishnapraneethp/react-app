import Button from "./components/Button";

function App() {
  return (
    <Button color="primary" onClick={() => console.log("Clicked")}>
      My New Button
    </Button>
  );
}

export default App;
