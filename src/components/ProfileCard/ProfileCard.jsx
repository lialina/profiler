import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { StyledProfileItem, StyledProfileInfo } from "./ProfileStyles";
import StyledButton from "../Button/StyledButton";
import { ModalButton } from "../Modal/ModalStyles";
import { deleteProfileFetch } from "../../redux/profilesSlice";

const ProfilesCard = ({ id, firstName, lastName, phone, email, bio }) => {
  const dispatch = useDispatch();

  return (
    <StyledProfileItem key={id}>
      <StyledProfileInfo>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{bio}</p>
      </StyledProfileInfo>
      <StyledButton>Edit info</StyledButton>
      <ModalButton
        type="button"
        onClick={() => dispatch(deleteProfileFetch(id))}
      >
        Delete
      </ModalButton>
    </StyledProfileItem>
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
