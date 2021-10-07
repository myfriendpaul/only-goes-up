import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Search from "../screens/Search";

export default function MainContainer() {
  return (
    <div>
      <Route to="/search">
        <Search />
      </Route>
    </div>
  );
}
