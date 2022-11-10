import React from "react";
import {Link} from "react-router-dom";
import { BsFillCartXFill} from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";

const EmptyWishlist = () => {
  return (
    <div className="container mx-auto py-4 my-2 text-center flex flex-col justify-center items-center gap-5">
      <BsFillCartXFill style={{ color: "green" }} size={160}></BsFillCartXFill>
      <Link to="/">
        <button className="backBtn browseBtn bg-sky-500 p-2 rounded-md mx-2 flex flex-row justify-center items-center gap-2">
          Browse Products <HiChevronRight />
        </button>
      </Link>
    </div>
  );
};
export default EmptyWishlist;