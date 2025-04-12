import { Book } from "@/types";
import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className="mx-auto max-w-7xl py-10 grid grid-cols-1 md:grid-cols-3 gap-8 ">
      {books?.map((book) => {
        return <BookCard key={book._id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
