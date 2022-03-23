import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";

const ProfilesList = () => {
  const state = useSelector((state) => state.profiles);
  console.log("state", state);
  return (
    <ul>
      {state.map(({ id, firstName, lastName, phone, email, bio }) => (
        <ProfileCard
          key={id}
          firstName={firstName}
          lastName={lastName}
          phone={phone}
          email={email}
          bio={bio}
        />
      ))}
    </ul>
  );
};

export default ProfilesList;
