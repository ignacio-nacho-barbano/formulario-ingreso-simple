import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Text from "./Text";
import EmptyState from "./EmptyState";

function App() {
  const [textoGuardado, setTextoGuardado] = useState("");

  return (
    <>
      <h1>Ejemplo de formulario</h1>
      <Form onSubmit={setTextoGuardado} />
      {!textoGuardado ? (
        <EmptyState />
      ) : (
        <>
          <Text texto={textoGuardado} />
          <button onClick={() => setTextoGuardado("")}>Reset</button>
        </>
      )}
    </>
  );
}

export default App;
