import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { TOKEN } from "./pages/Main";

function Protected({ component }) {
  if (localStorage.getItem(TOKEN)) {
    return <>{component}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default Protected;
