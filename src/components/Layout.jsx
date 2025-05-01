import { BrowserRouter } from "react-router-dom";
import Header from './header';

export default function Layout({ children }) {
  return (
    <BrowserRouter>
      <div className="mx-auto p-8">
        <Header />
      </div>
      <main className="text-center max-h-screen">
          {children}
        </main>
    </BrowserRouter>
  );
}