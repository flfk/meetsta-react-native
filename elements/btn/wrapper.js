import styled from "styled-components";

import { COLORS } from "../../styles/style-guide";

const Wrapper = styled.TouchableOpacity`
  padding: 4px 8px;
  background-color: ${COLORS.primary.red};
  border: 4px solid ${COLORS.primary.red};
  border-radius: 10;
  align-items: center;
`;

export default Wrapper;
