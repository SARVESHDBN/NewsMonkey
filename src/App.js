import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/navbar';
import News from './Components/news';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NewsItem from './Components/newsItem'


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";



export default class App extends Component {
  render() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Navbar/><News pageSize={6} country="in" category="general"/></>,
  //   },
  //   {
  //     path: "/business",
  //     element:<><Navbar/><News pageSize={6} country="in" category="business"/></>,
  //   },
  //   {
  //     path: "/entertainment",
  //     element: <><Navbar/><News pageSize={6} country="in" category="entertainment"/></>,
  //   },
  //   {
  //     path: "/general",
  //     element:  <><Navbar/><News pageSize={6} country="in" category="general"/></>,
  //   },
  //   {
  //     path: "/health",
  //     element: <><Navbar/><News pageSize={6} country="in" category="health"/></>,
  //   },
  //   {
  //     path: "/science",
  //     element: <><Navbar/><News pageSize={6} country="in" category="science"/></>,
  //   },
  //   {
  //     path: "/sports",
  //     element: <><Navbar/><News pageSize={6} country="in" category="sports"/></>,
  //   },
  //   {
  //     path: "/technology",
  //     element: <><Navbar/><News pageSize={6} country="in" category="technology"/></>,
  //   },
  // ]);


    return (
      
        // {/* <Navbar/> */}
        // {/* <RouterProvider router={router}/> */}
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={6} country="in" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route path="/general" element={<News key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/health" element={<News key="health" pageSize={6} country="in" category="health" />} />
            <Route path="/science" element={<News key="science" pageSize={6} country="in" category="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>  
    )
  }
}


// export default App;
