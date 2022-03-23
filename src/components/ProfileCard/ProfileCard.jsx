import React from "react";

const ProfilesCard = ({ id, firstName, lastName, phone, email, bio }) => {
  return (
    <li key={id}>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{bio}</p>
    </li>
  );
};

export default ProfilesCard;
