import Container from "../components/container";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import QuoteBlock from '../components/quote-block';

export default function AboutPage(){
  return (<>
    <Layout>
      <Header/>
      <Container>
        <QuoteBlock/>
      </Container>
      <Footer/>
    </Layout>
  </>)
}