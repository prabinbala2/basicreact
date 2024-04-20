
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
    <Header />
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Hero/>
    </div>
    <Features />
    </>
  );
}

export default App;
