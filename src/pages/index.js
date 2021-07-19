
import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../utils/login";

export function Index() {
    const msg = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <div> {msg}</div>
    </div>
  );