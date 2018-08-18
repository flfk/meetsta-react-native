import styled from "styled-components";

import Btn from "../../shared/btn";
import BtnFb from "./btn-login-fb";
import BtnSec from "../../shared/btn-secondary";

const LoginBtns = styled.View`
  padding: 18px;
  height: 240;
  justify-content: space-around;
`;

LoginBtns.SignUp = Btn;
LoginBtns.Fb = BtnFb;
LoginBtns.Login = BtnSec;

export default LoginBtns;
