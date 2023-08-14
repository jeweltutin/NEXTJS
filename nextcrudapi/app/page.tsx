import Hero from './components/ecom/Hero';
import NewProducts from './components/ecom/NewProducts';
import Testimonial from './components/ecom/Testimonial';
import Frontend from './components/layouts/Frontend';


export default async function Home() {
  return (
    <main>
      <Frontend>
      <Hero />
      <NewProducts />
      <Testimonial />
      </Frontend>
    </main>
  )
}
