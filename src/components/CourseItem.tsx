import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const CourseItemStyle = styled.div<IThemeProps>`
  display: flex;
  background-color: ${({theme: {color: {black_200}}}) => black_200};
  padding: 48px;
  border-radius: 15px;
  margin-bottom: 32px;
`;

const TeacherArea = styled.div<IThemeProps>`
  margin-right: 48px;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-bottom: 8px;
  }
  color: ${({theme: {color: {white_100}}}) => white_100};
`;

const ContentArea = styled.div<IThemeProps>`
  flex-grow: 1;
  margin-right: 48px;
  .course-title {
    font-size: 24px;
    color: ${({theme: {color: {white_100}}}) => white_100};
    margin-bottom: 4px;
  }
  .course-category {
    color: ${({theme: {color: {green_100}}}) => green_100};
    margin-bottom: 8px;
  }
  .course-content {
    color: ${({theme: {color: {white_100}}}) => white_100};
  }
`;

interface ICourseItemProps extends PropsWithChildren {
  course: ICourse;
}

function CourseItem({course, children}: ICourseItemProps) {

  return <>
    <CourseItemStyle>
      <TeacherArea>
        <img src={course.teacherPhoto} alt={course.teacherName} />
        <p>{course.teacherName}</p>
      </TeacherArea>
      <ContentArea>
        <h2 className="course-title">{course.title}</h2>
        <p className="course-category">{course.category}</p>
        <p className="course-content">{course.content}</p>
      </ContentArea>
      {children}
    </CourseItemStyle>
  </>
}


export default CourseItem