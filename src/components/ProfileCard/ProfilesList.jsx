import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import { StyledProfilesList } from "./ProfileStyles";
import { profilesSelector } from "../../redux/selectors";

const ProfilesList = () => {
  const profiles = useSelector(profilesSelector);
  return (
    <StyledProfilesList>
      {profiles.length > 0 &&
        profiles.map(({ id, ...restProps }) => (
          <ProfileCard key={id} {...restProps} />
        ))}
    </StyledProfilesList>
  );
};

export default ProfilesList;
