import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { formState } from "../atoms/formDataState";

export default function Form({ data: newData }: any) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    id: 0,
  });

  useEffect(() => {
    setFormData(newData);
  }, [newData]);

  const [data, setData] = useRecoilState(formState);
  return (
    <div>
      <h1>Form</h1>
      <label>name</label>
      <input
        value={formData.name}
        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
      />
      <label>age</label>
      <input
        value={formData.age}
        onChange={(e) => setFormData((p) => ({ ...p, age: e.target.value }))}
      />
      <button
        onClick={() => {
          if (formData.id) {
            setData((p) => [
              ...p.map((d) => {
                if (d.id === formData.id) {
                  return formData;
                }
                return d;
              }),
            ]);

            return;
          }
          setData((p) => [...p, { ...formData, id: p.length + 1 }]);
        }}
      >
        {formData.id ? "Edit" : "Add"}
      </button>
    </div>
  );
}
