import { articles } from '../../staticData/articles';
import { Article } from '../../types/articles';

export const useGetArticles = () => {
  const getArticles = (): Article[] => articles;

  return  { getArticles }
};
