import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

import COLORS from '../utils/Colors';

import PropTypes from 'prop-types';
import React from 'react';

const BtnText = styled.Text`
  padding: 4px 8px;
  font-size: 18;
  color: ${COLORS.primary.red};
`;

const propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

// const defaultProps = {};

const BtnNavBar = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <BtnText>{title}</BtnText>
    </TouchableOpacity>
  );
};

BtnNavBar.propTypes = propTypes;

export default BtnNavBar;
