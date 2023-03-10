import React, { useState } from "react";

const Content = () => {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);
  const [counter4, setCounter4] = useState(1);
  const [outputMessage, setOutputMessage] = useState("");

  const handleClick1 = () => {
    setOutputMessage(
      `You have double clicked on the paragraph ${counter1} times`
    );
    setCounter1(counter1 + 1);
  };

  const handleClick2 = () => {
    setOutputMessage(`You have clicked on button one ${counter2} times`);
    setCounter2(counter2 + 1);
  };

  const handleClick3 = (name) => {
    setOutputMessage(`You have clicked on "${name}" ${counter3} times`);
    setCounter3(counter3 + 1);
  };

  const handleClick4 = (event) => {
    setOutputMessage(
      `Clicked ${counter4} times and the event is ${event.target.innerText}`
    );
    setCounter4(counter4 + 1);
  };

  return (
    <main>
      <h4>This is the content of our page</h4>
      <br />
      <p onDoubleClick={handleClick1}>Double Click Paragraph 1</p>
      <br />
      <button onClick={handleClick2}>Click Button 1</button>
      <br />
      <button onClick={() => handleClick3("React is wonderful")}>
        Click Button 2
      </button>
      <br />
      <button onClick={(event) => handleClick4(event)}>Click Button 3</button>
      <br />
      <p>{outputMessage}</p>
    </main>
  );
};

export default Content;
