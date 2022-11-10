import React from "react";
import {Link} from "react-router-dom";
import { HiShoppingBag, HiChevronRight } from "react-icons/hi";

const EmptyWishlist = () => {
  return (
    <div className="container mx-auto py-4 my-2 text-center flex flex-col justify-center items-center gap-5">
      <HiShoppingBag
        style={{ color: "rgb(240, 41, 74)" }}
        size={160}
      ></HiShoppingBag>
      <Link to="/">
        <button className="backBtn browseBtn bg-sky-500 p-2 rounded-md mx-2 flex flex-row justify-center items-center gap-2">
          Browse Products <HiChevronRight />
        </button>
      </Link>
    </div>
  );
};
export default EmptyWishlist;