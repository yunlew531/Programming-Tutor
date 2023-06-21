import styled from "@emotion/styled";

const SectionTitleStyle = styled.div<IThemeProps>`
  .procedure-title-decoration {
    display: block;
    margin: 0 auto;
    width: 56px;
    border-bottom: 2px solid ${({theme: {color: {green_100}}}) => green_100};
    margin-top: 16px;
    margin-bottom: 74px;
  }
  .procedure-title {
    font-size: 28px;
    color: ${({theme: {color: {white_100}}}) => white_100};
    text-align: center;
    margin: 0 auto;
  }
`;

interface SectionTitleProps {
  text: string;
}

function SectionTitle({text}: SectionTitleProps) {
  return <>
    <SectionTitleStyle>
      <h4 className='procedure-title'>{text}</h4>
      <span className='procedure-title-decoration'></span>
    </SectionTitleStyle>
  </>
}

export default SectionTitle