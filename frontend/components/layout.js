import Nav from './nav'
import AppContext from "../context/AppContext";
import React, { useContext } from "react";


const Layout = ({ children, categories, seo }) => {
  const { user, setUser } = useContext(AppContext);
  return (
  <>
    <Nav categories={categories} />
    {children}
  </>
  )
};

export default Layout
