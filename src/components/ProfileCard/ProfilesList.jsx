import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import { StyledProfilesList } from "./ProfileStyles";
import * as profilerSelectors from "../../redux/selectors";

const ProfilesList = () => {
  const profiles = useSelector(profilerSelectors.profiles);
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
