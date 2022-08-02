import Container from '../../components/Container/Container'
import '../../scss/app.scss'
import Header from '../../components/Header/Header'
import Content from '../../components/Content/Content'

export default function HomePage() {
  return (
    <Container>
      <div className="wrapper">
        <Header />
        <Content />
      </div>
    </Container>
  )
}
