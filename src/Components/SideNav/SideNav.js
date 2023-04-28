import React, { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Navigate } from 'react-router-dom';


function SideNav({ open }) {
  // const dispat=useDispatch() 
  // const titlechange=(value)=>{ 
  //   dispat(titles(value)) 

  return (
    <div>
      <aside id="sidebar" className={open ? 'sidebar collapse' : 'sidebar'}>
        <ul className="nav flex-column" id="sidebar-nav">

          <li className="nav-item">
            <a className="nav-link" aria-current="page">
              <span><i class="bi bi-house-add"></i>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page">
              <i class="bi bi-boxes"></i><span>Inventory</span>
              <NavDropdown
                id="navbarScrollingDropdown"
                className="bold">
                <NavDropdown.Item href="#action3" onClick={() => {
                  Navigate("/Dropveg")
                }}>
                  <i class="bi bi-cloud-plus-fill"></i>Add New</NavDropdown.Item>
                <NavDropdown.Item href="#action3" onClick={() => {
                  Navigate("/Dropveg")
                }}>
                  <i class="bi bi-card-list"></i>Inventory List</NavDropdown.Item>
              </NavDropdown>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page">
            <i class="bi bi-currency-dollar"></i><span>Sales</span>
              <NavDropdown
                id="navbarScrollingDropdown"
                className="bold">
                <NavDropdown.Item href="#action3" onClick={() => {
                  Navigate("/Dropveg")
                }}>
                  <i class="bi bi-cart-plus"></i>New Outgoing Stock</NavDropdown.Item>
                <NavDropdown.Item href="#action3" onClick={() => {
                  Navigate("/Dropveg")
                }}>
                  <i class="bi bi-card-list"></i>Sales Orders</NavDropdown.Item>
              </NavDropdown>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page">
              <i class="bi bi-boxes"></i><span>Supplier</span>
              <NavDropdown
                id="navbarScrollingDropdown"
                className="bold">
                <NavDropdown.Item href="#action3" onClick={() => {
                  Navigate("/Dropveg")
                }}>
                  <i class="bi bi-cloud-plus-fill"></i>Add New Supplier</NavDropdown.Item>
                <NavDropdown.Item href="#action3" onClick={() => {
                  Navigate("/Dropveg")
                }}>
                  <i class="bi bi-card-list"></i>Suppliers List</NavDropdown.Item>
              </NavDropdown>
            </a>
          </li>
        </ul>
      </aside>
    </div >
  )
}
export default SideNav



// import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';
// import { Dropdown, DropdownButton } from 'react-bootstrap';

// const SideNav = () => {
//   return (
//     <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
//       <CDBSidebar textColor="#fff" backgroundColor="#333">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//             Sidebar
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
//             </NavLink>

//             {/* <DropdownButton icon="box" title="Inventory">
//               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </DropdownButton> */}
//             <Dropdown>

//               <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Dropdown Button
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">Add New</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Inventory list</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             <NavLink exact to="/LandingPage" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="box">

//               </CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/profile" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/analytics" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
//             </NavLink>

//             <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             style={{
//               padding: '20px 5px',
//             }}
//           >
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// };

// export default SideNav;