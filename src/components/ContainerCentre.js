import styled from 'styled-components';
import { Constants } from 'expo';

const Container = styled.View`
  flex: 1;
  padding-left: 16;
  padding-right: 16;
  width: 100%;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight};
`;

export default Container;
