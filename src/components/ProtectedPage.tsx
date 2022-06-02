import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";

export default function withProtectedPage(WrappedComponent: any) {
  return function WithProtectedPage() {
    const [cookie, setCookie] = useState(false);
    if (!cookie) {
      return <Navigate to="/not-found" />;
    }
    return <WrappedComponent />;
  };
}
