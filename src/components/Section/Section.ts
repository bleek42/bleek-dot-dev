import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type SectionComponent } from '@/interfaces/Component';

type SectionProps = StyledComponentProps<
  'section',
  DefaultTheme,
  SectionComponent,
  string | number | symbol
> &
  SectionComponent;

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
  border: 4px solid ${props.theme.palette.secondary.green};
  border-radius: 15% 20% / 15% 20%;
  margin: 4px 4px 4px 4px;
  padding: 2px 2px 2px 2px;
  background-color: ${props.theme.palette.secondary.steel};
  /* width: 100vw;
  height: 60vh; */
  /* text-align: left; */

  @media (max-width: ${props.theme.breakpoints.phone}) {
    /* display: none; */
    /* font-size: 28px;
    min-height: 50%; */
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */
    
  }

`
);

export const Article = styled.article<ArticleProps>((props) => `
  color: ${props.theme.palette.secondary.steel};
  background-color: ${props.theme.palette.secondary.gray};
  font-family: ${props.theme.fonts.at(1)};
  text-shadow: ${props.theme.palette.secondary.green} 2px 2px 2px;
  border: 2px solid ${props.theme.palette.secondary.neon};
  text-align: left;
  border-radius: 10% 10% / 10% 10%;
  margin: 2px 2px 2px 2px;
  padding: 4px 2px 4px 2px;

  @media (max-width: ${props.theme.breakpoints.phone}) {
    /* display: none; */
    /* font-size: 28px;
    min-height: 50%; */
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */
    
  }

`
);
