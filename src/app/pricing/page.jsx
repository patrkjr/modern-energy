import Container from "../components/container";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import PricingUSP from "../components/pricing-usp";

export default function PricingPage(){
  return (<>
    <Layout>
      <Header/>
      <Container>
        <PricingUSP/>
      </Container>
      <Footer/>
    </Layout>
  </>)
}