import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: Book }) => {
  console.log(book);
  return (
    <div className="flex gap-5 border p-5 shadow-md border-primary-400 rounded-md">
      <div className="">
        <Image
          src={book?.coverImage}
          alt="book cover"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "10rem", height: "12rem", borderRadius: "5px" }}
        />
      </div>
      <div className=" ">
        <h2 className="line-clamp-2 text-xl font-bold text-primary-600 ">
          {book.title}
          {/* {book.title.length > 10
            ? `${book.title.slice(0, 10)}...`
            : book.title} */}
        </h2>
        <p className="text-primary-900 font-bold mt-2">{book.author.name}</p>
        <Link
          href={`/books/${book._id}`}
          className="border border-primary-200 py-2 px-4 rounded-md mt-3 inline-block text-primary-800
          hover:bg-primary-300 hover:text-primary-800"
        >
          read more
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
