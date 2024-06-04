import { useEffect } from "react";
import { Navbar, Main, Footer, Product, ModalWindow } from "../commons";
// import { Product } from "../components";
function Home() {
  useEffect(() => {
    fetch('/api/public/hello-world!')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  })
  return (
    <>
      <Navbar />
      <ModalWindow />
      <Main />
      <Product />
      <Footer />
    </>
  );
}

export default Home;
