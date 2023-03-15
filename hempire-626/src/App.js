import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Faq from "./routes/faq/faq.component";
import Policies from "./routes/policies/policies.component";
import Contact from "./routes/contact/contact.component";
import Shop from "./routes/shop/shop.component";
import Location from "./routes/location/location.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/location" element={<Location />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
