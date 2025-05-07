import React from "react";
import Navbar from "./NavBar";

const dummyBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 350,
    language: "English",
    cover:
      "https://m.media-amazon.com/images/I/81Ls+SBCLiL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 450,
    language: "English",
    cover:
      "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 280,
    language: "English",
    cover:
      "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
];

const Buy = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
       
        <aside className="w-64 p-4 border-r hidden lg:block">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Genre</label>
            <select className="w-full p-2 border rounded">
              <option>All</option>
              <option>Fiction</option>
              <option>Non-fiction</option>
              <option>Sci-Fi</option>
              <option>Romance</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Price</label>
            <input type="range" min="100" max="1000" className="w-full" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Language</label>
            <select className="w-full p-2 border rounded">
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
            </select>
          </div>
        </aside>

       
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Available Books</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dummyBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-64 w-full object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                  <p className="text-sm text-gray-500">{book.language}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-green-600 font-bold">
                      ₹{book.price}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Buy;