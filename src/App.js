import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [Selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={Selection} onChange={handleSelect} />
      <Dropdown options={options} value={Selection} onChange={handleSelect} />
    </div>
    
  );
}

export default App;
