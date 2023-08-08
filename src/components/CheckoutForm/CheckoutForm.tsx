// components/CheckoutForm.tsx
import React from "react"
import { useForm } from "react-hook-form"
import { Flex, Input, Button } from "components"

type FormData = {
  customer_name: string
  customer_email: string
  customer_phone: string
  delivery_address_line1: string
  delivery_address_line2: string
  delivery_address_city: string
  delivery_address_state: string
  delivery_address_country: string
  delivery_address_zipcode: string
}

interface CheckoutFormProps {
  onSubmit: (data: FormData) => void
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  return (
    <Flex
      as="form"
      border="2px solid gray"
      borderRadius="8px"
      column
      maxWidth="600px"
      onSubmit={handleSubmit(onSubmit)}
      padding="16px"
      width="100%"
    >
      <Input
        placeholder="Customer Name"
        {...register("customer_name", { required: "This is required." })}
      />
      {errors.customer_name && <p>{errors.customer_name.message}</p>}

      <Input
        type="email"
        placeholder="Customer Email"
        {...register("customer_email", { required: "This is required." })}
      />
      {errors.customer_email && <p>{errors.customer_email.message}</p>}

      <Input
        placeholder="Customer Phone"
        {...register("customer_phone", { required: "This is required." })}
      />
      {errors.customer_phone && <p>{errors.customer_phone.message}</p>}

      <Input
        placeholder="Delivery Address Line 1"
        {...register("delivery_address_line1", {
          required: "This is required.",
        })}
      />
      {errors.delivery_address_line1 && (
        <p>{errors.delivery_address_line1.message}</p>
      )}

      <Input
        placeholder="Delivery Address Line 2"
        {...register("delivery_address_line2")}
      />

      <Input
        placeholder="City"
        {...register("delivery_address_city", {
          required: "This is required.",
        })}
      />
      {errors.delivery_address_city && (
        <p>{errors.delivery_address_city.message}</p>
      )}

      <Input
        placeholder="State"
        {...register("delivery_address_state", {
          required: "This is required.",
        })}
      />
      {errors.delivery_address_state && (
        <p>{errors.delivery_address_state.message}</p>
      )}

      <Input
        placeholder="Country"
        {...register("delivery_address_country", {
          required: "This is required.",
        })}
      />
      {errors.delivery_address_country && (
        <p>{errors.delivery_address_country.message}</p>
      )}

      <Input
        placeholder="Zipcode"
        {...register("delivery_address_zipcode", {
          required: "This is required.",
        })}
      />
      {errors.delivery_address_zipcode && (
        <p>{errors.delivery_address_zipcode.message}</p>
      )}

      <Button type="submit"> {`Place Order`} </Button>
    </Flex>
  )
}

export default CheckoutForm
