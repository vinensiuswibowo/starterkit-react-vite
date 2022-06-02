import { NavLink } from "react-router-dom";
import Table from "../components/Table";
import Form from "../components/Form";
import { useState } from "react";

export default function HomePage() {
  const [data, set] = useState({
    name: "",
    age: "",
    id: "",
  });
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/article">Article</NavLink>
      <br />
      <br />
      <Form data={data} />
      <Table set={set} />
    </div>
  );
}
