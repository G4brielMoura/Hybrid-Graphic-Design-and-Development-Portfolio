import  {Header} from "./_components/header"
import Main  from "./_components/main"
import Footer  from "./_components/footer"
import PageWrapper from "./_components/pagewrapper"
export default function Home (){
  
  return (
    <PageWrapper>
    <div className="max-w-screen-xl xl:max-w-[1102px] mx-auto  sm:px-6 lg:px-8">
    <main>

        <Header />
        <Main />
        <Footer />

    </main>
    </div>
  </PageWrapper>
)
}