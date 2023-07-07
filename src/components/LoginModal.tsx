import styled from '@emotion/styled';

const ModalFilter = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 30;
  background-color: #000;
`;

const ModalContainer = styled.div<IThemeProps>`
  width: 636px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 24px;
  background-color: ${({theme: {color: {black_200}}}) => black_200};
  border: 1px solid ${({theme: {color: {white_100}}}) => white_100};
  color: ${({theme: {color: {white_100}}}) => white_100};
`;

const ModalTitle = styled.p<IThemeProps>`
  flex-grow: 1;
  text-align: center;
  font-size: 24px;
  margin-bottom: 32px;
`;

const CloseModalBtn = styled.button<IThemeProps>`
  color: ${({theme: {color: {white_100}}}) => white_100};
  line-height: 0;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 24px;
  right: 24px;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.5);
  }
`;

const Container = styled.div<IThemeProps>`
  width: 331px;
  margin: 0 auto;
  input, button {
    width: 100%;
  }
`;

const InputGroup = styled.label<IThemeProps>`
  display: block;
  margin-bottom: 24px;
  p {
    margin-bottom: 6px;
    font-weight: lighter;
    color: ${({theme: {color: {gray_300}}}) => gray_300};
  }
  input {
    padding: 8px 16px;
    background-color: ${({theme: {color: {black_100}}}) => black_100};
    border: 1px solid ${({theme: {color: {white_100}}}) => white_100};
    border-radius: 5px;
    caret-color: ${({theme: {color: {white_100}}}) => white_100};
  }
`;

const LoginBtn = styled.button<IThemeProps>`
  padding: 8px;
  border-radius: 10px;
  background: linear-gradient(to right , ${({theme: {color: {blue_100}}}) => blue_100}, ${({theme: {color: {green_100}}}) => green_100});
  border: none;
  margin-bottom: 48px;
`;

const SubTitle = styled.p<IThemeProps>`
  position: relative;
  text-align: center;
  margin-bottom: 16px;
  .desc {
    position: absolute;
    right: 0;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid ${({theme: {color: {gray_300}}}) => gray_300};
    z-index: -1;
  }
  .content {
    background-color: ${({theme: {color: {black_200}}}) => black_200};
    padding: 10px;
  }
`;

const OtherLoginBtn = styled.button<IThemeProps>`
  display: flex;
  align-items: center;
  border: 1px solid ${({theme: {color: {white_100}}}) => white_100};
  background-color: ${({theme: {color: {black_200}}}) => black_200};
  border-radius: 5px;
  padding: 8px 32px;
  margin-bottom: 24px;
  p {
    text-align: center;
    flex-grow: 1;
    color: ${({theme: {color: {white_100}}}) => white_100};
  }
`;

interface LoginModalProps {
  hideModal: () => void;
}

function LoginModal({hideModal}: LoginModalProps) {
  return <>
    <ModalFilter>
      <ModalContainer>
        <ModalTitle>登入</ModalTitle>
        <CloseModalBtn type='button' onClick={hideModal}>
          <span className="material-icons">close</span>
        </CloseModalBtn>
        <Container>
          <InputGroup>
            <p>信箱</p>
            <input type="text" placeholder='請輸入信箱' />
          </InputGroup>
          <InputGroup>
            <p>密碼</p>
            <input type="text" placeholder='請輸入密碼' />
          </InputGroup>
          <LoginBtn type='button'>登入</LoginBtn>
          <SubTitle>
            <span className='desc'></span>
            <span className='content'>其他登入方式</span>
          </SubTitle>
          <OtherLoginBtn type='button'>
            <img src="/facebook.png" alt="facebook" />
            <p>Facebook 登入</p>  
          </OtherLoginBtn>
          <OtherLoginBtn>
            <img src="/google.png" alt="facebook" />
            <p>Google 登入</p>  
          </OtherLoginBtn>
        </Container>
      </ModalContainer>
    </ModalFilter>
  </>
}

export default LoginModal;