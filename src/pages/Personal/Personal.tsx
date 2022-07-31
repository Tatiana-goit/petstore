import React from 'react'
import Container from '../../components/Container/Container'
import FindOrder from '../../components/FindOrder/FindOrder'
import MakeOrder from '../../components/MakeOrder/MakeOrder'

export default function Personal() {
  return (
    <Container>
      <div>Personal page</div>
      <FindOrder />
      <MakeOrder />
    </Container>
  )
}
