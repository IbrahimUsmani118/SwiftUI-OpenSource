import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Your home page content goes here */}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data here if needed
  return {
    props: {
      // Pass data as props if needed
    },
  };
}

export default HomePage;
