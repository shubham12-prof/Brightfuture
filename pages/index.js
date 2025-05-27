import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Subjects from './Subjects';
import Footer from '../components/Footer';
import Content from '@/components/Content';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Subjects />
        <Content />
      </main>
      <Footer />
    </>
  );
}
