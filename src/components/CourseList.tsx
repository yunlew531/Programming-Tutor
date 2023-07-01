import styled from "@emotion/styled";
import SectionTitle from "src/components/Home/SectionTitle";

const CourseListStyle = styled.ul`
  display: flex;
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

interface ICourseProps {
  title: string;
  courses: ICourse[];
}

function CourseList({courses, title}: ICourseProps) {
  return <>
     <SectionTitle text={title} />
     <CourseListStyle>
       {courses.map(course => 
        <RecommendedCourseItem>
          <div className="course-card-header">
            <img className='person-photo' src={course.teacherPhoto} alt="person" />
            <p className='person-name'>{course.teacherName}</p>
            <p className='course-title'>{course.title}</p>
            <p className='course-subtitle'>{course.category}</p>
            <p className='course-content'>{course.content}</p>
          </div>
          <div className="course-card-footer">
            <span className='course-time'>{course.courseLong}分鐘</span>
            <span className='course-price'>NT${course.price}</span>
          </div>
        </RecommendedCourseItem>)}
    </CourseListStyle>
  </>
}

export default CourseList