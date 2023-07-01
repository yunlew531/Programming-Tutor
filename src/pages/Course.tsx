import styled from "@emotion/styled";
import CourseItem from "src/components/CourseItem"
import CourseList from "src/components/CourseList";
import PageWidth from "src/components/PageWidth";
import courses from 'src/assets/courses.json'

const CourseStyle = styled.div<IThemeProps>`
  background-color: ${({theme: {color: {black_100}}}) => black_100};
`;

const CourseContainer = styled.div`
  display: flex;
  align-items: start;
  padding: 82px 62px 82px 182px;
`;

const CoursePanel = styled.div`
  margin-right: 24px;
`;

const CourseQtyList = styled.ul<IThemeProps>`
  flex-shrink: 0;
  width: 416px;
  padding: 24px 32px;
  background-color: ${({theme: {color: {black_200}}}) => black_200};
  border-radius: 15px;
  li {
    display: flex;
    align-items: center;
    color: ${({theme: {color: {white_100}}}) => white_100};
    border-bottom: 1px solid ${({theme: {color: {gray_100}}}) => gray_100};
    padding: 16px 0;
    &:last-of-type {
      border-bottom: none;
    }
  }
  .course-qty-group {
    flex-grow: 1;
  }
  .course-price {
    font-size: 24px;
  }
  .course-qty {
    font-weight: lighter;
  }
  .material-icons-outlined.arrow {
    background: linear-gradient(to right top, ${({theme: {color: {blue_100}}}) => blue_100}, ${({theme: {color: {green_100}}}) => green_100});
    color: ${({theme: {color: {white_100}}}) => white_100};
    border-radius: 100%;
    padding: 1px 0 1px 3px;
  }
`;

const CoursePanelTitle = styled.h3<IThemeProps>`
  font-size: 20px;
  color: ${({theme: {color: {white_100}}}) => white_100};
  margin-bottom: 16px;
`;

const CourseIntroCard = styled.div<IThemeProps>`
  background-color: ${({theme: {color: {black_200}}}) => black_200};
  border-radius: 15px;
  padding: 32px;
  margin-bottom: 48px;
  color: ${({theme: {color: {white_100}}}) => white_100};
  .content {
    margin-bottom: 32px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  .course-intro-title {
    font-size: 18px;
    border-left: 2px solid ${({theme: {color: {green_100}}}) => green_100};
    padding-left: 8px;
    margin-bottom: 16px;
  }
`;

const ResumeList = styled.ul<IThemeProps>`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${({theme: {color: {gray_100}}}) => gray_100};
  li {
    display: flex;
    width: 50%;
    color: ${({theme: {color: {white_100}}}) => white_100};
    /* margin-right: 24px; */
    h5 {
      font-weight: lighter;
      margin-right: 8px;
    }
    .resume-icon {
      color: ${({theme: {color: {green_100}}}) => green_100};
      margin-right: 9px;
    }
  }
`;

const LearnList = styled.ul<IThemeProps>`
  list-style: square;
  padding-left: 20px;
  margin-bottom: 32px;
  li::marker {
    color: ${({theme: {color: {green_100}}}) => green_100};
  }
`;

const CourseListContainer = styled.div`
  background-color: #000;
  padding: 72px 0;
  .page-width {
    padding: 0 72px;
  }
`;

function Course() {
  const course =  {
    teacherPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    teacherName: 'Belinda',
    title: '基礎前端 - HTML',
    category: '前端語言',
    content: '帶領無基礎的平民老百姓，從最基礎的 HTML 語法出發，使用最淺顯易懂的語言與生活隨處可見的例子，輕鬆進入網頁架設的世界，完成一個基礎的網頁架設。',
    price: 1600,
    courseLong: 50,
  }

  const resumeList = [
    {
      icon: 'school',
      title: '學歷',
      content: '國立中央大學 資訊工程 碩士 畢業'
    },
    {
      icon: 'translate',
      title: '語言',
      content: '中文/英文'
    },
    {
      icon: 'work',
      title: '經歷',
      content: '2020.08 - 迄今 上市企業 韌體工程師'
    },
    {
      icon: 'military_tech',
      title: '等級',
      content: '入門'
    },
  ]
  
  return <>
    <CourseStyle>
      <PageWidth>
        <CourseContainer>
          <CoursePanel>
            <CourseItem course={course} />
            <CoursePanelTitle>老師介紹</CoursePanelTitle>
            <CourseIntroCard>
              <ResumeList>
                {resumeList.map(resume => 
                  <li>
                    <span className="material-icons resume-icon">{resume.icon}</span>
                    <h5>{resume.title}</h5>
                    <p>{resume.content}</p>
                  </li>)}
              </ResumeList>
              <p className="content">目前任職於上市企業 韌體工程師，撰寫各種微控制器韌體程式，如作業系統、系統軟體、裝置控制程式、驅動程式、網路應用程式、系統整合程式、數位訊號處理程式等。</p>
              <p className="content">興趣是幫助他人學習程式語言，我相信，透過清楚的講解與示範，任何人都可以學好編寫程式與電腦科學中的複雜概念</p>
            </CourseIntroCard>
            <CoursePanelTitle>課程簡介</CoursePanelTitle>
            <CourseIntroCard>
              <p className="course-intro-title">這堂課你將會學到：</p>
              <LearnList>
                <li><p>網頁設計，基礎知識</p></li>
                <li><p>HTML 語法，概念實作能力</p></li>
                <li><p>CSS , Javascript 概念與知識</p></li>
                <li><p>能做出一個基礎的HTML 網頁</p></li>
              </LearnList>
              <p className="course-intro-title">什麼是 HTML，為什麼要打造網頁，就一定要先學它？</p>
              <p className="content">HTML元素是構建網站的基石。HTML允許嵌入圖像與物件，並且可以用於建立互動式表單，它被用來結構化資訊——例如標題、段落和列表等等，也可用來在一定程度上描述文件的外觀和語意。</p>
              <p className="content">當你掌握了HTML，就可以開始規劃並建置你想要的網頁內容 !</p>
            </CourseIntroCard>
          </CoursePanel>
          <CourseQtyList>
            <li>
              <div className="course-qty-group">
                <p className="course-price">NT$1600</p>
                <span className="course-qty">1堂50分鐘</span>
              </div>
              <span className="material-icons-outlined arrow">chevron_right</span>
            </li>
            <li>
              <div className="course-qty-group">
                <p className="course-price">NT$1400</p>
                <span className="course-qty">3堂50分鐘</span>
              </div>
              <span className="material-icons-outlined arrow">chevron_right</span>
            </li>
            <li>
              <div className="course-qty-group">
                <p className="course-price">NT$1000</p>
                <span className="course-qty">20堂50分鐘</span>
              </div>
              <span className="material-icons-outlined arrow">chevron_right</span>
            </li>
            <li>
              <div className="course-qty-group">
                <p className="course-price">恰談報價</p>
                <span className="course-qty">客製化課程/專案製作</span>
              </div>
              <span className="material-icons-outlined arrow">chevron_right</span>
            </li>
          </CourseQtyList>
        </CourseContainer>
      </PageWidth>
      <CourseListContainer>
        <PageWidth className="page-width">
          <CourseList title="其他人也看了這些課程" courses={courses} />
        </PageWidth>
      </CourseListContainer>
    </CourseStyle>
  </>
}

export default Course