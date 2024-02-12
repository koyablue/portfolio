import { useGetArticles } from '../../../../hooks/data/useGetArticles';
import MainWrapper from '../../../common/MainWrapper';
import MainPageSectionTitle from '../common/MainPageSectionTitle';
import ArticleListItem from './ArticleListItem';

const Articles = () => {
  const { getArticles } = useGetArticles();

  const articles = getArticles();

  return (
    <MainWrapper className=''>
      <MainPageSectionTitle title='Articles' />
      <div className='w-full'>
        <ul className='flex flex-col items-center justify-center gap-2'>
          {articles.map(article =>
            <ArticleListItem key={article.id} article={article} />
          )}
        </ul>
      </div>
    </MainWrapper>
  );
};

export default Articles;
