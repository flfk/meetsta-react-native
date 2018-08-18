import styled from "styled-components";

import Btn from "../../elements/btn";
import BtnFb from "./btn-login-fb";
import BtnSec from "../../elements/btn-secondary";

const LoginBtns = styled.View`
  border: 2px solid red;
  padding: 18px;
  height: 240;
  justify-content: space-around;
`;

LoginBtns.SignUp = Btn;
LoginBtns.Fb = BtnFb;
LoginBtns.Login = BtnSec;

export default LoginBtns;
