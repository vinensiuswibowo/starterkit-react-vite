import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

interface Person {
  name: string;
  address: string;
  phone?: number;
}

export default function ArticleDetail({ school }: { school: string }) {
  const { name } = useParams();
  const [data, setData] = useState<Person>({ name: "", address: "" });
  const [lists, setLists] = useState([]);

  const doSubmit = (val: string | number) => {
    if (typeof val === "string") {
      console.log(val.toLowerCase());
    }
  };

  useEffect(() => {
    console.log("1");
  }, [school]);

  const memoFilteredData = useMemo(() => {
    return lists.filter((d) => !d);
  }, [lists]);

  return (
    <div>
      Detail ID : {name}
      <button onClick={(e) => doSubmit(12)}>submmit</button>
    </div>
  );
}
