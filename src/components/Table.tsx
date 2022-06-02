import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { formState } from "../atoms/formDataState";

export default function Table({ set }: any) {
  const [data, setData] = useRecoilState(formState);
  const location = useLocation();
  let navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const s = params.get("s");

  return (
    <div>
      <h1>Table</h1>
      <input onChange={(e) => navigate("/?s=" + e.target.value)} />
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>age</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((d) => (s ? d.name.includes(s) : true))
            .map((d) => (
              <tr key={d.id}>
                <td>{d.name}</td>
                <td>{d.age}</td>
                <td>
                  <button onClick={() => set(d)}>edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setData((p) => p.filter((dd) => dd.id !== d.id));
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
