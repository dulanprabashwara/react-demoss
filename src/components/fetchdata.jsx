import React, { useEffect, useState } from "react";
import useeffect from "./useeffect";

const [data, setData] = useState([]);
const fetchdata = () => {
  useEffect(() => {
    async function getdata() {
      const response = await fetch("url");
      const data = await response.json();
      if (data && data.length) setData(data);
    }
  }, []);
  return (
    <div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default fetchdata;
