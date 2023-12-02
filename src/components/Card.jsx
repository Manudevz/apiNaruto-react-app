import { Card } from "@nextui-org/react"

// eslint-disable-next-line react/prop-types
export const CustomCard = ({name}) => {
  console.log("🚀 ~ file: Card.jsx:4 ~ Card ~ name:", name)
  return (
    <Card>
      <p>personaje</p>
      <p>{name}</p>
    </Card>
  )
}
