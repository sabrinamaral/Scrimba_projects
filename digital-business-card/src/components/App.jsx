import About from "./About";
import Info from "./Info";
import Interests from "./Interests";
import Footer from "./Footer";

export default function App() {
  console.log(`hrf: ${window.location.href}`);

  return (
    <main>
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  );
}
