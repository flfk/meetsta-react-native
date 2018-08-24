import styled from 'styled-components';

import Btn from './Btn';

const Cell = styled.View``;

const Image = styled.Image`
  width: 100%;
  height: 160px;
`;

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
`;

const Creator = styled.Text`
  font-size: 16;
`;

const Detail = styled.Text`
  font-size: 16;
`;

Cell.Image = Image;
Cell.Title = Title;
Cell.Creator = Creator;
Cell.Detail = Detail;
Cell.Btn = Btn;

export default Cell;
