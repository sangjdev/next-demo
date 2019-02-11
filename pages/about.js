import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const DynamicComponent = dynamic(() => import('../components/header'));

const about = () => {
  return (
    <div>
      <DynamicComponent />
      hello about page!
      <Link href="/dynamic">dynamic</Link>
    </div>
  );
};

export default about;
