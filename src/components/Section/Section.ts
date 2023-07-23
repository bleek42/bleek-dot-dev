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

export const Section = styled.section<SectionProps>(
  (props) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  border: 4px solid ${props.theme.palette.secondary.green};
  border-radius: 15% 20% / 15% 20%;
    padding: 8px 8px 8px 8px;
  margin: 6px 6px 6px 6px;
  background-color: ${props.theme.palette.secondary.steel};
  min-height: 60vh;
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

// eslint-disable-next-line prettier/prettier
export const Article = styled.article<ArticleProps>((props) => `
  color: ${props.theme.palette.secondary.steel};
  background-color: ${props.theme.palette.secondary.gray};
  font-family: var(${props.theme.fonts.at(1)});
  text-shadow: ${props.theme.palette.secondary.green} 2px 2px 2px;
  border: 2px solid ${props.theme.palette.secondary.neon};
  border-radius: 5% 5% / 5% 5%;
  min-height: 40vh;
  flex: 5 3 50vw;
  min-height: 40vh;
  padding: 12px 12px 12px 12px;
  margin: 8px 8px auto;

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
