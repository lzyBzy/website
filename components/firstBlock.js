import React, { Component } from 'react';
import CanvasBlock from '../components/matrix';

const LeftBlock = () => (
    <React.Fragment>    
        <h1 style={{ color: 'white', marginBottom: 0, zIndex: 2}} className="animated fadeInUp delay-1s">
            Crafting Innovative Mobile and Software Solutions
        </h1>
        <h4 style={{ color: 'white', marginTop: 5, zIndex: 2}} className="animated fadeInUp delay-1s">
            for startups & enterprise that hogs the limelight.
        </h4>
        <style global jsx>{`
        .btn-cp{
            position: relative;
            z-index: 0;
            background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
            color: white;
            font-family: Segoe UI;
            font-weight: 500;
            border: 2px solid white;
            border-radius: 25px;
            outline: none;
            padding: 5px 35px;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all .4s;
            outline: none !important;
            height: 40px;
          }
          
          .btn-cp::after{
            content: "";
            width: 100%;
            height: 100%;
            left: 2px;
            top: 4px;
            position: absolute;
            background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
            border-radius: 25px;
            outline: none;
            filter: blur(6px);
            z-index: -1;
            opacity: .5;
            transition: all .4s;
          }
          
          .btn-cp:hover{
            transform: translateY(-.2rem);
          }
          .btn-cp:hover::after{
            opacity: 1;
            left: 0;
            top: 0;
            filter: blur(10px);
          }
      `}</style>
        <button className="btn-cp animated swing delay-2s" style={{ marginTop: 10, zIndex: 2 }}>
            INQUIRE NOW
        </button> 
    </React.Fragment>
);

const RightBlock = () => (
    <img 
        className="animated fadeInRight delay-1s"
        src="/static/images/svg/banner_img_right.svg"
        alt="Code Prism Fisrt Banner"
        style={{ minHeight: 400, height: 'calc(100vh - 150px)', zIndex: 2}}
    />
);

const firstBlock = {
    background: '#1b1c1d',
    height: '100vh', 
    display: 'flex',
    flexDirection: 'row',
    width: 'calc(100vw - 20px)'
};

const textBlock = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 'calc(100vh - 70px)',
    paddingLeft: '5%',
    marginTop: '70px'
};

const imageBlock = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 'calc(100vh - 70px)',
    marginTop: '70px',
    paddingRight: '5%',
};

const FirstCombo = () => (
   <div style={firstBlock} >
       <div style={{ position: 'absolute'}}>
            <CanvasBlock />
       </div>
       <style global jsx>{`
         #overlay {
            position: absolute; /* Sit on top of the page content */
            display: block; /* Hidden by default */
            width: 100%; /* Full width (cover the whole page) */
            height: 'calc(100vh - 50px)'; /* Full height (cover the whole page) */
            top: 0; 
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(closest-side, rgba(0,0,0,0.5) , #1b1c1d);
            z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
            cursor: pointer; /* Add a pointer on hover */
            display: block;
          }
        `}
        </style>
       <div id="overlay" style={{ height: '100vh' }}></div>
       <div style={textBlock}>
            <LeftBlock />
       </div>
        <div style={imageBlock}>
            <RightBlock />
       </div>
   </div>
)

export default FirstCombo;