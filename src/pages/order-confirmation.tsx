import React from "react"
import { Text } from "components"
import Confetti from "react-confetti"
import { useSpring, animated } from "react-spring"

const OrderConfirmationPage: React.FC = () => {
  // ============================== HOOKS ===================================
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  })

  // ============================== RENDER ===============================
  return (
    <React.Fragment>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <animated.div style={fade}>
        <Text textAlign="center" kind="f1" margin=" 1em initial initial">
          {`Thank You!`}
        </Text>
      </animated.div>
      <animated.div style={fade}>
        <Text textAlign="center" kind="f2" margin=" 1em initial initial">
          {`Congratulations, you successfully completed HQ's coding test!`}
        </Text>
      </animated.div>
    </React.Fragment>
  )
}

export default OrderConfirmationPage
