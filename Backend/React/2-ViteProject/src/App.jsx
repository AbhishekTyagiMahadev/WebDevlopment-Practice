import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card';

function App() {

  return (
    <>
    <div className="body">
      <Navbar/>
      <div className="main">
          <Card title="Abhishek Tyagi" desc="This is description"/>
          <Card title="Vivek Kumar" desc="This is another description"/>
          <Card title="Aditya Puri" desc="This is third description"/>
          <Card title="Abhishek Tyagi" desc="This is description"/>
          <Card title="Vivek Kumar" desc="This is another description"/>
          <Card title="Aditya Puri" desc="This is third description"/>
          <Card title="Abhishek Tyagi" desc="This is description"/>
          <Card title="Vivek Kumar" desc="This is another description"/>
          <Card title="Aditya Puri" desc="This is third description"/>
          <Card title="Abhishek Tyagi" desc="This is description"/>
          <Card title="Vivek Kumar" desc="This is another description"/>
          <Card title="Aditya Puri" desc="This is third description"/>
          <Card title="Abhishek Tyagi" desc="This is description"/>
          <Card title="Vivek Kumar" desc="This is another description"/>
          <Card title="Aditya Puri" desc="This is third description"/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
