import React, { useState } from "react";
import Header from "./UI/Header/Header";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalToggleHandler = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <Header openModal={modalToggleHandler} />
      {isModalVisible && <Modal closeModal={modalToggleHandler} />}
    </div>
  );
};

export default App;
