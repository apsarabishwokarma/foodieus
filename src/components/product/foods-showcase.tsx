export default function FoodShowcase() {
  return (
    <>
      <div className="flex w-full h-auto py-8 text-black ">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-4 lg:px-52">
          <div className="w-full">
            <figure className="w-full h-full">
              <img
                src="/assets/col-md-8.jpg"
                alt="Delivery Guy Banner"
                className="object-cover w-full h-64 lg:h-full rounded-lg"
              />
            </figure>
          </div>

          <div className="w-full h-full flex flex-col gap-6 justify-center items-center text-center bg-gray-50 p-6 ">
            <h1 className="font-bold text-2xl lg:text-3xl text-black">
              Feast Your Eyes on Irresistible Deals!
            </h1>

            <figure className="w-32 h-auto">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?"
                alt="Showcased Food Item"
                className="object-cover w-full h-full rounded-lg"
              />
            </figure>

            <p className="font-medium text-base lg:text-lg text-gray-700 leading-relaxed">
              Dive into the world of flavors with up to <strong>50% Off</strong>{" "}
              on our best-selling dishes. From savory delights to sweet treats,
              we’ve got something for every craving.
            </p>

            {/* <Button children={"Order Now"} /> */}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-pink-300 text-black p-6 rounded-lg shadow-lg text-center w-full mx-auto border-y-2 border-black">
        <h1 className="text-2xl font-bold mb-2">Welcome, Foodie!</h1>
        <p className="text-sm mb-4 leading-relaxed">
          Embark on a journey to discover the most tantalizing cuisines and
          hidden culinary gems. Whether you're craving authentic flavors or
          unique dining experiences, we've got you covered.
        </p>
        <button className="text-white font-semibold py-2 px-6 rounded-full shadow bg-gray-600  transition">
          Discover More
        </button>
      </div>
    </>
  );
}
