import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import qs from "qs";
import useSWR from "swr";
import withProtectedPage from "../../components/ProtectedPage";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    return res.json();
  });

const fetcher2 = (url: string) => axios.get(url).then((res) => res.data);

function ArticlePage() {
  const location: any = useLocation();
  // const params = new URLSearchParams(location.search);
  // const [page, setPage] = useState(
  //   params.get("a") ? Number(params.get("a")) : 0
  // );
  let navigate = useNavigate();
  const { data, error, mutate } = useSWR("/data/test.json", fetcher2);

  // useEffect(() => {
  //   if (page > 0) {
  //     navigate(`/article/?a=${page}`);
  //   }
  // }, [page]);

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (!data && error) {
    return <div>Error</div>;
  }
  const params = qs.stringify(
    {
      a: 1,
      b: 2,
      c: 3,
    },
    {
      addQueryPrefix: true,
    }
  );
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/article">Article</NavLink>
      <br />
      <button
        onClick={() => {
          navigate(`/article/${params}`);
        }}
      >
        next page
      </button>
      <button
        onClick={() =>
          console.log(qs.parse(location.search, { ignoreQueryPrefix: true }))
        }
      >
        read
      </button>
      <br />
    </>
  );
}

export default ArticlePage;
