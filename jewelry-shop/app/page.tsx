"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Star } from "lucide-react";
import { UserCircle } from "lucide-react";
import SocialIcons from "@/components/ui/socialIcons";
export default function HomePage() {
 const [isOpen, setIsOpen] = useState(false);
  const necklaces = [
      {
    name: "Aurora's Chroma",
    image: "/necklace1.png",
    description: "A cascade of gold cradling a vibrant, gemstone pendant—each hue a stolen fragment of the northern lights."
  },
  {
    name: "Serenade Heart",
    image: "/necklace2.png",
    description: "A golden heart pendant, sculpted to pulse with every breath, as if whispering secrets against your skin."
  },
  {
    name: "Blossom Nocturne",
    image: "/necklace3.png",
    description: "Diamond-encrusted petals bloom in eternal twilight, their gold vines trailing like liquid sunlight."
  }
  ]
  const products = [

  {
    name: "Celestia Solitaire",
    image: "/product1.jpg",
    description: "A celestial platinum solitaire, its transcendent diamond centerpiece catching light like captured stardust, eternally radiant."
  },
  {
    name: "Luna Frost Band",
    image: "/product2.jpg",
    description: "Iridescent silver whispers along the finger, each frost-kissed diamond accent sparkling like winter's first moonlight."
  },
  {
    name: "Obsidian Whisper",
    image: "/product3.jpg",
    description: "Gilded shadows dance across this bold statement piece, where liquid gold embraces enigmatic onyx in perfect contrast."
  }
]
  return (
    <main className=" styled-font  mx-auto ">

    <nav className="fixed top-0 left-0 w-full  z-30 bg-black/40 backdrop-blur-sm text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
<Image src="/logo.png" alt="Logo" width={125} height={100} className="rounded-full" />
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#collection" className="hover:underline">Collection</a></li>
          <li><a href="#reviews" className="hover:underline">Reviews</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with transition */}
      <div
        className={`md:hidden px-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mt-3 space-y-3" : "max-h-0 opacity-0"
        }`}
      >
        <a href="#collection" className="block text-sm hover:text-[#D4AF37]">Collection</a>
        <a href="#reviews" className="block text-sm hover:underline">Reviews</a>
        <a href="#contact" className="block text-sm hover:underline">Contact</a>
      </div>
    </nav>





      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative min-h-[100vh] max-h-[750px] rounded-lg overflow-hidden mb-10">
  {/* Background Image */}
  <Image
    src="/hero.jpg"
    alt="Hero Background"
    fill
    className="object-cover brightness-70"
    priority
  />

  {/* Overlay Content */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 text-white text-center">
    {/* Logo/Header */}
    <header className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6">
      <p className="text-3xl font-extrabold tracking-wide">Ophelia</p>
    </header>

    {/* Hero Text */}
    <div>
      <h1 className="text-5xl sm:text-6xl font-bold mb-4">Jewelry with Soul</h1>
      <p className="text-lg sm:text-xl font-light max-w-xl mx-auto">
        Handcrafted elegance that tells your story. Timeless beauty made for you.
      </p>
    </div>
  </div>
</section>


      {/* Carousel Section */}
      <section className="mb-10  max-w-6xl p-4 mx-auto">
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} >
          <div>
            <Image
              src="/jewel1.jpg"
              alt="Carousel 1"
              width={1000}
              height={250}
              className="object-cover  h-[450px] w-full"
            />
          </div>
          <div>
            <Image
              src="/jewel2.jpg"
              alt="Carousel 2"
              width={1000}
              height={250}
              className=" object-cover  h-[450px] w-full"
            />
          </div>
          <div>
            <Image
              src="/jewel3.jpg"
              alt="Carousel 3"
              width={1000}
              height={250}
              className=" object-cover  h-[450px] w-full"
            />
          </div>
        </Carousel>
      </section>

      {/* Product Grid */}
      <section  id="collection" className="py-8 scroll-mt-40 md:scroll-mt-20 max-w-5xl p-4 mx-auto">
        <h2 className="text-2xl text-[#2a3d66]  font-semibold text-center mb-6">
         Trinity Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="rounded-lg   bg-white
                shadow-md overflow-hidden   "
            >


              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full h-[275px] mb-3"
              />
              <p className="font-bold text-md px-3 text-left  text-[#03346E]">
                {product.name}
              </p>
  <p className=" font-medium  text-xs/6   text-left px-3 my-3 line text-blue-950">
                {product.description}
              </p>


            </div>
          ))}
        </div>
      </section>

      <section className="py-8  max-w-5xl p-4 mx-auto">
        <h2 className="text-2xl text-[#2a3d66]  font-semibold text-center mb-6">
         Zeus Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {necklaces.map((product, i) => (
            <div
              key={i}
              className="rounded-lg   bg-white
               shadow-md overflow-hidden   "
            >


              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full h-[275px] mb-3"
              />
              <p className="font-bold text-md px-3 text-left  text-[#03346E]">
                {product.name}
              </p>
  <p className=" font-medium  text-xs/6   text-left px-3 my-3 line text-blue-950">
                {product.description}
              </p>


            </div>
          ))}
        </div>
      </section>

     

      {/* Customer Reviews Section */}
