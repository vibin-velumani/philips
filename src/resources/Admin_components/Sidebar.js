import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {  NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Authentication';
export default function Sidebar() {
    const auth=useAuth()
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              BOSCH
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
            <NavLink exact to='/admin' activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to='addproduct' activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Add Products</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to='updateproduct' activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Update Products</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="addOffers" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Add Offers</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="addstaff" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Add Staff</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
              </NavLink>
  
              <NavLink to="/admin" onClick={auth.logout}   activeClassName="activeClicked">
                <CDBSidebarMenuItem icon='power-off'>Log Out</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              Team Alpha
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
