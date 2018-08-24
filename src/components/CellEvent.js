import styled from 'styled-components';
import COLORS from '../utils/Colors';

import Btn from './Btn';

const Cell = styled.View`
  padding: 16px;
`;

const Image = styled.Image`
  width: 100%;
  height: 160px;
  border-radius: 5px;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  color: ${COLORS.primary.red};
  font-size: 24;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Creator = styled.Text`
  color: ${COLORS.primary.red};
  font-size: 16;
  margin-bottom: 8px;
`;

const Detail = styled.Text`
  color: ${COLORS.greys.secondary};
  font-size: 16;
  margin-bottom: 8px;
`;

Cell.Image = Image;
Cell.Title = Title;
Cell.Creator = Creator;
Cell.Detail = Detail;
Cell.Btn = Btn;

export default Cell;