<section  id="reviews" className="py-10  scroll-mt-40 md:scroll-mt-20 max-w-6xl mx-auto  text-center">
    <h2 className="text-2xl font-semibold text-[#2a3d66]  mb-6">What Our Customers Say</h2>

  <div className="flex bg-white flex-col rounded-lg md:flex-row ">
    <Image src={"/customer.png"} alt="Customer Reviews" width={1000} height={250} className="object-cover  h-[450px] w-full md:w-5/10" />
    <div className=" mx-auto flex flex-col justify-evenly gap-5  items-center py-4 px-4">
      <div className="bg-white p-4 rounded-lg space-y-5  border-1 shadow">
        <p className=" text-[#03346E] ">"Absolutely loved the pearl necklace. Beautiful craftsmanship!"</p>
        <p className="mt-2 font-medium  text-[#D4AF37]  text-sm "> <UserCircle size={20}  className="inline-block self-center " /> Aisha R. </p>
      
        
      </div>
      <div className="bg-white p-4 space-y-5 rounded-lg shadow">
        <p className="text-[#03346E]">"My ring was even better than I expected. Fast delivery too!"</p>
        <p className="mt-2 font-medium text-sm text-[#D4AF37]"> <UserCircle size={20}  className="inline-block self-center " /> Kevin D.</p>
      </div>
      <div className="bg-white p-4 rounded-lg  space-y-5 shadow">
        <p className="text-[#03346E] ">"ShineCraft has become my go-to place for gifts!"</p>
        <p className="mt-2 font-medium text-sm text-[#D4AF37] "> <UserCircle size={20}  className="inline-block self-center " /> Priya M.</p>
      </div>
    </div>
  </div>
</section>

{/* Store Address Section */}
<section id="contact" className="mt-15 max-w-6xl mx-auto flex scroll-mt-40 md:scroll-mt-20   flex-col md:flex-row  justify-between bg-white text-center">
<div className=" flex flex-col my-5 w-full gap-5  justify-center items-center">
 
   
   <h2 className="text-2xl text-[#D4AF37] font-semibold mb-4">Visit Our Store</h2>
   <p className="text-[#03346E]">ShineCraft Jewelry Boutique</p>
   <p className="text-[#03346E]">123 Royal Road, Curepipe, Mauritius</p>
   <p className="text-[#03346E]">Open: Mon – Sat, 9am – 6pm</p>
     <p className="text-[#03346E]"> call us on : <span className="font-semibold
   
     ">57896544</span></p>

     <SocialIcons/>
 </div>

<Image src={"/storefront.png"} alt="Storefront" width={1000} height={250} className="object-cover  h-[450px]w-full  md:w-5/10" />

</section>
    <footer className=" mt-10 py-6 text-sm text-[#03346E]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Ophelia Jewelry. All rights reserved.</p>
        <p className="mt-1">Crafted with elegance in Mauritius.</p>
      </div>
    </footer>

    </main>
  );
}
