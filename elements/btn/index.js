import PropTypes from "prop-types";
import React from "react";

import Wrapper from "./wrapper";
import BtnText from "./btn-text";

const propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

// const defaultProps = {};

const Btn = ({ title, onPress }) => {
  return (
    <Wrapper onPress={onPress}>
      <BtnText>{title}</BtnText>
    </Wrapper>
  );
};

export default Btn;
