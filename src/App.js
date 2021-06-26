import { useState } from "react";
import {
  Container,
  InputNumber,
  ContainerButton,
  Count,
  Button,
} from "./style";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  const [edit, setEdit] = useState(false);

 

  return (
    <Container>
      <Count onClick={() =>setEdit(true)}>
        {!edit ? (
          count
        ) : (
          <InputNumber
            onChange={(e) => {
              setInput(Number(e.target.value));
              }}
              onKeyDown={(key) => {
                if ( key.key === "Enter" || key.key === "Escape") {
                  setEdit(false);
                }
              }}
            autoFocus
            type="number"
            value={input}
          />
        )}
      </Count>

      <ContainerButton>
        <Button
          onClick={() => {
            setEdit(false);
            setCount(count + input);
          }}
          add
        >
          Adicionar
        </Button>
        <Button
          onClick={() => {
            setEdit(false);
            setCount(count - input);
          }}
          remove
        >
          Reduzir
        </Button>
        <Button
          onClick={() => {
            setEdit(false);
            setCount(0);
          }}
          reset
        >
          Resetar
        </Button>
      </ContainerButton>
    </Container>
  );
}

export default App;
