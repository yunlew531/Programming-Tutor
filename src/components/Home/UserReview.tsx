import styled from "@emotion/styled";
import PageWidth from "../PageWidth";

const UserReviewStyle = styled.div<IThemeProps>`
  background-color: ${({theme: {color: {black_100}}}) => black_100};
  padding: 80px 0;
  text-align: center;
  .title {
    font-size: 28px;
    color: ${({theme: {color: {white_100}}}) => white_100};
    margin-bottom: 64px;
  }
`;

const PhotoGroup = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 396px 160px 0;
`;

const Review = styled.div<IThemeProps>`
  width: 416px;
  background-color: ${({theme: {color: {white_100}}}) => white_100};
  border-radius: 10px 10px 10px 0;
  position: absolute;
  bottom: -30px;
  right: -396px;
  padding: 32px;
  .review-title {
    font-size: 18px;
    color: ${({theme: {color: {black_200}}}) => black_200};
    margin-bottom: 16px;
  }
  .user-photo {
    position: absolute;
    top: 0;
    right: 20px;
    transform: translateY(-50%);
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
`;

const JoinUs = styled.div<IThemeProps>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme: {color: {black_200}}}) => black_200};
  border-radius: 15px;
  /* margin: 80px 0; */
  margin: 0 auto;
  padding: 48px;
  color: ${({theme: {color: {white_100}}}) => white_100};
  .material-icons-outlined.menu_book {
    font-size: 80px;
    color: ${({theme: {color: {gray_100}}}) => gray_100};
    margin-right: 80px;
  }
  .join-content-area {
    margin-right: 96px;
  }
  .join-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
  }
`;

const JoinButton = styled.button<IThemeProps>`
  color: ${({theme: {color: {white_100}}}) => white_100};
  border: 1px solid ${({theme: {color: {white_100}}}) => white_100};
  border-radius: 5px;
  background-color: ${({theme: {color: {black_200}}}) => black_200};
  padding: 8px 32px;
`;

function UserReview() {
  return <>
    <UserReviewStyle>
      <PageWidth>
        <p className="title">專屬你的學習課程<br />超過 3000 位學員得到了程式超能力</p>
        <PhotoGroup>
          <img src="src/assets/images/book.jpg" alt="book" />
          <Review>
            <p className="review-title">老師很有耐心</p>
            <p>老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！</p>
            <img className="user-photo" src="https://images.unsplash.com/photo-1563620948-9c43672162ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
          </Review>
        </PhotoGroup>
        <JoinUs>
          <span className="material-icons-outlined menu_book">menu_book</span>
          <div className="join-content-area">
            <p className="join-title">加入我們成為導師</p>
            <p className="content">歡迎各大程式大神加入我們，用知識在世界留下一點影響力。</p>
          </div>
          <JoinButton>立即預約</JoinButton>
        </JoinUs>
      </PageWidth>
    </UserReviewStyle>
  </>
}

export default UserReview;