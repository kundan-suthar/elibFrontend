import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export default async function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<Loader />}>
        <BookList />
      </Suspense>
    </div>
  );
}
