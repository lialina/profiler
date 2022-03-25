import React from "react";
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

export default ProfilesCard;
