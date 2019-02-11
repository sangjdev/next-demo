import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <div>
      Welcome to next.js!
      <Link href="/about">
        <a>here</a>
      </Link>
    </div>
  );
};

export default index;
