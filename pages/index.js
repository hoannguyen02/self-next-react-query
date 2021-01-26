import Link from "next/link";
import React from "react";

const Home = () => (
  <div>
    <h2 className='text-center'>Welcome to self nextjs & react-query</h2>
    <Link href='/post'>Post Page</Link>

    <style jsx>{`
      .text-center {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
