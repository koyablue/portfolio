import { Article } from '../../../../types/articles';

type Props = {
  article: Article
};

const ArticleListItem = ({ article }: Props) => {
  return (
    <li className='w-full max-w-6xl p-3 bg-clrPaleBlue border rounded border-slate-400 truncate dark:bg-sky-400/10 dark:border-none'>
      <p className='mb-1 text-sm font-semibold leading-none dark:text-clrWhiteOpa'>{article.platform}</p>
      <a href={article.url} target='_blank' rel='noreferrer' className='text-xl text-indigo-400 underline dark:text-sky-400'>
        {article.title}
      </a>
    </li>
  );
};

export default ArticleListItem;
