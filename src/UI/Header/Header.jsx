import React from "react";
import PropTypes from "prop-types";
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

Button.propTypes = {
  openModal: PropTypes.func,
};

export default Header;
