import { Layout } from "./Components/Layout/Layout";
import { Routes } from "./Routes/Routes";
import { CallToAction } from "./Components/CallToAction/CallToAction";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import  Cart  from "./Components/Cart/Cart";
export function App() {
  return (
    <Layout>
      <Navbar />
      <Cart />
      <Routes />
      <Footer />
      <CallToAction />
    </Layout>
  );
}

export default App;
