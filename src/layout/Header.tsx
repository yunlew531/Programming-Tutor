import styled from '@emotion/styled'
import PageWidth from 'src/components/PageWidth';

const HeaderStyle = styled.header<IThemeProps>`
  color: ${({theme: {color: {white_100}}})=> white_100};
  background-color: ${({theme: {color: {black_100}}})=> black_100};
`

const HeaderContainer = styled.div`
  display: flex;
  padding: 24px 72px;
`

const LogoLink = styled.a<IThemeProps>`
  display: flex;
  align-items: end;
  transition: filter .2s;
  margin-right: auto;
  .logo-content {
    font-family: 'Azeret Mono', monospace;
    color: ${({theme: {color: {gray_100}}}) => gray_100};
    font-size: 16px;
    margin-bottom: 2px;
  }
  .material-icons-outlined.home-logo {
    font-size: 42px;
    margin-right: 15px;
    background: -webkit-linear-gradient(${({theme:{color: {green_100}}}) => green_100}, ${({theme:{color: {blue_100}}}) => blue_100});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.5);
  }
`

const LinkList = styled.ul<IThemeProps>`
  display: flex;
  align-items: center;
  .header-link {
    display: flex;
    align-items: center;
    color: ${({theme: {color: {white_100}}}) => white_100};
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .link-item {
    display: flex;
    margin-right: 48px;
    transition: filter .2s;
    &:last-of-type {
      margin-right: 0;
    }
    .account-icon {
      margin-right: 5px;
    }
    &:hover {
    filter: brightness(0.8);
    }
    &:active {
      filter: brightness(0.5);
    }
  }
`

const HeaderBorderContainer = styled.div<IThemeProps>`
  display: flex;
  .header-border {
    height: 3px;
    width: 100%;
    &:first-of-type {
      background-color: ${({theme: {color: {green_100}}}) => green_100};
    }
    &:last-of-type {
      background-color: ${({theme: {color: {blue_100}}}) => blue_100};
    }
  }
`;

interface HeaderProps {
  showLoginModal: () => void;
}


function Header({showLoginModal}: HeaderProps) {
  return <>
    <HeaderStyle>
      <PageWidth>
        <HeaderContainer>
          <LogoLink href='/'>
            <span className="material-icons-outlined home-logo">home</span>
            <p className='logo-content'>Coding Home</p>
          </LogoLink>
          <LinkList>
            <li className='link-item'><a href="/" className='header-link'>首頁</a></li>
            <li className='link-item'><a href="/" className='header-link'>課程介紹</a></li>
            <li className='link-item'>
              <button type='button' className='header-link' onClick={showLoginModal}>
                <span className="material-icons-outlined account-icon">account_circle</span>
                <span>登入</span>
                </button>
            </li>
          </LinkList>
        </HeaderContainer>
      </PageWidth>
    </HeaderStyle>
    <HeaderBorderContainer>
      <div className='header-border'></div>
      <div className='header-border'></div>
    </HeaderBorderContainer>
  </>
}

export default Header;