import {Header}  from "../_components/header";
import InteractiveShowCase from "../_components/InteractiveShowcase"
import PageWrapper from "../_components/pagewrapper"
import Portfolio from "../_components/portfolio"
export default function About() {
  
return (
  <PageWrapper>
    <div className="max-w-screen-xl xl:max-w-[1102px] mx-auto  sm:px-6 lg:px-8">
      <Header />
      <Portfolio />
      <InteractiveShowCase />
   </div>
  </PageWrapper>
)

}