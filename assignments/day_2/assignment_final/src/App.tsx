import { Header } from "./components/header/Header.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import { Form } from "./components/form/Form.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
