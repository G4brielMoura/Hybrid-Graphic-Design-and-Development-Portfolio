import {Header}  from "../_components/header";
import Footer from "../_components/footer";
import PageWrapper from "../_components/pagewrapper"
import Portfolio from "../_components/portfolio"
export default function About() {
  
return (
  <PageWrapper>
    <div className="max-w-screen-xl xl:max-w-[1102px] mx-auto  sm:px-6 lg:px-8">
      <Header />
      <Portfolio />
    </div>
  </PageWrapper>
)

}