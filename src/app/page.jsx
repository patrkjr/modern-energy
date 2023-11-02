import Link from "next/link"
import Container from "./components/container"
import Layout from "./components/layout"
import Header from "./components/header"
import Hero from "./components/hero"
import Brands from './components/brands'
import Steps from './components/steps';
import Footer from './components/footer';
import CallToSignUp from './components/call-to-sign-up';

export default function Home() {
  return (
    <Layout>
      <Header/>
      <Container>
        <Hero/>
        {/* <Brands/> */}
        <Steps/>
        <CallToSignUp/>
      </Container>
      <Footer/>
    </Layout>
  )
}
