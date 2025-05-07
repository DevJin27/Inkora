import React from "react";
import NavBar from "./NavBar";
import categories from "./assets/data";

const BookCard = ({ book }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
    <img
      src={book.cover}
      alt={book.title}
      className="h-60 w-full object-cover rounded-t-xl"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.author}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-green-600 font-bold">₹{book.price}</span>
        <button className="bg-black text-white px-4 py-1 rounded hover:bg-blue-700 transition">
          Buy
        </button>
      </div>
    </div>
  </div>
);

const CategorySection = ({ title, books }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  </section>
);

const Buy = () => {
  return (
    <>
      <NavBar />
      <div className="p-6 bg-gray-100 min-h-screen">
      {Object.entries(categories).map(([title, books]) => (
        <CategorySection key={title} title={title} books={books} />
      ))}
    </div></>
  );
};

export default Buy;
// import React from "react";