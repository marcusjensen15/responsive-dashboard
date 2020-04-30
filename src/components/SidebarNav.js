import React from 'react';
import { Link } from 'react-router-dom';
import BackArrowImage from '../media/navigation_arrow_left.png';
import masterBusinessReportsList from '../constants/masterBusinessReportsList';
import masterABTestList from '../constants/masterABTestList';

import '../scss/_sidenav.scss';

function SidebarNav(){

  return (
    <div className='sidenav'>
       <div className='sidenav-links'>
        <Link to='/' className='nav-button' className='nav-button'><img src={BackArrowImage} alt="Back Arrow" className="left-arrow"></img>Dashboard</Link>

        <h3>Reports</h3>
        {masterBusinessReportsList.map((test, index) => (
          <Link to={test.lowerCamelCaseRouteTitle} className='nav-button'>{test.title}</Link>
        ))}

        <h3>A/B Tests</h3>
        {masterABTestList.map((test, index) => (
          <Link to={test.lowerCamelCaseRouteTitle} className='nav-button'>{test.title}</Link>
        ))}

      </div>

      
    </div>

  );
}

export default SidebarNav;
