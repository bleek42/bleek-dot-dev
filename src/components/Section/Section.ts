import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type SectionComponent } from 'src/interfaces/Component';

type SectionProps = StyledComponentProps<
  'section',
  DefaultTheme,
  object,
  string | number | symbol
> &
  SectionComponent;

type ArticleProps = StyledComponentProps<
  'article',
  DefaultTheme,
  object,
  string | number | symbol
>;

export const Section = styled.section<SectionProps>((props) => `
  display: flex;
  flex-flow: column nowrap;
  border: 4px solid ${props.theme.palette.secondary.green};
  border-radius: 15% 20% / 15% 20%;
  padding: 4px 4px 4px 4px;
  margin: 6px 6px;
  background-color: ${props.theme.palette.secondary.steel};

  @media (max-width: ${props.theme.breakpoints.phone}) {
    justify-content: center;
    flex-flow: column wrap;
    /* font-size: 28px;
    min-height: 50%; */
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */
    justify-content: flex-start;
    align-items: center;

  }

`,
);

// eslint-disable-next-line prettier/prettier
export const Article = styled.article<ArticleProps>((props) => `
  color: ${props.theme.palette.secondary.steel};
  background-color: ${props.theme.palette.secondary.gray};
  font-family: var(${props.theme.fonts.at(1)});
  text-shadow: ${props.theme.palette.secondary.green} 2px 2px 2px;
  border: 2px solid ${props.theme.palette.secondary.neon};
  border-radius: 5% 5% / 5% 5%;
  /* min-height: 10vh; */

  display: inline-flex;
  flex: 3 1 12vh;

  padding: 12px 12px 12px 12px;
  margin: 8px 8px;

  @media (max-width: ${props.theme.breakpoints.phone}) {
    /* display: none; */
    /* font-size: 28px;
    min-height: 50%; */
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */

  }

`,
);
