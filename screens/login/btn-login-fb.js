import React from "react";

import Btn from "../../elements/btn";

const FACEBOOK_BLUE = "#4267B2";

const BtnFb = ({ title, onPress }) => {
  return (
    <Wrapper onPress={onPress}>
      <BtnText>{title}</BtnText>
    </Wrapper>
  );
};

const Wrapper = Btn.Wrapper.extend`
  background-color: ${FACEBOOK_BLUE};
  border-color: ${FACEBOOK_BLUE};
`;

const BtnText = Btn.BtnText.extend`
  color: white;
`;

export default BtnFb;
