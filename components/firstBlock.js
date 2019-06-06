import React, { Component } from 'react';

const LeftBlock = () => (
    <React.Fragment>    
        <h1 style={{ color: 'white', marginBottom: 0}} className="animated fadeInUp delay-1s">
            Crafting Innovative Mobile and Software Solutions
        </h1>
        <h4 style={{ color: 'white', marginTop: 5}} className="animated fadeInUp delay-1s">
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
        <button className="btn-cp animated swing delay-2s" style={{ marginTop: 10 }}>
            INQUIRE NOW
        </button> 
    </React.Fragment>
);

const RightBlock = () => (
    <img 
        className="animated fadeInRight delay-1s"
        src="/static/images/svg/banner_img_right.svg"
        alt="Code Prism Fisrt Banner"
        style={{ minHeight: 400, height: 'calc(100vh - 150px)'}}
    />
);

const firstBlock = {
    background: '#1b1c1d',
    height: '100vh', 
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%'
};

const textBlock = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 'calc(100vh - 64px)',
    marginTop: '64px'
};

const imageBlock = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 'calc(100vh - 64px)',
    marginTop: '64px'
};

const FirstCombo = () => (
   <div style={firstBlock}>
       <div style={textBlock}>
            <LeftBlock />
       </div>
        <div style={imageBlock}>
            <RightBlock />
       </div>
   </div>
)

export default FirstCombo;