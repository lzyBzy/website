import React, { Component } from 'react';
import Index from '../pages';

const secondBlockBackGround = {
    backgroundImage: 'url("/static/images/svg/wave_smaller.svg")',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: '50%',
    backgroundColor: '#1b1c1d',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '750px',
}
  
const clip_block = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '1200px',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url("/static/images/png/block3_bg.png")',
    backgroundPosition: '50% -8%',
    zIndex: 3
}

const mobile_block = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '750px',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url("/static/images/png/sample_mobile_app.png")',
    backgroundPosition: '0 100%',
    zIndex: 2
}

const third_block = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: '650px',
    zIndex: 3,
    position: 'absolute',
    marginTop: '750px',
    width: '100%', 
    paddingLeft: '5%',
    paddingRight: '5%',
};

const SecondBlockHeader = () => (
    <React.Fragment>    
        <h1 style={{ zIndex: 0, width: '35%', paddingRight: '5%', marginLeft: '60%', color: 'white', marginBottom: 0, textAlign: 'right'}} >
            React Native App Development
        </h1>
        <h4 style={{ width: '35%', paddingRight: '5%', marginLeft: '60%',  color: 'white', marginTop: 5, textAlign: 'right'}} >
            Stunning and high functionality app for your business using react native development
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
            height: 40px
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
        <div style={{ width: '35%', paddingRight: '5%', marginLeft: '60%', color: 'white', marginBottom: 0, textAlign: 'right'}}>
            <button className="btn-cp wow swing" style={{ marginTop: 10 }}>
                View Work
            </button> 
        </div>
    </React.Fragment>
)

const TechStack = () => (
    <div textAlign="center" style={{ marginLeft: '50%', width: '50%', marginRight: 30, display: 'flex', flexDirection: 'row' }}>      
        <div className="wow fadeInUp" style={{  height: 150, padding: 0, width: 180, textAlign:'center' }}>
            <img src="/static/images/png/logo_react.png"  style={{ background: 'white', padding: 6, height: 70, width: 70, borderRadius: 45  }} />
            <h3 style={{ color: 'white'}}>
                React Native
            </h3>
        </div>
        <div className="wow fadeInUp" style={{  height: 150, padding: 0, width: 180, textAlign:'center' }}>
            <img src="/static/images/png/flutter.png"  style={{ background: 'white', padding: 6, height: 70, width: 70, borderRadius: 45  }} />
            <h3 style={{ color: 'white'}}>
                Flutter
            </h3>
        </div>
        <div className="wow fadeInUp " style={{  height: 150, padding: 0, width: 180, textAlign:'center' }}>
            <img src="/static/images/png/android.png"  style={{ background: 'white', padding: 6, height: 70, width: 70, borderRadius: 45  }} />
            <h3 style={{ color: 'white'}}>
                Android
            </h3>
        </div>
        <div className="wow fadeInUp " style={{  height: 150, padding: 0, width: 180, textAlign:'center' }}>
            <img src="/static/images/png/swift.png"  style={{ background: 'white', padding: 6, height: 70, width: 70, borderRadius: 45  }} />
            <h3 style={{ color: 'white'}}>
                Swift
            </h3>
        </div>
    </div>
);

const ThirdBlockHeader = () => (
    <React.Fragment>    
        <h1 style={{ paddingLeft: '5%', color: 'grey', marginBottom: 0, textAlign: 'left'}} >
            Angular & ReactJS Development
        </h1>
        <h4 style={{ paddingLeft: '5%', color: 'grey', marginBottom: 0, textAlign: 'left'}} >
            Let your interactive UI Design and highly-engaging applications do the talking.
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
            height: 40px
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
        <div style={{ paddingLeft: '5%', color: 'grey', marginBottom: 0, textAlign: 'left'}}>
            <button className="btn-cp wow swing" style={{ marginTop: 10 }}>
                View Work
            </button> 
        </div>
    </React.Fragment>
)

const SecondBlock = () => (
    <div style={{ position: 'relative', height: 1000}}>
        <div style={secondBlockBackGround}></div>
        <div style={mobile_block}></div>
        <div style={{ width: '100%', height: 300, position: 'absolute' }} className="wow fadeInUp" >
            <SecondBlockHeader />
        </div>
        <div style={{ width: '100%', height: 450, textAlign: 'right', position: 'absolute', marginTop: 300 }}>
            <TechStack  />
        </div>
        <div style={clip_block}></div>
        <div style={third_block}>
            <div style={{ width: '30%', textAlign: 'left'}} className="wow fadeInRight">
                <ThirdBlockHeader />
            </div>
            <div style={{ width: '70%', textAlign: 'right'}}>
              <img src="/static/images/png/iMac_frame.png" style={{ width: '90%' }}/>
            </div>
        </div>
    </div>
)

export default SecondBlock;