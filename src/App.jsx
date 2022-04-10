import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./UI/Header/Header";
import Modal from "./components/Modal/Modal";
import ProfilesList from "./components/ProfileCard/ProfilesList";
import { isModalVisibleSelector } from "../src/redux/selectors";
import { openModal, closeModal } from "./redux/modalSlice";

const App = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector(isModalVisibleSelector);

  return (
    <div>
      <Header openModal={() => dispatch(openModal())} />
      {isModalVisible && <Modal closeModal={() => dispatch(closeModal())} />}
      {!isModalVisible && <ProfilesList />}
    </div>
  );
};

export default App;
