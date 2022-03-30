import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./UI/Header/Header";
import Modal from "./components/Modal/Modal";
import ProfilesList from "./components/ProfileCard/ProfilesList";
import * as selectors from "../src/redux/selectors";
import { toggleModal } from "./redux/modalSlice";
const App = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectors.isModalVisible);

  const modalToggleHandler = () => {
    dispatch(toggleModal());
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
