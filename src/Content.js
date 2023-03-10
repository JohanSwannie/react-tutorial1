import React, { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Jason");
  const [color, setColor] = useState("navy");
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);
  const [counter4, setCounter4] = useState(1);
  const [outputMessage, setOutputMessage] = useState("");

  const handleNameChange = () => {
    const names = [
      "Mary",
      "John",
      "Terry",
      "William",
      "Hannah",
      "Joe",
      "Andrew",
      "Sally",
      "David",
      "Elias",
      "Elizabeth",
      "Michelle",
    ];

    const nameIndex = Math.floor(Math.random() * 12);

    setName(names[nameIndex]);

    const bColors = [
      "crimson",
      "darkgreen",
      "black",
      "navy",
      "orange",
      "darkgray",
    ];

    const colorIndex = Math.floor(Math.random() * 6);

    setColor(bColors[colorIndex]);
  };

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
      <h3 style={{ color: `${color}` }}>This is the content of our page</h3>
      <br />
      <p>Hallo {name}</p>
      <br />
      <button onClick={handleNameChange}>Change Name</button>
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
