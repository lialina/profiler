import React, { useState } from "react";
import Header from "./UI/Header/Header";
import Modal from "./components/Modal/Modal";
import ProfilesList from "./components/ProfileCard/ProfilesList";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalToggleHandler = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <Header openModal={modalToggleHandler} />
      {isModalVisible && <Modal closeModal={modalToggleHandler} />}
      {!isModalVisible && <ProfilesList></ProfilesList>}
    </div>
  );
};

export default App;
