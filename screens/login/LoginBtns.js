import styled from "styled-components";

import Btn from "../../shared/Btn";
import BtnFb from "./BtnLoginFb";
import BtnSec from "../../shared/BtnSecondary";

const LoginBtns = styled.View`
  padding: 18px;
  height: 240;
  justify-content: space-around;
`;

LoginBtns.SignUp = Btn;
LoginBtns.Fb = BtnFb;
LoginBtns.Login = BtnSec;

export default LoginBtns;
