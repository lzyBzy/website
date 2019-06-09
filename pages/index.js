// import './index.scss';
import Header from '../components/header';
import FirstBlock from '../components/firstBlock';
import SecondBlock from '../components/secondBlock';
// import ThirdBlock from '../components/thirdBlock';
// import '../semantic/dist/semantic.css';
import 'animate.css/animate.css';
import Layout from '../components/layout'



const Index = () => (
  <Layout>
    <div>
      <Header />
      <FirstBlock />
      <SecondBlock />
    </div>
  </Layout>
);
  
export default Index;