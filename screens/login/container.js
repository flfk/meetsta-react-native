import styled from "styled-components";
import { Constants } from "expo";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight};
`;

export default Container;
