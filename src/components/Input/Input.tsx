import React, { forwardRef } from "react"
import * as Styled from "./Input.styled"
import type { UseFormRegisterReturn } from "react-hook-form"

export type InputType = {
  error?: string
  className?: string
  marginBottom?: string
  margin?: string
  border?: string
  isValid?: boolean
  label?: string
  type?: string
  register?: UseFormRegisterReturn
  value?: any
  name?: string
  width?: string
  padding?: string
  hidden?: boolean
  flexGrow?: string
  flexShrink?: string
  placeholder?: string
  defaultValue?: string
  disabled?: boolean
  step?: string
  min?: string | number
  max?: string | number
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
  ref?: React.Ref<HTMLInputElement>
  id?: string
  weight?: string
  fontFamily?: string
  background?: string
}

const Input = forwardRef<HTMLInputElement, InputType>(
  (
    {
      error: hasError,
      isValid,
      label,
      type,
      className,
      marginBottom,
      margin,
      border,
      width,
      padding,
      weight,
      fontFamily,
      background,
      hidden,
      flexGrow,
      flexShrink,
      onChange,
      ...inputProps
    },
    ref
  ) => {
    return (
      <Styled.LabelStyled
        {...{
          width,
          hidden,
          marginBottom,
          className,
          isValid,
          hasError,
          flexGrow,
          flexShrink,
        }}
      >
        {label}
        <Styled.InputStyled
          {...{
            type,
            className,
            padding,
            weight,
            fontFamily,
            background,
            border,
            margin,
            width,
            hidden,
            onChange,
            ref,
            ...inputProps,
          }}
        />
      </Styled.LabelStyled>
    )
  }
)

Input.defaultProps = {
  type: "text",
}

Input.displayName = "Input"

export default Input
