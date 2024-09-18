import React, { useState } from 'react';
import productImg from '../asstes/ProductImg.png';

const ProductComponent = () => {
  const categories = [
    {
      categoryName: 'Category Name ',
      products: [
        {
          id: 1,
          name: 'Kodo Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 2,
          name: 'Chilli Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 3,
          name: 'Pearl Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 4,
          name: 'Finger Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 5,
          name: 'Foxtail Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
      ],
    },
    {
      categoryName: 'Category Name ',
      products: [
        {
          id: 1,
          name: 'Kodo Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 2,
          name: 'Chilli Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 3,
          name: 'Pearl Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 4,
          name: 'Finger Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 5,
          name: 'Foxtail Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
      ],
    },
    {
      categoryName: 'Category Name ',
      products: [
        {
          id: 1,
          name: 'Kodo Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 2,
          name: 'Chilli Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 3,
          name: 'Pearl Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 4,
          name: 'Finger Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 5,
          name: 'Foxtail Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
      ],
    },{
      categoryName: 'Category Name ',
      products: [
        {
          id: 1,
          name: 'Kodo Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 2,
          name: 'Chilli Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 3,
          name: 'Pearl Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 4,
          name: 'Finger Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 5,
          name: 'Foxtail Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
      ],
    },
    {
      categoryName: 'Category Name ',
      products: [
        {
          id: 1,
          name: 'Kodo Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 2,
          name: 'Chilli Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 3,
          name: 'Pearl Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 4,
          name: 'Finger Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 5,
          name: 'Foxtail Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
      ],
    },{
      categoryName: 'Category Name ',
      products: [
        {
          id: 1,
          name: 'Kodo Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 2,
          name: 'Chilli Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 3,
          name: 'Pearl Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 4,
          name: 'Finger Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 5,
          name: 'Foxtail Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
      ],
    },
    {
      categoryName: 'Category Name ',
      products: [
        {
          id: 1,
          name: 'Kodo Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 2,
          name: 'Chilli Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 3,
          name: 'Pearl Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 4,
          name: 'Finger Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
        {
          id: 5,
          name: 'Foxtail Millet',
          price: 'Rs. 200',
          imageUrl: productImg,
          quantities: ['500g', '200g', '100g', '50g'],
        },
      ],
    }
    // Add more categories following the same format
  ];

  const [selectedQuantities, setSelectedQuantities] = useState(
    categories.reduce((acc, category) => {
      category.products.forEach((product) => {
        acc[product.id] = product.quantities[0]; // Default to the first quantity option
      });
      return acc;
    }, {})
  );

  const [sortOptions, setSortOptions] = useState(
    categories.reduce((acc, category, index) => {
      acc[index] = 'featured'; // Default sort option for each category
      return acc;
    }, {})
  );

  const handleQuantityChange = (productId, quantity) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const handleSortChange = (index, value) => {
    setSortOptions((prevOptions) => ({
      ...prevOptions,
      [index]: value,
    }));
  };

  return (
    <div className="bg-radial-white-black from-black via-blue-900 to-gray-800 text-white py-8 w-full h-full overflow-hidden">
      {/* Banner */}
      <div className="text-center my-6">
        <h2 className="text-4xl sm:text-5xl font-bold">Or Banner that shows offers</h2>
        <div className="relative inline-block my-4" style={{ width: '100%', maxWidth: '490px' }}>
          <div className="absolute inset-0 flex items-center">
            <hr className="w-full border-t-2 border-dashed border-yellow-500" />
          </div>
        </div>
        <p className="text-base sm:text-xl mt-2">Experience exotic international flavors in the ancient grains of India’s earliest cereals</p>
      </div>

      {/* Loop over each category */}
      {categories.map((category, index) => (
        <div key={index} className="mb-12 px-4 sm:px-6 lg:px-24">
          {/* Category Name and Sort by */}
          <div className="w-full mx-auto flex justify-between mb-4">
            <h3 className="text-xl sm:text-3xl font-semibold text-yellow-500">{category.categoryName}</h3>
            <div className="flex items-center space-x-2">
              <label htmlFor={`sort-${index}`} className="text-sm sm:text-m">Sort by</label>
              <select
                id={`sort-${index}`}
                className="bg-gray-800 text-white p-2 rounded"
                value={sortOptions[index]}
                onChange={(e) => handleSortChange(index, e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="millets">Millets</option>
              </select>
            </div>
          </div>

          {/* Product Scrollable Container */}
          <div className=" w-full h-[470px] flex overflow-x-auto space-x-4 px-4 mb-4 scrollbar-hide">
            {category.products
              .sort((a, b) => {
                if (sortOptions[index] === 'millets') {
                  return a.name.localeCompare(b.name); // Example sorting logic based on product name
                }
                return 0; // Default sorting (featured)
              })
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-[#041423] p-4 rounded-lg shadow-lg"
                  style={{ width: '100%', maxWidth: '355px', height: '495px', flex: '0 0 auto' }} // Responsive width and fixed height for product cards
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h4 className="text-lg sm:text-2xl font-bold">{product.name}</h4>
                  <p className="mt-2 text-lg sm:text-2xl text-yellow-500">{product.price}</p>

                  {/* Quantity Selector */}
                  <div className="mt-4">
                    <h5 className="text-base sm:text-lg mb-2">Select Quantity:</h5>
                    <div className="w-full flex flex-row gap-2">
                      {product.quantities.map((quantity) => (
                        <button
                          key={quantity}
                          className={`flex-grow p-2 rounded bg-gray-800 text-gray-400 ${selectedQuantities[product.id] === quantity
                            ? 'bg-blue-600 text-white'
                            : ''
                            } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                          onClick={() => handleQuantityChange(product.id, quantity)}
                        >
                          {quantity}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {/* Action Buttons */}
                  <div className="w-full flex flex-col sm:flex-row gap-2 mt-4">
  <button className="bg-gray-800 text-white p-2 rounded w-full">Add to Cart</button>
  <button className="bg-white text-[#041423] p-2 rounded w-full">Buy Now</button>
</div>



                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;
