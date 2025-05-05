import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="text-center max-h-screen p-4">
          {children}
        </main>
    </>
  );
}