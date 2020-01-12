import styledBreakpoint from '@humblebee/styled-components-breakpoint'
import styled from 'styled-components'
import { withDynamicTag } from '../lib/utils'
import { theme } from './theme'

export const breakpoint = styledBreakpoint({
  phone: theme.breakpoints.phone,
  tablet: theme.breakpoints.tablet,
  desktop: theme.breakpoints.desktop,
  large: theme.breakpoints.large,
  max: theme.breakpoints.max
})

export const Halign = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${theme.gutterMedium};

  ${breakpoint.up('tablet')`
    padding: 0 ${theme.gutterLarge};
  `}
`

export const HalignSmall = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 ${theme.gutterMedium};

  ${breakpoint.up('tablet')`
    padding: 0 ${theme.gutterLarge};
  `}
`

export const Section = styled.section`
  padding-top: ${theme.gutter};
`

export const FontSmall = `
  font-family: ${theme.fontfamilyPrimary};
  font-size: 12px;
  line-height: 1em;
  font-weight: regular;
`

export const FontMedium = `
  font-family: ${theme.fontfamilyPrimary};
  font-size: 0.88em;
  line-height: 1em;
  font-weight: 400;

  ${breakpoint.up('max')`
    font-size: 16px;
  `}
`

export const FontLarge = `
  font-family: ${theme.fontfamilyPrimary};
  font-size: 1.33em;
  line-height: 1.3em;  
  font-weight: 600;

  ${breakpoint.up('max')`
    font-size: 24px;
  `}
`

export const ParagraphText = withDynamicTag(styled.p`
  font-family: ${theme.fontfamilyPrimary};
  font-size: 1em;
`)

export const MediumParagraphText = withDynamicTag(styled.p`
  font-family: ${theme.fontfamilyPrimary};
  font-size: 1.1em;
`)


// This mixin can be extended on component level
// for grid like components.
export const Row = withDynamicTag(styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`)

export const UserGenerated = styled.div`
  font-family: ${theme.fontFamily};

  h1, h2, h3, h4 {
    margin-top: ${({ theme }) => theme.gutter};
    margin-bottom: ${({ theme }) => theme.gutter};
    font-family: ${theme.fontfamilySecondary};
    font-size: 2.14em;
    line-height: 1.13em;
    margin-left: -${({ theme }) => theme.gutter};
  }

  ul {
     margin-bottom: ${({ theme }) => theme.gutter};
     margin-left: -${({ theme }) => theme.gutter};

     li {
       margin-bottom: ${({ theme }) => theme.gutterSmall};
       padding-left: ${({ theme }) => theme.gutter};
       position: relative;
       &:before {
         content: '';
         background: ${({ theme }) => theme.colorAccent};
         width: 5px;
         height: 5px;
         border-radius: 50%;
         display: block;
         position: absolute;
         left: 0;
         top: 0.5em;
       }
     }
  }
`