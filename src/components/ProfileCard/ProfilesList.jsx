import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import * as profilerSelectors from "../../redux/selectors";

const ProfilesList = () => {
  const profiles = useSelector(profilerSelectors.profiles);
  return (
    <ul>
      {profiles.length > 0 &&
        profiles.map(({ id, firstName, lastName, phone, email, bio }) => (
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
