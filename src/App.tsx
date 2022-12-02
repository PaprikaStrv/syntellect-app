import React from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { ControlAutoComplete } from "./components/ControlAutoComplete/ControlAutoComplete";
import { ControlWithButtons } from "./components/ControlWithButtons/ControlWithButtons";
import controllStore from "./stores/controll-store";

function App() {
  return (
    <>
      {/* Контрол с 2 кнопками справа; */}
      {/* <ControlWithButtons
        leftButtonsParams={[]}
        rightButtonsParams={[ {buttonText: 'Right1', callback: () => controllStore.onValueChanged('')},
        {buttonText: 'Right2', callback: () => controllStore.onValueChanged('Hello World')},]}
      /> */}

      {/* Контрол с 1 кнопкой справа и 1 кнопкой слева; */}
      {/* <ControlWithButtons
        leftButtonsParams={[
          {
            buttonText: "Left1",
            callback: () => controllStore.callAllertIfNumber(),
          },
        ]}
        rightButtonsParams={[
          {
            buttonText: "Right1",
            callback: () => controllStore.callAllertWithCurrentValue(),
          },
        ]}
      /> */}

      {/* Контрол-автокомплит  Максимальное кол-во подсказок - 3*/}
      <ControlAutoComplete maxHelps={3} />

      {/* Контрол-автокомплит  Максимальное кол-во подсказок - 10*/}
      {/* <ControlAutoComplete maxHelps={10}/> */}
    </>
  );
}

export default App;
