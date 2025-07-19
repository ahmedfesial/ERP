import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function TitlePage() {

  
  const location =useLocation();
  
  useEffect(()=>{
    const path = location.pathname;

    const pageTitles ={
        '/' : "Dashboard",
        "/Warehouse" : "Warehouse",
        "/Sales" : "Sales",
        "/Finance" : "Finance",
        "/HumanResources" : "HumanResources"
    };

    const pageTitle = pageTitles[path];

    document.title = pageTitle

  },[location.pathname])


  return null;
}
