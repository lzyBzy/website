import React, { Component } from 'react';
export const GLOBAL_WINDOW = (typeof self === 'object' && self.self === self && self) || (typeof global === 'object' && global.global === global && global) || this;

const headerStyle = {
    height: '70px',
    // borderBottom: '1px solid #454545',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    //boxShadow: '0 2px 5px 0 rgba(0,0,0,.3)',
    background: 'transparent',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'space-between',
    alignItems: 'center',
    width: '100%'
};

const scrolledHeaderStyle = {
    height: '70px',
    borderBottom: '1px solid #454545',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.3)',
    background: '#1b1c1d',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'space-between',
    alignItems: 'center',
    width: '100%'
};

const leftMenu = {
    width: '30%',
}

const rightMenu = {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'right',
    marginRight: '20px',
    height: '64px'
}


class Header extends React.Component {

    state = {
        crossed: false
    }


    handleScroll = () => {
        const offset = 50;    
        const windowsScrollTop = window.pageYOffset;
        let { crossed } = this.state;
        if (windowsScrollTop > offset){     
            crossed = true;
        } else {
            crossed = false;   
        }

        console.log("CROSSED", window.pageYOffset);
        console.log("CROSSED--1", crossed);

        // if(window.scrollTop() > 100) {
        //     crossed = true;
        // } else {
        //     //remove the background property so it comes transparent again (defined in your css)
        //    crossed = false;
        // }
        this.setState({
            crossed
        });

       
            
        
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { crossed } = this.state;
        console.log("CROSSED", crossed);
        return (
            <div style={crossed ? scrolledHeaderStyle : headerStyle}>
                <div style={leftMenu}>
                    <img src="/static/images/svg/logo_code_prism.svg" alt="Code prism" style={{ width: 250, height: 60, marginTop: 10 }}/>
                </div>
                <style global jsx>{`
                    .header-btn-cp{
                        position: relative;
                        z-index: 0;
                        background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
                        color: white;
                        font-family: Segoe UI;
                        font-weight: 500;
                        border: 2px solid white;
                        border-radius: 25px;
                        outline: none;
                        padding: 5px 20px;
                        letter-spacing: 1px;
                        cursor: pointer;
                        transition: all .4s;
                        outline: none !important;
                        height: 30px;
                    }
                    
                    .header-btn-cp::after{
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
                    
                    .header-btn-cp:hover{
                        transform: translateY(-.2rem);
                    }
                    .header-btn-cp:hover::after{
                        opacity: 1;
                        left: 0;
                        top: 0;
                        filter: blur(10px);
                    }
                    .menu-item {
                        color: white;
                        padding-left: 10px;
                        padding-right: 10px;
                        font-size: 12px;
                    }

                    .menu-item:hover {
                        transform: translateY(-.2rem);
                    }
                `}</style>
                <div style={rightMenu}>
                    <span className="menu-item">
                        SERVICES
                    </span>
                    <span className="menu-item">
                        SOLUTIONS
                    </span>
                    <span className="menu-item">
                        PORTFOLIO
                    </span>
                    <span className="menu-item">
                        COMPANY
                    </span>
                    <span className="menu-item">
                        BLOG
                    </span>
                    <div className="menu-item">
                        <button className="header-btn-cp" style={{ marginTop: 10 }}>
                            Contact Us
                        </button> 
                    </div>
                </div >
            </div>
        );
    }
}
  
export default Header;