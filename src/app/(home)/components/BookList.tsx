import { Book } from "@/types";
import React from "react";
import BookCard from "./BookCard";

const BookList = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/books`);
  if (!response.ok) {
    throw new Error("error occured while fetching the books.");
  }
  const { books } = await response.json();

  return (
    <div className="mx-auto max-w-7xl py-10 grid grid-cols-1 md:grid-cols-3 gap-8 ">
      {books?.map((book: Book) => {
        return <BookCard key={book._id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
