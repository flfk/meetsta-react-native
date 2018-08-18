import PropTypes from "prop-types";
import React from "react";

import BtnText from "./BtnText";
import Wrapper from "./Wrapper";

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

Btn.Wrapper = Wrapper;
Btn.BtnText = BtnText;

export default Btn;
