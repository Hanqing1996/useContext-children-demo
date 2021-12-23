import { useState } from "react";

export default function ({ children }) {
  const [name, setName] = useState("");
  return (
    <div>
      {" "}
      <button onClick={() => setName("libai")}>update</button> {children}-{name}
    </div>
  );
}
