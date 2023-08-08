// components/Loader.tsx
import React from "react"
import { MutatingDots } from "react-loader-spinner"
import { Flex, Text } from "components"
import { colors } from "consts"

interface LoaderProps {
  height?: number
  width?: number
  text?: string
}

const LoaderComponent: React.FC<LoaderProps> = ({
  height = 100,
  width = 100,
  text = "loading...",
}) => {
  // ============================== RENDER ===============================
  return (
    <Flex
      column
      justify="center"
      align="center"
      height="100vh"
      width="100vw"
      position="fixed"
      top="0"
      left="0"
      background="rgba(255, 255, 255, 0.9)"
      zIndex="9999"
    >
      <MutatingDots
        color={colors.green}
        secondaryColor={colors.blue}
        height={height}
        width={width}
        ariaLabel="loading"
        radius="12.5"
        visible={true}
        wrapperStyle={{}}
        wrapperClass=""
      />
      <Text>{text}</Text>
    </Flex>
  )
}

export default LoaderComponent
