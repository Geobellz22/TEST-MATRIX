// src/components/CompanyProfile.js

import React from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './CompanyProfile.css';

const CompanyProfile = () => {
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="company-profile">
      <header>
        <h1>ABOUT US</h1>
      </header>
      <div className="profile-content">
        <p>A leading investor and trusted partner for alternative assets. We create sustainable value for our clients and society.</p>
        <p>MatrixMomentum is an award-winning forex and stock broker, providing automated trading services and facilities to both retail and institutional clients. Through its policy of providing the best possible automated trading conditions to its clients and allowing both full-time and part-time investors automation for crypto trading, MatrixMomentum is the leading crypto trading bot for Binance, Coinbase Pro, Bitmex, and more. Easy to use, self-hosted trading bot software.</p>
        <p>Due to their long investment horizon and attractive risk/return profile, our alternative investments are an ideal match for the requirements of MatrixMomentum given our long-term liabilities.</p>
        <p>Investment management is an integral part of the insurance business, as the premiums of MatrixMomentum clients are invested to meet long-term liabilities. MatrixMomentum's worldwide investment activities comprise assets of over EUR 750 billion across a range of asset classes, sectors, and countries. As a result, MatrixMomentum is directly and indirectly connected with other businesses, sectors, and economies, and is therefore an integral part of the global economy. ACP as MatrixMomentum's captive investment manager for alternative assets strives to invest sustainably across our three asset classes. In order to keep up with our ambition, we incorporate Environmental, Social, and Governance (ESG) factors into our investment processes, for example through our exclusion policy, research, corporate and country analysis, monitoring, and risk management. We firmly believe that considering ESG factors in investment management is not a short-term trend, but will change the business.</p>
        <p>ACP is committed to the United Nations Principles for Responsible Investment (UN PRI). Our parent company, MatrixMomentum Investors, is a signatory to the UN PRI, and so in addition to integrating ESG principles in our investment process, we also incorporate these into our ownership policies and practices and aim for appropriate disclosure on ESG issues by the entities in which we invest. Moreover, we strive to enhance the implementation effectiveness of the principles and regularly report on our activities and progress of implementation. Our commitment covers all assets we invest in.</p>

        {/* <div className="pdf-section">
          <h2>Downloadable PDFs</h2>
          <ul>
            <li><a href="/income_miners_spanish.pdf" download>Income Miners Spanish PDF</a></li>
            <li><a href="/income_miners.pdf" download>Income Miners PDF</a></li>
            <li><a href="/income_miners_persia.pdf" download>Income Miners Persian PDF</a></li>
          </ul>
          <div className="pdf-viewer">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
              <Viewer fileUrl="/income_miners_spanish.pdf" plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CompanyProfile;
