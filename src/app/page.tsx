import  {Header} from "./_components/header"
import Main  from "./_components/main"
import Footer  from "./_components/footer"
import PageWrapper from "./_components/pagewrapper"
export default function Home (){
  
  return (
    <PageWrapper>
    <main>

        <Header />
        <Main />
        <Footer />

    </main>
  </PageWrapper>
)
}