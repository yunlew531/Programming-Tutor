import styled from '@emotion/styled';
import PageWidth from 'src/components/PageWidth';
import SectionTitle from 'src/components/Home/SectionTitle';
import HowToLearn from 'src/components/Home/HowToLearn';
import Articles from 'src/components/Home/Articles';
import UserReview from 'src/components/Home/UserReview';
import { Link } from 'react-router-dom';
import CourseList from 'src/components/CourseList';
import courses from 'src/assets/courses.json'

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
    margin-right: 134px;
  }
  .website-intro-list {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }
  .website-intro-item {
    color: ${({theme: {color: {gray_100}}}) => gray_100};
    font-size: 18px;
    width: 306px;
    border: 1px solid transparent;
    border-radius: 10px;
    text-align: center;
    padding: 40px;
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

const MoreCourseLink = styled(Link)<IThemeProps>`
  width: 172px;
  display: block;
  text-align: center;
  margin: 0 auto;
  padding: 8px;
  background: linear-gradient(to right top, ${({theme: {color: {blue_100}}}) => blue_100}, ${({theme: {color: {green_100}}}) => green_100});
  transition: filter 0.2s ease-in;
  color: ${({theme: {color: {white_100}}}) => white_100};
  border-radius: 10px;
  border: none;
  margin-top: 48px;
  &:hover {
    filter: brightness(0.9);
  }
`;

function Home() {
  const howToLearnList = [
    {
      image: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: '對症下藥，專案製作',
      content: '除了可以瘋狂提問之外 還有機會一起完成專案',
      icon: 'forum'
    },
    {
      image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
      title: '激發你的學習潛力',
      content: '進度制課程安排&個人化學習建議 有效管理你的學習動力',
      icon: 'lightbulb'
    },
    {
      image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: '學習效率',
      content: '針對學員狀況調整內容與步調 學習精準最有效',
      icon: 'thumb_up'
    },
    {
      image: 'https://images.unsplash.com/photo-1520583457224-aee11bad5112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
      title: '一對一指導',
      content: '針對目的進行客製化課程安排 快速的學以致用',
      icon: 'people'
    },
  ]

  const articles = [
    {
      image: 'src/assets/images/1.png',
      title: '2022 前端開發者學習地圖',
      content: '轉職為前端的這條職業路上該如何發展？本篇為前端開發者提供學習地圖參考',
    },
    {
      image: 'src/assets/images/2.png',
      title: '軟體工程師有哪些類別',
      content: '軟體工程師領域廣闊，許多人仍然對此相關職務感到陌生，本篇就介紹主流的軟體工程師職務',
    },
    {
      image: 'src/assets/images/3.png',
      title: '免費 25 小時前端教學資源',
      content: '這篇文章規劃了適合「前端工程師」的學習地圖，讓新進的學生了解如何選擇課程',
    }
  ]

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
            <p className='website-intro-title'>高效學習</p>
            <p>客製化專屬課表<br />讓學習變簡單</p>
          </li>
          <li className='website-intro-item'>
            <span className="material-icons-outlined icon">place</span>
            <p className='website-intro-title'>指定地點</p>
            <p>專業老師到你指定的地點<br />一對一高效學習</p>
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
        <CourseList title="熱門推薦課程" courses={courses} />
        <MoreCourseLink to="/courses">所有課程列表</MoreCourseLink>
      </PageWidth>
    </RecommendedCourse>
    <HowToLearn list={howToLearnList} />
    <Articles articles={articles} />
    <UserReview />
  </>
}

export default Home