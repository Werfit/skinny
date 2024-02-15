import { Header } from "./layout/header/header.component.tsx";
import { CompanyTitle } from "./layout/company-title/company-title.component.tsx";
import { Poll } from "./layout/poll/poll.component.tsx";
import { Footer } from "./layout/footer/footer.component.tsx";

const App = () => {
  return (
    <div>
      <Header />
      <CompanyTitle />

      <Poll />
      <Footer />
    </div>
  );
};

export default App;
