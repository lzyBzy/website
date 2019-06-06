
const headerStyle = {
    height: '64px',
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
    alignItems: 'center'
};



const Header = () => (
    <div style={headerStyle}>
        <div >
            <img src="/static/images/svg/logo_code_prism.svg" alt="Code prism" style={{ width: 180, height: 50 }}/>
        </div>
        <div />

    </div>
  );
  
export default Header;