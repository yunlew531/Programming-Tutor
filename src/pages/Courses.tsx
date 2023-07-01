import styled from "@emotion/styled";
import PageWidth from "src/components/PageWidth";
import { Link } from 'react-router-dom';
import CourseItem from 'src/components/CourseItem';

const CoursesStyle = styled.div<IThemeProps>`
  background-color: ${({theme: {color: {black_100}}}) => black_100};
  padding: 45px 0;
`;

const CourseCategoryList = styled.ul`
  display: flex;
  padding: 0 182px;
  margin-bottom: 48px;
`;

const CourseCategoryItem = styled.li<IThemeProps>`
  button {
    border: 1px solid ${({theme: {color: {white_100}}}) => white_100};
    border-radius: 5px;
    color: ${({theme: {color: {white_100}}}) => white_100};
    background-color: ${({theme: {color: {black_100}}}) => black_100};
    font-size: 16px;
    padding: 16px 32px;
    transition: filter .2s linear, color .2s linear;
    &:hover {
      filter: brightness(1.5);
      color: ${({theme: {color: {blue_100}}}) => blue_100};
    }
    &:active {
      filter: brightness(0.8);
    }
  }
  margin-right: 16px;
`;

const CourseList = styled.ul<IThemeProps>`
  padding: 0 182px;
`;

// const CourseItem = styled.li<IThemeProps>`
//   display: flex;
//   background-color: ${({theme: {color: {black_200}}}) => black_200};
//   padding: 48px;
//   border-radius: 15px;
//   margin-bottom: 32px;
// `;


const ButtonArea = styled.div<IThemeProps>`
  width: 168px;
  text-align: center;
  color: ${({theme: {color: {white_100}}}) => white_100};
  .course-long {
    font-weight: lighter;
  }
  .course-price {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const CourseBtn = styled(Link)<IThemeProps>`
  display: block;
  cursor: default;
  width: 100%;
  font-size: 18px;
  color: ${({theme: {color: {white_100}}}) => white_100};
  border-radius: 10px;
  padding: 7px 0;
  transition: filter .1s ease-in;
  &:hover {
    filter: brightness(.8);
  }
  &:active {
    filter: brightness(.7);
  }
`

const CourseIntoBtn = styled(CourseBtn)<IThemeProps>`
  border: 1px solid ${({theme: {color: {white_100}}}) => white_100};
  background-color: ${({theme: {color: {black_100}}}) => black_100};
  margin-bottom: 8px;
`;

const CourseReserveBtn = styled(CourseBtn)<IThemeProps>`
  border: 1px solid transparent;
  background: linear-gradient(to right, ${({theme: {color: {blue_100}}}) => blue_100}, ${({theme: {color: {green_100}}}) => green_100});
`;

function Courses() {
  const coursesCategory = ['所有課程', '行動應用開發', '資料庫/資料科學', '前端語言', '後端語言', '作業系統與伺服器']
  const courses: ICourse[] = [
    {
      teacherPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      teacherName: 'Belinda',
      title: '基礎前端 - HTML',
      category: '前端語言',
      content: '帶領無基礎的平民老百姓，從最基礎的 HTML 語法出發，使用最淺顯易懂的語言與生活隨處可見的例子，輕鬆進入網頁架設的世界，完成一個基礎的網頁架設。',
      price: '1600',
      courseLong: '50',
    },
    {
      teacherPhoto: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
      teacherName: 'Guava',
      title: '2022 Python 全攻略｜從入門到實務',
      category: '後端語言',
      content: 'Python支援多種程式設計範式，包括函數式、指令式、反射式、結構化和物件導向程式設計，它擁有動態型別系統和垃圾回收功能，能夠自動管理記憶體使用，本堂課帶你無痛入門，開發簡單的應用！',
      price: '2000',
      courseLong: '50',
    },
    {
      teacherPhoto: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1706&q=80',
      teacherName: 'Joe',
      title: '活用 Line Bot ｜APP 開發到上架完整實戰攻略',
      category: '行動應用開發',
      content: 'Line Bot 可用於實用的目的，如客戶服務或資訊獲取，有些聊天機器人會搭載自然語言處理系統，但大多簡單的系統只會擷取輸入的關鍵字，再從語料庫中找尋最合適的應答句，本堂課會帶你了解 Line Bot 如何結合其他工具的應用。',
      price: '1800',
      courseLong: '50',
    },
    {
      teacherPhoto: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      teacherName: 'Lina',
      title: 'Linux 零基礎七天入門｜入門到實務',
      category: '作業系統與伺服器',
      content: 'Linux是一種自由和開放原始碼的類UNIX作業系統，作業系統中包含了許多使用者圖形介面和其他實用工具。課程會一步一步帶著你走，讓你能夠從頭開始學習程式語言的基本語法',
      price: '1100',
      courseLong: '50',
    },
    
  ]

  return <>
    <CoursesStyle>
      <PageWidth>
        <CourseCategoryList>
          {coursesCategory.map(course => 
            <CourseCategoryItem key={course}>
              <button type="button">{course}</button>
            </CourseCategoryItem>)}
        </CourseCategoryList>
        <CourseList>
          {courses.map(course =>
            <li key={course.title}>
              <CourseItem course={course}>
              <ButtonArea>
                <p className="course-long">{course.courseLong} 分鐘</p>
                <p className="course-price">NT${course.price}</p>
                <CourseIntoBtn to={'/'}>課程介紹</CourseIntoBtn>
                <CourseReserveBtn to={'/courses'} onClick={(e) => e.preventDefault()}>立即預約</CourseReserveBtn>
              </ButtonArea>
            </CourseItem>
            </li>)
          }
        </CourseList>
      </PageWidth>
    </CoursesStyle>
  </>
}

export default Courses