import ContactSection from "@/components/ContactSection";
import Image from "next/image";
// import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-50 dark:bg-gray-900">
     {/* Hero Section */}
     <section className="w-full text-center py-20">
       <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Panchanan Smriti Chhatrabas</h1>
       <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Affordable and comfortable hostels around the Coochbehar</p>
       {/* Add search bar or call to action button here */}
     </section>

     {/* Featured Rooms Section */}
     <section className="w-full py-20">
       {/* <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">Featured Rooms</h2> */}
       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Room Card Placeholder */}
         {/* <div className="rounded-lg shadow-md p-6" > */}
           {/* <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Room Type</h3> */}
           {/* <p className="mt-2 text-gray-600 dark:text-gray-300">Description of the room.</p> */}
           {/* Add image, price, button etc. */}
         {/* </div> */}
         {/* Repeat for more rooms */}
       </div>
     </section>

     {/* Contact Section */}
     <ContactSection />

     {/* Call to Action Section */}
     <section className="w-full text-center py-20  dark:bg-[#111827] text-black dark:text-white">
       <h2 className="text-4xl font-bold">Join Panchanan Smriti Chhatrabas</h2>
       <p className="mt-4 text-xl">Your Home Away from Home! Clean rooms, peaceful environment, and all the essentials for a focused student life. Safe,and friendly</p>
       {/* Add booking button here */}
     </section>
   </div>
  );
}
