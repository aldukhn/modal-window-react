import "./container.scss";
import App from "./components/App";
import Modal from "./components/Modal";
import "./btn.scss";
import "./modal.scss";
import { useState } from "react";
import Footer from "./components/Footer";

function Container() {
  const [store, setStore] = useState({
    modalProperty: {
      showModal: false,
      title: "Modal1",
      title1: "Modal1",
    },
    modalText: "IM A MODAL",
  });

  return (
    <>
      <App store={store} setStore={setStore} />
      <Modal store={store} setStore={setStore} />
      <Footer />
    </>
  );
}

export default Container;
