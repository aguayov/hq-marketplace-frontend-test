import { colors } from "consts"
import styled from "@emotion/styled"

interface InputProps {
  padding?: string
  cursor?: string
  background?: string
  fontFamily?: string
  color?: string
  weight?: string
  minWidth?: string
  maxWidth?: string
  margin?: string
  width?: string
  border?: string
  borderRadius?: string
  outline?: string
}

interface LabelProps {
  flexGrow?: string
  flexShrink?: string
  marginBottom?: string
  width?: string
}

export const InputStyled = styled.input<InputProps>`
  border: none;
  width: 100%;
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
  background: ${({ background = colors.gray60 }) => background};
  font-size: 16px;
  font-family: ${({ fontFamily }) => fontFamily};
  line-height: 24px;
  color: ${({ color = colors.black }) => color};
  font-weight: ${({ weight = "normal" }) => weight};

  :focus {
    outline: none;
  }

  &.nestedInput {
    margin: 6px 0;
  }

  &.default {
    min-width: ${({ minWidth = "370px" }) => minWidth};
    max-width: ${({ maxWidth = "418px" }) => maxWidth};
    background: none;
    border: 1px solid ${colors.gray200};
    border-radius: 2px;
    padding: ${({ padding = "12px" }) => padding};
    outline: none;
    margin: ${({ margin = "16px 0" }) => margin};
  }

  &.styled-input {
    width: ${({ width = "100%" }) => width};
    border: ${({ border = `1px solid ${colors.gray200}` }) => border};
    border-radius: ${({ borderRadius = "4px" }) => borderRadius};
    padding: ${({ padding = "12px" }) => padding};
    margin: ${({ margin = "16px" }) => margin};
    outline: ${({ outline = "none" }) => outline};
  }

  &.hideme {
    display: none;
    visibility: hidden;
  }

  &.showme {
    display: inline;
    visibility: visible;
  }

  ::placeholder {
    color: ${colors.tukiosInputGray};
    font-family: "Inter", sans-serif;
  }
`

export const LabelStyled = styled.label<LabelProps>`
  background: ${colors.gray60};
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  border-bottom: 2px solid ${colors.gray550};
  margin-bottom: ${({ marginBottom = "20px" }) => marginBottom};
  color: ${colors.bluegray200};
  width: ${({ width = "100%" }) => width};

  &.default {
    background: none;
    margin: 0;
    padding: 0;
    border-bottom: none;
  }

  &:hidden {
    visibility: hidden;
  }

  &.label-default {
    background: none;
    margin: 0;
    padding: 0;
    border-bottom: none;
  }
`
