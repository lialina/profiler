import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { StyledProfileItem, StyledProfileInfo } from "./ProfileStyles";
import StyledButton from "../Button/StyledButton";
import { StyledModalButton } from "../Modal/ModalStyles";
import ConfirmWindow from "../ConfirmWindow/ConfirmWindow";
import Modal from "../Modal/Modal";
import ModalForm from "../ModalForm/ModalForm";
import { useDispatch, useSelector } from "react-redux";
import { isEditModalVisibleSelector } from "../../redux/selectors";
import { openEditModal, closeEditModal } from "../../redux/modalSlice";

const ProfileCard = ({ id, firstName, lastName, phone, email, bio }) => {
  const dispatch = useDispatch();
  const isEditModalVisible = useSelector(isEditModalVisibleSelector);
  const [openConfirmWindow, setOpenConfirmWindow] = useState(false);

  const handleOpenConfirmWindow = () => {
    setOpenConfirmWindow(!openConfirmWindow);
  };

  return (
    <>
      {!isEditModalVisible ? (
        <StyledProfileItem key={id}>
          <StyledProfileInfo>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{bio}</p>
          </StyledProfileInfo>
          <StyledButton type="button" onClick={() => dispatch(openEditModal())}>
            Edit info
          </StyledButton>
          <StyledModalButton
            type="button"
            onClick={() => handleOpenConfirmWindow()}
          >
            Delete
          </StyledModalButton>
        </StyledProfileItem>
      ) : (
        <Modal
          closeModal={() => dispatch(closeEditModal())}
          header={"Edit your profile"}
        >
          <ModalForm
            id={id}
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            email={email}
            bio={bio}
          />
        </Modal>
      )}

      {openConfirmWindow && (
        <ConfirmWindow
          id={id}
          text={`Are you sure you want to delete ${
            firstName + " " + lastName
          }'s profile`}
          onShow={handleOpenConfirmWindow}
        />
      )}
    </>
  );
};

ProfileCard.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  bio: PropTypes.string,
};

export default ProfileCard;
