import React, { useState } from 'react';

const UseAnimation = () => {
  const [currentPage, setCurrentPage] = useState('page1');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageChange = (nextPage) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentPage(nextPage);
      setIsTransitioning(false);
    }, 500); // Duration of the fade-out animation
  };

  return (
    <div className="container mx-auto text-center mt-10">
      <div className={`transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {currentPage === 'page1' && <Page1 />}
        {currentPage === 'page2' && <Page2 />}
      </div>
      <div className="mt-5">
        <button onClick={() => handlePageChange('page1')} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Page 1</button>
        <button onClick={() => handlePageChange('page2')} className="px-4 py-2 bg-green-500 text-white rounded">Page 2</button>
      </div>
    </div>
  );
};

const Page1 = () => (
  <div>
    <h1 className="text-4xl font-bold">Page 1</h1>
    <p className="mt-4">This is the content of page 1.</p>
  </div>
);

const Page2 = () => (
  <div>
    <h1 className="text-4xl font-bold">Page 2</h1>
    <p className="mt-4">This is the content of page 2.</p>
  </div>
);

export default UseAnimation;