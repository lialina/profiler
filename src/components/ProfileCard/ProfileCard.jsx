import React from "react";
import PropTypes from "prop-types";
import { StyledProfileItem } from "./ProfileStyles";

const ProfilesCard = ({ id, firstName, lastName, phone, email, bio }) => {
  return (
    <StyledProfileItem key={id}>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{bio}</p>
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
