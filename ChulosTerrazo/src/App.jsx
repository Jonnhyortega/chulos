import { Layout } from "./Components/Layout/Layout";
import { Routes } from "./Routes/Routes";
import { CallToAction } from "./Components/CallToAction/CallToAction";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";

export function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
      <Footer />
      <CallToAction />
    </Layout>
  );
}

export default App;
