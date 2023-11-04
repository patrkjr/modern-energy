import Container from "../components/container";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import QuoteBlock from '../components/quote-block';
import FAQ from '../components/faq';

export default function AboutPage(){
  return (<>
    <Layout>
      <Header/>
      <Container>
        <QuoteBlock/>
        <FAQ/>
      </Container>
      <Footer/>
    </Layout>
  </>)
}