import React from 'react';

import Btn from '../Btn';
import COLORS from '../../utils/Colors';

const BtnSec = ({ title, onPress }) => {
  return (
    <Wrapper onPress={onPress}>
      <BtnText>{title}</BtnText>
    </Wrapper>
  );
};

const Wrapper = Btn.Wrapper.extend`
  background-color: white;
`;

const BtnText = Btn.BtnText.extend`
  color: ${COLORS.primary.red};
`;

export default BtnSec;
