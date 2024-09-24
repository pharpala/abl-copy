import React from 'react';
import './Forms.css';
import Title from '../../components/Title/Title';

const Forms = () => {
  return (
    <div className="forms-container">
      <p>
        Groups interested in requesting a PDR from 
        CEPSSC can find the forms below. Meetings 
        are held weekly (holidays excluded) on 
        Microsoft Teams, email 
        <a href="mailto:cepsvpi@uoguelph.ca"> cepsvpi@uoguelph.ca </a> 
        for more details. Please refer to the CEPSSC 
        Board Meeting Schedule for when PDRs will be 
        accepted. PDR forms must be completed no later 
        than two days prior to the meeting at which 
        the request is to be presented.
      </p>
      <ul>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSd_WgNvmC8L5B4Fxuw3sCUmtzf4bleicmuqVefNuz5tXYG-ow/viewform" target="_blank" rel="noopener noreferrer">
            PDR Form</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2020/01/cepssc-budget-form-2020.pdf" target="_blank" rel="noopener noreferrer">
            PDR Budget Form</a></li>
        <li><a href=" https://forms.gle/2JGTypPSu9Hq6zko7" target="_blank" rel="noopener noreferrer">
            Reimbursement Form</a></li>
      </ul>

      <Title subtitle='' title='Board Meeting Minutes'/>
      <ul>
        <h3> 2023 - 2024 Minutes</h3>
        <li><a href="src/assets/meeting1.pdf" target="_blank" rel="noopener noreferrer">
            Agenda 1, September 16th</a></li>
            <li><a href="src/assets/meeting2.pdf" target="_blank" rel="noopener noreferrer">
            Agenda 2, September 23rd</a></li>
        <li><span>Agenda 3, October 7th</span></li>
        <li><span>Agenda 4, October 21st</span></li>
        <li><span>Agenda 5, November 4th</span></li>

      </ul>

      <Title subtitle='' title='Miscellaneous Documents'/>
      <ul>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2019/06/event-summary-form-.pdf" target="_blank" rel="noopener noreferrer">
        Event Summary Form</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/cpessc-meetings-guide.pdf" target="_blank" rel="noopener noreferrer">
        CEPSSC Meetings Guide</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2020/01/exec-position-descriptions.pdf" target="_blank" rel="noopener noreferrer">
        CEPSSC Exec Position Descriptions</a></li>
        <li><a href="src/assets/CEPSSC Constitution - Google Docs.pdf" target="_blank" rel="noopener noreferrer">
        The Official CEPSSC Constitution - Updated April 2021</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2019/08/sop-aso-form.pdf" target="_blank" rel="noopener noreferrer">
        CEPSSC Policy (SOP) for Accredited Student Organization (ASO) Form</a></li>
      </ul>

      <Title subtitle='' title='Student Risk Management'/>
      <ul>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-handbook.pdf" target="_blank" rel="noopener noreferrer">
        Bus Monitor Contract</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-handbook.pdf" target="_blank" rel="noopener noreferrer">
        Event Venue Monitor Contract</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-handbook.pdf" target="_blank" rel="noopener noreferrer">
        SRM Handbook</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-line-monitor-contract.pdf" target="_blank" rel="noopener noreferrer">
        Line Monitor Contract</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-one-way-bus-trip-waiver.pdf" target="_blank" rel="noopener noreferrer">
        One-Way Bus Trip Waiver</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-primary-organiser-contract.pdf" target="_blank" rel="noopener noreferrer">
        Primary Organizer Contract</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-event-planning-form.pdf" target="_blank" rel="noopener noreferrer">
        Event Planning Form</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2016/04/srm-guide.pdf" target="_blank" rel="noopener noreferrer">
        SRM Guide</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2020/01/cepssc-budget-form-2020.pdf" target="_blank" rel="noopener noreferrer">
        Incident Report Form</a></li>
        <li><a href="https://static1.squarespace.com/static/60d11d6af55fef17142cdc57/t/65512636dd6cd60d69ca25e7/1699817015105/CEPSSC+Board+Agenda+1++%281%29.pdf" target="_blank" rel="noopener noreferrer">
        On-Site Food Preparation Form</a></li>
        <li><a href="https://cpesscdotcom.wordpress.com/wp-content/uploads/2020/01/cepssc-budget-form-2020.pdf" target="_blank" rel="noopener noreferrer">
        Physical Activity of Overnight Waiver</a></li>
        <li><a href="https://static1.squarespace.com/static/60d11d6af55fef17142cdc57/t/65512636dd6cd60d69ca25e7/1699817015105/CEPSSC+Board+Agenda+1++%281%29.pdf" target="_blank" rel="noopener noreferrer">
        Risky Event Waivers</a></li>
      </ul>

      <Title subtitle='' title='Our Constitution'/>
      <p className='spacer'>
      Below is CEPSSC’s official constitution.
      To download the document, please click 
      the button.
      </p>
      <a href="src/assets/CEPSSC Constitution - Google Docs.pdf" download className='btn dark-btn'>
        View Document
      </a>
    </div>
  );
}

export default Forms;
