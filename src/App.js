import { useState } from "react";
import "./styles.css";
import { useCopyToClipboard } from "./useCopyToClipboard";

export default function App() {
  const [copiedData, copy] = useCopyToClipboard();
  const [msg, setMsg] = useState(null);

  const onClickCopy = async () => {
    const check = await copy("my copied data");
    console.log(check);
    if (check) {
      setMsg("Copied Successfully!yay");
    } else setMsg("Failed to copy :(");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={onClickCopy}>Copy</button>
      {msg}
      <div>{copiedData && copiedData}</div>
    </div>
  );
}
