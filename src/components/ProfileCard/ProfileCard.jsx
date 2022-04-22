import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { StyledProfileItem, StyledProfileInfo } from "./ProfileStyles";
import StyledButton from "../Button/StyledButton";
import { StyledModalButton } from "../Modal/ModalStyles";
import ConfirmWindow from "../ConfirmWindow/ConfirmWindow";

const ProfilesCard = ({ id, firstName, lastName, phone, email, bio }) => {
  const [openConfirmWindow, setOpenConfirmWindow] = useState(false);

  const handleOpenConfirmWindow = () => {
    setOpenConfirmWindow(!openConfirmWindow);
  };

  return (
    <>
      <StyledProfileItem key={id}>
        <StyledProfileInfo>
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{bio}</p>
        </StyledProfileInfo>
        <StyledButton type="button">Edit info</StyledButton>
        <StyledModalButton
          type="button"
          onClick={() => handleOpenConfirmWindow()}
        >
          Delete
        </StyledModalButton>
      </StyledProfileItem>
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

ProfilesCard.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  bio: PropTypes.string,
};

export default ProfilesCard;
