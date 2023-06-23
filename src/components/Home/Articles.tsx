import PageWidth from "../PageWidth";
import SectionTitle from "./SectionTitle";
import styled from '@emotion/styled';

const ArticlesStyle = styled.div<IThemeProps>`
  padding: 80px 100px;
  background-color: ${({theme: {color: {black_200}}}) => black_200};
`;

const ArticleList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: -88px;
`

const ArticleItem = styled.li<IThemeProps>`
  margin-right: 88px;
  width: 352px;
  color: ${({theme: {color: {white_100}}}) => white_100};
  .article-img {
    width: 100%;
    margin-bottom: 16px;
  }
  .title {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: bold;
  }
  .content {
    margin-bottom: 16px;
  }
  .more-btn {
    display: block;
    text-align: right;
    color: ${({theme: {color: {green_100}}}) => green_100};
  }
`

interface ArticleProps {
  articles: IArticle[];
}

function Article({articles}: ArticleProps) {

  return <>
    <ArticlesStyle>
      <PageWidth>
        <SectionTitle text="文章分享"></SectionTitle>
        <ArticleList>
          {
            articles.map(article => 
              <ArticleItem key={article.title}>
                <img className="article-img" src={article.image} alt={article.title} />
                <h4 className="title">{article.title}</h4>
                <p className="content">{article.content}</p>
                <a href="/" className="more-btn">MORE</a>
              </ArticleItem>)
          }
        </ArticleList>
      </PageWidth>
    </ArticlesStyle>
  </>
}

export default Article;