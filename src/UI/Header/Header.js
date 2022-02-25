import React from "react";
import Button from "../../components/Button/Button";
import StyledHeader from "./StyledHeader";

const Header = ({ openModal }) => {
  return (
    <StyledHeader>
      <Button type="button" openModal={openModal}>
        Create profile
      </Button>
    </StyledHeader>
  );
};

export default Header;
