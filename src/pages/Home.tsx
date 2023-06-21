import styled from '@emotion/styled';
import PageWidth from 'src/components/PageWidth';

const Banner = styled.div<IThemeProps>`
  background-color: ${({theme: {color: {black_100}}})=> black_100};
  background: url('src/assets/images/banner.jpeg') center no-repeat;
  background-size: cover;
  padding: 200px 15px;
  .page-width {
    display: flex;
    justify-content: center;
  }
`;

const Overlay = styled.div<IThemeProps>`
  padding: 50px 85px;
  border: 1px solid ${({theme: {color: {white_100}}}) => white_100};
  background-color: rgba(0,0,0, .6);
  position: relative;
  p.banner-sub-content, h3.banner-content {
    font-size: 48px;
    font-weight: bold;
  }
  h3.banner-content {
    background: -webkit-linear-gradient(${({theme: {color: {blue_100}}})=> blue_100}, ${({theme: {color: {green_100}}})=> green_100});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p.banner-sub-content {
    color: ${({theme: {color: {white_100}}}) => white_100};
    margin-bottom: 24px;
  }
  &::before, &::after, .banner-decoration::before, .banner-decoration::after {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: ${({theme: {color: {white_100}}}) => white_100};
  }
  &::before {
    top: 0;
    left: 0;
    transform: translateX(-50%) translateY(-50%);
  }
  &::after {
    top: 0;
    right: 0;
    transform: translateX(50%) translateY(-50%);
  }
  .banner-decoration::before {
    bottom: 0;
    left: 0;
    transform: translateX(-50%) translateY(50%);
  }
  .banner-decoration::after {
    bottom: 0;
    right: 0;
    transform: translateX(50%) translateY(50%);
  }
  .banner-description {
    display: flex;
    justify-content: center;
    color: ${({theme: {color: {white_100}}}) => white_100};
    font-size: 18px;
  }
`;

const WebsiteIntro = styled.div<IThemeProps>`
  background-color: ${({theme: {color: {black_200}}}) => black_200};
  .page-width {
    padding: 78px 72px;
    display: flex;
    align-items: center;
  }
  .website-intro-text {
    font-size: 28px;
    color: ${({theme: {color: {white_100}}}) => white_100};
    margin-right: 158px;
  }
  .website-intro-list {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }
  .website-intro-item {
    color: ${({theme: {color: {gray_100}}}) => gray_100};
    font-size: 18px;
    border: 1px solid transparent;
    border-radius: 10px;
    text-align: center;
    padding: 50px;
    &:hover {
      color: ${({theme: {color: {white_100}}}) => white_100};
      border: 1px solid ${({theme: {color: {green_100}}}) => green_100};
      .material-icons-outlined.icon {
        background: -webkit-linear-gradient(${({theme: {color: {blue_100}}})=> blue_100}, ${({theme: {color: {green_100}}})=> green_100});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .material-icons-outlined.icon {
    font-size: 40px;
    margin-bottom: 20px;
  }
  .website-intro-title {
    margin-bottom: 16px;
  }
`;

const ClassroomProcedure = styled.div<IThemeProps>`
  background-color: ${({theme: {color: {black_100}}}) => black_100};
  padding: 80px 72px;
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

const ClassroomProcedureList = styled.ul<IThemeProps>`
  display: flex;
  justify-content: space-between;
  .classroom-procedure-item {
    position: relative;
    padding: 48px;
    border: 1px solid ${({theme: {color: {white_100}}}) => white_100};
    border-radius: 10px;
    color: ${({theme: {color: {white_100}}}) => white_100};
  }
  .classroom-procedure-item-title {
    font-size: 24px;
    margin-bottom: 16px;
  }
  .classroom-procedure-item-content {
    font-size: 18px;
  }
  .classroom-procedure-num {
    transform: translateY(-50%);
    background-color: ${({theme: {color: {black_100}}}) => black_100};
    font-size: 48px;
    color: ${({theme: {color: {green_100}}}) => green_100};
    font-family: 'Azeret Mono', monospace;
    position: absolute;
    top: 0;
    line-height: 1;
    padding: 0 10px;
  }
`;

function Home() {
  return <>
    <Banner>
      <PageWidth className='page-width'>
        <Overlay>
          <h3 className='banner-content'>全台最豐富的程式家教</h3>
          <p className='banner-sub-content'>在實踐中化理想為現實</p>
          <div className="banner-description">
            <p>全台最專業師資｜</p>
            <p>到府程式家教｜</p>
            <p>客製化課程</p>
          </div>
          <div className='banner-decoration'></div>
        </Overlay>
      </PageWidth>
    </Banner>
    <WebsiteIntro>
      <PageWidth className='page-width'>
        <p className='website-intro-text'>手把手帶你<br />親自到家教到會</p>
        <ul className='website-intro-list'>
          <li className='website-intro-item'>
            <span className="material-icons-outlined icon">switch_left</span>
            <p className='website-intro-title'>超過 100 種專業課程</p>
            <p>學習標準化的電腦形式語言<br />培養運算思維和邏輯素養</p>
          </li>
          <li className='website-intro-item'>
            <span className="material-icons-outlined icon">rocket_launch</span>
            <p className='website-intro-title'>超過 100 種專業課程</p>
            <p>學習標準化的電腦形式語言<br />培養運算思維和邏輯素養</p>
          </li>
          <li className='website-intro-item'>
            <span className="material-icons-outlined icon">place</span>
            <p className='website-intro-title'>超過 100 種專業課程</p>
            <p>學習標準化的電腦形式語言<br />培養運算思維和邏輯素養</p>
          </li>
        </ul>
      </PageWidth>
    </WebsiteIntro>
    <ClassroomProcedure>
      <PageWidth className='page-width'>
        <h4 className='procedure-title'>預期上課流程</h4>
        <span className='procedure-title-decoration'></span>
        <ClassroomProcedureList>
          <li className='classroom-procedure-item'>
            <span className='classroom-procedure-num'>01</span>
            <p className='classroom-procedure-item-title'>預約</p>
            <p className='classroom-procedure-item-content'>線上預約指定課程與老師<br />由老師安排專屬課程</p>
          </li>
          <li className='classroom-procedure-item'>
            <span className='classroom-procedure-num'>02</span>
            <p className='classroom-procedure-item-title'>付款</p>
            <p className='classroom-procedure-item-content'>線上預約指定課程與老師<br />由老師安排專屬課程</p>
          </li>
          <li className='classroom-procedure-item'>
            <span className='classroom-procedure-num'>03</span>
            <p className='classroom-procedure-item-title'>付款</p>
            <p className='classroom-procedure-item-content'>線上預約指定課程與老師<br />由老師安排專屬課程</p>
          </li>
          <li className='classroom-procedure-item'>
            <span className='classroom-procedure-num'>04</span>
            <p className='classroom-procedure-item-title'>提供滿意度</p>
            <p className='classroom-procedure-item-content'>線上預約指定課程與老師<br />由老師安排專屬課程</p>
          </li>
        </ClassroomProcedureList>
      </PageWidth>
    </ClassroomProcedure>
  </>
}

export default Home