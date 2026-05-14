import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [isAlertVisible, setAlertVisible] = useState(false);
  return (
    <>
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        Popup Alert
      </Button>
      {isAlertVisible && (
        <Alert
          onClose={() => {
            setAlertVisible(false);
          }}
        ></Alert>
      )}
    </>
  );
}

export default App;
