import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./UI/Header/Header";
import Modal from "./components/Modal/Modal";
import ProfilesList from "./components/ProfileCard/ProfilesList";
import { isModalVisibleSelector } from "../src/redux/selectors";
import { toggleModal } from "./redux/modalSlice";
const App = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(isModalVisibleSelector);

  const modalToggleHandler = () => {
    dispatch(toggleModal());
  };

  return (
    <div>
      <Header openModal={modalToggleHandler} />
      {isModalVisible && <Modal closeModal={modalToggleHandler} />}
      {!isModalVisible && <ProfilesList />}
    </div>
  );
};

export default App;
