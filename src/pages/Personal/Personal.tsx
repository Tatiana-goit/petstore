import React from 'react'
import Container from '../../components/Container/Container'
import FindOrder from '../../components/FindOrder/FindOrder'
import MakeOrder from '../../components/MakeOrder/MakeOrder'
import Cart from "../../components/Cart/Cart"

export default function Personal() {
  return (
    <Container>
      <Cart/>
      <FindOrder />
      <MakeOrder />
    </Container>
  )
}
