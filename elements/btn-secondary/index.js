import React from "react";

import Btn from "../btn";
import { COLORS } from "../../styles/style-guide";

const BtnSec = ({ title, onPress }) => {
  return (
    <Wrapper onPress={onPress}>
      <BtnText>{title}</BtnText>
    </Wrapper>
  );
};

const Wrapper = Btn.Wrapper.extend`
  background-color: transparent;
`;

const BtnText = Btn.BtnText.extend`
  color: ${COLORS.primary.red};
`;

export default BtnSec;
