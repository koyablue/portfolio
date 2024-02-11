import GitHubCalendar from 'react-github-calendar';
import { useColorTheme } from '../../../../hooks/useColorTheme';
import { DEV_TO_URL, ZENN_URL } from '../../../../constants';
import { ReactNode } from 'react';

const P = ({ children }: { children?: ReactNode }) => <p className='dark:text-slate-100'>{children}</p>;

const A = ({ href, children }: { href: string; children?: ReactNode }) => <a href={href} target='_blank' rel='noreferrer' className='text-indigo-400 dark:text-sky-500 underline'>{children}</a>

/**
 * Self introduction section of main page.
 *
 * @return {JSX.Element}
 */
const Description = () => {
  const { currentColorThemeState } = useColorTheme();

  return (
    <div className='
      flex justify-center
      box-border py-12
      md:px-28
      md:py-16'
    >
      <div className='flex flex-col flex-1 items-center
      tracking-wide
       text-sm
       bg-clip-content
       bg-indigo-400/10
       md:rounded-3xl
       md:text-lg
       md:p-4
       dark:bg-slate-800
       dark:text-clrWhiteOpa'
      >
        <div className='p-8 leading-relaxed'>
          <div className='mb-6'>
            <p className='text-4xl dark:text-slate-100'>Hi 👋</p>
            <p className='text-4xl dark:text-slate-100'>I&apos;m <span className='text-5xl text-indigo-400 dark:text-sky-500'>Koya Aoyama</span> 🧑🏻‍💻</p>
          </div>

          <P>
            {/* eslint-disable-next-line max-len */}
            Software engineer with 3.5 years of experience who loves learning new skills and creating applications.
          </P>
          <P>
            {/* eslint-disable-next-line max-len */}
            Regularly writes articles on <A href={DEV_TO_URL}>dev.to</A> and <A href={ZENN_URL}>Zenn</A> to share knowledge.
          </P>
          <P>
            Goal-oriented and passionate about development, with several personal projects.
          </P>
          <br />
          <P>
          <b>Skills and Experience:&nbsp;</b>
          <br />
            TypeScript, React, Next.js, Redux, Zustand,
            <br />
            Node.js, Express, Jest, React Testing Library,
            <br />
            Linux, PHP, Laravel, MySQL, PostgreSQL, Supabase, REST APIs,
            <br />
            Git, GitHub, GitHub Actions etc.
          </P>
          <br />
          <p className='dark:text-slate-100 font-bold'>
            Please contact me if you are interested!
          </p>
        </div>
        {/* GitHub contribution chart */}
        <div className='p-4 rounded'>
          <GitHubCalendar
            username='koyablue'
            hideColorLegend
            colorScheme={currentColorThemeState === 'dark' ? 'dark' : 'light'}
          />
        </div>
      </div>
    </div>
  )
}

export default Description
