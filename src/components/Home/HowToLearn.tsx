import styled from "@emotion/styled";
import PageWidth from "src/components/PageWidth";

const HowToLearnStyle = styled.div<IThemeProps>`
  background: ${({theme: {color: {black_100}}}) => black_100};
  padding-bottom: 80px;
`;

const HowToLearnList = styled.ul`
  display: flex;
`;

interface IHowToLearnItemProps extends IThemeProps {
  bg: string;
}

const HowToLearnItem = styled.li<IHowToLearnItemProps>`
  width: 360px;
  background: url(${({bg}) => bg}) center no-repeat;
  background-size: cover;
  &:first-of-type, &:last-of-type {
    overflow: hidden;
  }
  &:first-of-type {
    border-radius: 10px 0 0 10px;
  }
  &:last-of-type {
    border-radius: 0 10px 10px 0;
  }
  .how-to-learn-item-container {
    padding: 218px 48px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background 0.2s 0.2s ease-in;
    &:hover {
      transition: background 0.2s ease-in;
      background-color: rgba(0, 0, 0, 0);
      .content {
        color: ${({theme: {color: {white_100}}}) => white_100};
        transition: color 0.2s ease-in;
      }
      .material-icons-outlined.icon {
        color: ${({theme: {color: {green_100}}}) => green_100};
        transition: color 0.2s ease-in;
      }
      .title::before {
        background-color: ${({theme: {color: {green_100}}}) => green_100};
        transition: background 0.2s ease-in;
      }
    }
  }
  .title {
    position: relative;
    color: ${({theme: {color: {white_100}}}) => white_100};
    font-size: 24px;
    margin-bottom: 16px;
    font-weight: bold;
    margin-bottom: 48px;
    &::before {
      content: '';
      position: absolute;
      bottom: -16px;
      height: 3px;
      width: 50px;
      background-color: ${({theme: {color: {white_100}}}) => white_100};
      transition: background 0.2s 0.2s ease-in;
    }
  }
  .content {
    color: ${({theme: {color: {gray_100}}}) => gray_100};
    font-size: 18px;
    transition: color 0.2s 0.2s ease-in;
  }
  .material-icons-outlined.icon {
    font-size: 28px;
    color: ${({theme: {color: {gray_100}}}) => gray_100};
    margin-bottom: 18px;
    transition: color 0.2s 0.2s ease-in;
  }
`;

interface IHowToLearnProps {
  list: IHowToLearnItem[];
}

function HowToLearn({list}: IHowToLearnProps) {
  return <>
    <HowToLearnStyle>
      <PageWidth className='page-width'>
        <HowToLearnList>
          {list.map((item) => 
            <HowToLearnItem key={item.title} bg={item.image}>
              <div className="how-to-learn-item-container">
                <span className="material-icons-outlined icon">{item.icon}</span>
                <h4 className="title">{item.title}</h4>
                <p className="content">{item.content}</p>
              </div>
            </HowToLearnItem>)}
        </HowToLearnList>
      </PageWidth>
    </HowToLearnStyle>
  </>
}

export default HowToLearn;