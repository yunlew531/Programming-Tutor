import styled from '@emotion/styled';
import PageWidth from 'src/components/PageWidth';
import SectionTitle from 'src/components/Home/SectionTitle';

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
  .banner-sub-content, .banner-content {
    font-size: 48px;
    font-weight: bold;
  }
  .banner-content {
    background: -webkit-linear-gradient(${({theme: {color: {blue_100}}})=> blue_100}, ${({theme: {color: {green_100}}})=> green_100});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .banner-sub-content {
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
  padding: 80px 0px;
`;

const ClassroomProcedureList = styled.ul<IThemeProps>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 72px;
  .classroom-procedure-item {
    position: relative;
    padding: 48px;
    margin-right: 24px;
    width: 306px;
    border: 1px solid ${({theme: {color: {white_100}}}) => white_100};
    border-radius: 10px;
    color: ${({theme: {color: {white_100}}}) => white_100};
    &:last-of-type {
      margin-right: 0;
    }
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

const ProgrammingLanguage = styled.div<IThemeProps>`
  background-color: ${({theme: {color: {black_200}}}) => black_200};
  .page-width {
    padding: 80px 0px;
  }
`;

const ProgrammingLanguageList = styled.ul<IThemeProps>`
  display: flex;
  justify-content: center;
  padding: 0 24px;
  .language-item {
    font-size: 18px;
    color: ${({theme: {color: {white_100}}}) => white_100};
    border: 1px solid ${({theme: {color: {white_100}}}) => white_100};
    border-radius: 5px;
    padding: 24px 32px;
    margin-right: 16px;
  }
`;

const RecommendedCourse = styled.div<IThemeProps>`
  background-color: ${({theme: {color: {black_100}}}) => black_100};
  .page-width {
    padding: 80px 72px;
  }
`;

const RecommendedCourseList = styled.ul`
  display: flex;
  margin-bottom: 48px;
`;

const RecommendedCourseItem = styled.li<IThemeProps>`
  display: flex;
  flex-direction: column;
  width: 306px;
  background-color: ${({theme: {color: {black_200}}}) => black_200};
  border-radius: 15px;
  margin-right: 24px;
  border: 1px solid transparent;
  &:last-of-type {
    margin-right: 0;
  }
  .course-card-header {
    flex-grow: 1;
    border-bottom: 1px solid ${({theme: {color: {gray_100}}}) => gray_100};
    padding: 24px;
  }
  .course-card-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }
  .course-time {
    font-weight: lighter;
  }
  .course-price {
    font-size: 32px;
    margin-left: 8px;
  }
  .person-photo {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-bottom: 8px;
  }
  .course-content, .person-name, .course-title, .course-card-footer {
    color: ${({theme: {color: {white_100}}}) => white_100};
  }
  .person-name {
    text-align: center;
    margin-bottom: 24px;
  }
  .course-title {
    font-size: 20px;
    margin-bottom: 30px;
    height: 58px;
  }
  .course-subtitle {
    color: ${({theme: {color: {green_100}}}) => green_100};
    margin-bottom: 8px;
  }
  &:hover {
    border: 1px solid ${({theme: {color: {green_100}}}) => green_100};
  }
`;

const MoreCourseBtn = styled.button<IThemeProps>`
  display: block;
  margin: 0 auto;
  padding: 8px 32px;
  background: linear-gradient(to right top, ${({theme: {color: {blue_100}}}) => blue_100}, ${({theme: {color: {green_100}}}) => green_100});
  transition: filter 0.2s ease-in;
  color: ${({theme: {color: {white_100}}}) => white_100};
  border-radius: 10px;
  border: none;
  &:hover {
    filter: brightness(0.9);
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
        <SectionTitle text="預期上課流程" />
        <ClassroomProcedureList>
          <li className='classroom-procedure-item'>
            <span className='classroom-procedure-num'>01</span>
            <p className='classroom-procedure-item-title'>預約</p>
            <p className='classroom-procedure-item-content'>線上預約指定課程與老師<br />由老師安排專屬課程</p>
          </li>
          <li className='classroom-procedure-item'>
            <span className='classroom-procedure-num'>02</span>
            <p className='classroom-procedure-item-title'>付款</p>
            <p className='classroom-procedure-item-content'>支援各種支付方式<br />提供12期分期付款</p>
          </li>
          <li className='classroom-procedure-item'>
            <span className='classroom-procedure-num'>03</span>
            <p className='classroom-procedure-item-title'>付款</p>
            <p className='classroom-procedure-item-content'>地點由您指定<br />密集性一對一教學</p>
          </li>
          <li className='classroom-procedure-item'>
            <span className='classroom-procedure-num'>04</span>
            <p className='classroom-procedure-item-title'>提供滿意度</p>
            <p className='classroom-procedure-item-content'>提供課程滿意度及回饋<br />讓我們持續成長與進步</p>
          </li>
        </ClassroomProcedureList>
      </PageWidth>
    </ClassroomProcedure>
    <ProgrammingLanguage>
      <PageWidth className='page-width'>
        <SectionTitle text="你想要學習的程式，都在這裡" />
        <ProgrammingLanguageList>
          <li className='language-item'><p>JavaScript</p></li>
          <li className='language-item'><p>HTML/CSS</p></li>
          <li className='language-item'><p>SQL</p></li>
          <li className='language-item'><p>Java</p></li>
          <li className='language-item'><p>SQL</p></li>
          <li className='language-item'><p>Bash/Shell</p></li>
          <li className='language-item'><p>Python</p></li>
          <li className='language-item'><p>PHP</p></li>
          <li className='language-item'><p>C++</p></li>
        </ProgrammingLanguageList>
      </PageWidth>
    </ProgrammingLanguage>
    <RecommendedCourse>
      <PageWidth className='page-width'>
        <SectionTitle text="熱門推薦課程" />
        <RecommendedCourseList>
          <RecommendedCourseItem>
            <div className="course-card-header">
              <img className='person-photo' src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80" alt="person" />
              <p className='person-name'>Belinda</p>
              <p className='course-title'>基礎前端 - HTML</p>
              <p className='course-subtitle'>前端語言</p>
              <p className='course-content'>帶領無基礎的平民老百姓，從最基礎的 HTML 語法出發，使用最淺顯易懂的語言與生活隨處可見的例子...</p>
            </div>
            <div className="course-card-footer">
              <span className='course-time'>50分鐘</span>
              <span className='course-price'>NT$1600</span>
            </div>
          </RecommendedCourseItem>
          <RecommendedCourseItem>
            <div className="course-card-header">
              <img className='person-photo' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="person" />
              <p className='person-name'>Guava</p>
              <p className='course-title'>2022 Python 全攻略｜從入門到實務</p>
              <p className='course-subtitle'>後端語言</p>
              <p className='course-content'>Python支援多種程式設計範式，包括函數式、指令式、反射式、結構化和物件導向程式設計，它擁有動態...</p>
            </div>
            <div className="course-card-footer">
              <span className='course-time'>50分鐘</span>
              <span className='course-price'>NT$2200</span>
            </div>
          </RecommendedCourseItem>
          <RecommendedCourseItem>
            <div className="course-card-header">
              <img className='person-photo' src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="person" />
              <p className='person-name'>Joe</p>
              <p className='course-title'>活用 Line Bot ｜APP 開發到上架完整實戰攻略</p>
              <p className='course-subtitle'>行動應用開發</p>
              <p className='course-content'>Line Bot 可用於實用的目的，如客戶服務或資訊獲取，有些聊天機器人會搭載自然語言處理系統，但大多簡...</p>
            </div>
            <div className="course-card-footer">
              <span className='course-time'>50分鐘</span>
              <span className='course-price'>NT$1800</span>
            </div>
          </RecommendedCourseItem>
          <RecommendedCourseItem>
            <div className="course-card-header">
              <img className='person-photo' src="https://images.unsplash.com/photo-1498090890888-3df9298e7b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" alt="person" />
              <p className='person-name'>Lina</p>
              <p className='course-title'>Linux 零基礎七天入門｜入門到實務</p>
              <p className='course-subtitle'>作業系統與伺服器</p>
              <p className='course-content'>Linux是一種自由和開放原始碼的類UNIX作業系統，作業系統中包含了許多使用者圖形介面和其他實用...</p>
            </div>
            <div className="course-card-footer">
              <span className='course-time'>50分鐘</span>
              <span className='course-price'>NT$1100</span>
            </div>
          </RecommendedCourseItem>
        </RecommendedCourseList>
        <MoreCourseBtn>所有課程列表</MoreCourseBtn>
      </PageWidth>
    </RecommendedCourse>
  </>
}

export default Home