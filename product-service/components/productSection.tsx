import React from 'react';

// Sample data for 8 products
const products = [
  { id: 1, name: 'Ladies Hand bag', description: 'Stylish and comfortable for all-day wear.', image: '/products/Ladies Hand Bag.jpg' },
    { id: 3, name: 'Bags', description: 'Capture every moment with clarity.', image: '/products/bag.jpg' },
    { id: 4, name: 'Bluetooth Speaker', description: 'High performance for gaming and work.', image: '/products/bluetooth-headset.jpg' },
  { id: 5, name: 'Foot Wear', description: 'feel better with your medicated foot wear.', image: '/products/sandals.jpg' },
  { id: 6, name: 'Men Trouser', description: 'Immerse yourself in high-fidelity sound.', image: '/products/men-trouser.jpg' },
  { id: 7, name: 'Short for Men', description: 'Designed for comfort and precision.', image: '/products/shorts.jpg' },
    { id: 8, name: 'TrackSuit winter', description: 'Never run out of power on the go.', image: '/products/trouser-winter.jpg' },
    { id: 9, name: 'Wireless Headset', description: 'Monitor your health and activity levels.', image: '/products/wireless-headset.jpg' },

];

const ProductSection = () => {
  return (
    <section className="py-10">
      <h2 className="text-4xl font-bold text-center mb-8">Our Top Products</h2>
      
      {/* Responsive grid layout using Tailwind CSS.
        - grid-cols-1: 1 column on mobile.
        - sm:grid-cols-2: 2 columns on small screens.
        - md:grid-cols-3: 3 columns on medium screens.
        - lg:grid-cols-4: 4 columns on large screens.
        This ensures your 8 cards fit perfectly on all screen sizes.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Use the .map() method to render a card for each product */}
        {products.map(product => (
          <div key={product.id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img src={product.image} alt={product.name} />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p>{product.description}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default ProductSection;