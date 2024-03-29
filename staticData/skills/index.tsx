// types
import { SkillRawData } from '../../types/skills'

// components
import {
  ReactDotJsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  NextDotJsIcon,
  NodeDotJsIcon,
  JestIcon,
  TailwindCssIcon,
  HtmlIcon,
  CssIcon,
  PhpIcon,
  LaravelIcon,
  MySqlIcon,
  LinuxIcon,
  AwsIcon,
  GitIcon,
  GitHubActionsIcon,
  StorybookIcon,
  TestingLibraryIcon,
} from '../../components/pages/main/skills/skillIcons'

export const skills: SkillRawData[] = [
  { name: 'React', icon: <ReactDotJsIcon /> },
  { name: 'TypeScript', icon: <TypeScriptIcon />, },
  { name: 'Next.js', icon: <NextDotJsIcon />, },
  { name: 'Node.js', icon: <NodeDotJsIcon />, },
  { name: 'Jest', icon: <JestIcon />, },
  { name: 'Testing Library', icon: <TestingLibraryIcon />, },
  { name: 'Storybook', icon: <StorybookIcon />, },
  { name: 'Tailwind CSS', icon: <TailwindCssIcon />, },
  { name: 'HTML', icon: <HtmlIcon />, },
  { name: 'CSS', icon: <CssIcon />, },
  { name: 'JavaScript', icon: <JavaScriptIcon />, },
  { name: 'PHP', icon: <PhpIcon />, },
  { name: 'Laravel', icon: <LaravelIcon />, },
  { name: 'MySQL', icon: <MySqlIcon />, },
  { name: 'Linux', icon: <LinuxIcon />, },
  { name: 'AWS', icon: <AwsIcon />, },
  { name: 'Git', icon: <GitIcon />, },
  { name: 'GitHub Actions', icon: <GitHubActionsIcon />, },
]
