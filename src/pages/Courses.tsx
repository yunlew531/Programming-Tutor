import styled from "@emotion/styled";
import PageWidth from "src/components/PageWidth";
import { Link } from 'react-router-dom';
import CourseItem from 'src/components/CourseItem';
import courses from 'src/assets/courses.json';

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
                <CourseIntoBtn to={'/course/1'}>課程介紹</CourseIntoBtn>
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