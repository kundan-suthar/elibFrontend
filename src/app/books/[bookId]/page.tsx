import { Book } from "@/types";
import Image from "next/image";
import React from "react";
import DownloadButton from "./components/DownloadButton";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
  let book: Book | null = null;
  const bookId = params.bookId;
  try {
    console.log(`${process.env.BACKEND_URL}/books/${bookId}`);
    const response = await fetch(
      `${process.env.BACKEND_URL}/books/${params.bookId}`
    );
    book = await response.json();
    console.log(book);
    if (!response.ok) {
      throw new Error("error fetching book");
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred");
    }
    throw new Error("Error fetching book");
  }
  if (!book) {
    throw new Error("error getting book");
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author.name}</span>
        <p className="mt-5 text-lg leading-8">{book.description}</p>
        <DownloadButton fileLink={book.file} />
      </div>
      <div className="flex justify-end">
        <Image
          src={book.coverImage}
          alt={book.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default SingleBookPage;
