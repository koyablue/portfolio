import { articles } from '../../staticData/articles';
import { Article } from '../../types/articles';

export const useGetArticles = () => {
  // TODO: Replace with dev.to API
  const getArticles = (): Article[] => articles;

  return  { getArticles }
};
