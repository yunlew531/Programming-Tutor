import styled from "@emotion/styled";

const FooterStyle = styled.footer<IThemeProps>`
  text-align: center;
  color: ${({theme: {color: {gray_200}}}) => gray_200};;
  background-color: ${({theme: {color: {black_200}}}) => black_200};
  padding: 24px;
`;

function Footer() {
  return <>
    <FooterStyle>
      <p>Coding Home © 2022 All Rights Reserved</p>
    </FooterStyle>
  </>
}

export default Footer