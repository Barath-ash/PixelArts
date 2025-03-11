import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="w-full max-w-[1240px] h-auto mx-auto mt-10 px-4">
      {/* Tabs Section */}
      <div className="tabs-section border-b flex flex-col sm:flex-row">
        {['description', 'reviews'].map((tab) => (
          <div key={tab} className="tab w-full sm:w-auto">
            <button
              className={`p-2 w-full sm:w-[136px] h-[56px] text-start ${activeTab === tab ? 'font-bold border-b-2 border-black' : 'text-gray-600'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'description' ? 'Description' : 'Reviews(0)'}
            </button>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="content-section pt-5">
        {activeTab === 'description' && (
          <div className="description">
            <p>
              Embrace effortless style and comfort with our classic black hoodie. Crafted from premium, soft cotton-blend fabric, this hoodie is designed for all-day warmth without compromising on breathability. Featuring a relaxed fit, adjustable drawstring hood, and spacious front pocket, it’s perfect for layering or wearing on its own. Whether you’re lounging at home or heading out, this versatile black hoodie adds a touch of casual cool to any look. A wardrobe staple for any season.
            </p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className="reviews">
            <p>No reviews yet. Be the first to review this product!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;