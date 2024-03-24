import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Welcome to the SwiftUI-OpenSource Project!</h2>
      <p>Feel free to contribute whatever you feel can make a SwiftUI IDE that's multiplatform!</p>
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
