import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type SectionComponent } from '@/interfaces/Component';

type SectionProps = StyledComponentProps<
  'section',
  DefaultTheme,
  SectionComponent,
  string | number | symbol
>;

type ArticleProps = StyledComponentProps<
  'article',
  DefaultTheme,
  SectionComponent,
  string | number | symbol
>;

export const Section = styled.section<SectionProps>((props) => `
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100vw;
  height: 60vh;
  /* text-align: left; */
  border: 4px solid ${props.theme.palette.secondary.green};
  border-radius: 15% 20% / 15% 20%;
  margin: 4px 4px 4px 4px;
  padding: 2px 2px 2px 2px;
  background-color: ${props.theme.palette.secondary.steel};
`
);

export const Article = styled.article<ArticleProps>((props) => `
  display: inline-flex;
  color: ${props.theme.palette.secondary.steel};
  font-family: ${props.theme.fonts.at(1)};
  text-shadow: ${props.theme.palette.secondary.green} 2px 2px 2px;
  text-align: center;
  border: 2px solid ${props.theme.palette.secondary.neon};
  border-radius: 5% 10% / 10% 5%;
  margin: 2px 2px 2px 2px;
  padding: 4px 2px 4px 2px;
  background-color: ${props.theme.palette.secondary.gray};
`
);
