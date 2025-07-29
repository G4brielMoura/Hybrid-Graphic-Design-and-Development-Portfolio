import PageWrapper from "../_components/pagewrapper"
import Form  from "../_components/form";
import { Header } from "../_components/header";
import InteractiveShowCase from "../_components/InteractiveShowcase"
export default function Contacts() {
  
return (
  <PageWrapper>
    <div className="max-w-screen-xl xl:max-w-[1102px] mx-auto  sm:px-6 lg:px-8">
      <Header />
      <Form />
      <InteractiveShowCase />
    </div>
  </PageWrapper>
)

}