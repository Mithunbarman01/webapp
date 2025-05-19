'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 pb-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
          Welcome to Panchanan Smriti Chhatrabas
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Your home away from home, providing comfortable and affordable accommodation
           students.
        </p>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              About Our Hostel
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            Panchanan Smriti Chhatrabas has been serving  since 1954,Thakur Panchanan Barma donated fund for this hostel.
              PSC hostel only for SC and ST Communitie  students Our mission is to provide a safe and
              welcoming environment where students can read, go to colleges, and create lasting
              future.
            </p>
            <ul className="grid gap-4 text-lg text-gray-700 dark:text-gray-200">
              <li className="flex items-center space-x-3 transition-transform hover:translate-x-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>24/7 Security and Reception</span>
              </li>
              <li className="flex items-center space-x-3 transition-transform hover:translate-x-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Clean and Comfortable Rooms</span>
              </li>
              <li className="flex items-center space-x-3 transition-transform hover:translate-x-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Food two times</span>
              </li>
              <li className="flex items-center space-x-3 transition-transform hover:translate-x-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Common Kitchen Facilities</span>
              </li>
              <li className="flex items-center space-x-3 transition-transform hover:translate-x-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Hostel have own playground for play cricket ,volleyball and many other games </span>
              </li>
            </ul>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform">
            <Image
              src="/hostel.jpg"
              alt="PSC Hostel Main Area"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Our Facilities
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Accommodation
            </h3>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Choose from our range of rooms including dormitories, one room two students can be shere. All rooms are equipped with comfortable beds and you need to carry a  personal
              lockers.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Common Areas
            </h3>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Enjoy our spacious common areas including a fully equipped kitchen,
              dining area, lounge with TV, and outdoor terrace perfect for socializing.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Services
            </h3>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              various services including 24/7 Light, luggage storage,
              mineral water facilities, and a free a terrace here you go and fell the sunsine.
            </p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Location
        </h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <p className="text-gray-700 dark:text-gray-200 text-center text-lg leading-relaxed">
            Conveniently located in the heart of the Coochbehar, Panchanan Smriti Chhatrabas is just minutes
            away from public transportation, colleges, coching, and major
            educational institution. Our central location makes it easy for Students to
            explore the knowledge and enjoy all journey  of Students life.
          </p>
        </div>
      </div>
    </div>
  );
}
