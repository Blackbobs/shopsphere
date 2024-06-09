import React from "react";

const Platform = () => {
  return (
    <div className="max-w-full">
      <nav className="flex items-center justify-between p-2 w-full h-fit bg__gradient">
        <div className="flex-1">
          <h1 className="text-white">ShopSphere</h1>
        </div>
        <div>
          <div className="hidden flex items-center gap-3 h-fit">
            <a href="#!">Home</a>
            <a href="#!">Product</a>
            <a href="#!">Service</a>
            <a href="#!">About</a>
            <a href="#!">Contact</a>
          </div>
          <button className="bg-[#282828] py-2 px-4 font-bold text-white rounded-full">
            Cart
          </button>
        </div>
      </nav>
      <section className="flex gap-2 w-full">
        {/* filter */}
        <div className="hidden md:block">
          <div className="p-2">
            <p className="text-[#7005F9] capitalize">price</p>
            <div className="flex items-center space-x-2 py-3">
              <small className=" border border-black rounded p-2">
                From <span>$0.00</span>
              </small>
              <small className=" border border-black rounded p-2">
                To <span>$100,000.00</span>
              </small>
            </div>
            <input type="range" name="price-range" />
          </div>
          <div>
            <p className="p-2 capitalize text-[#C30707]">item</p>
            <ul className="p-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                Phone deal
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                vehicle{" "}
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                women wear
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                electronics
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                beauty
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                pets
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                accessories
              </li>
            </ul>
          </div>
          <div>
            <p className="p-2 capitalize">brand</p>
            <ul className="p-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                Sony
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                Pansonic{" "}
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                Benz
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                Ford
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                Dell
              </li>
            </ul>
          </div>
          <button className="bg-[#C30707] py-2 px-4 text-white rounded-lg">
            Filter
          </button>
        </div>
        {/* Products */}
        <div className="flex-1 w-full">
          <div className="flex items-center justify-between px-1 py-2 my-2">
            <div>
              <input
                className="bg-[#A0EEAC] p-2 rounded-full focus:outline-none"
                type="search"
                name="search"
                placeholder="Search Brand"
              />
            </div>
            <div className="flex items-center gap-1">
              <img src="./user.png" alt="user" width={40} />
              <div>
                <h3 className="text-[#A259FF]">User</h3>
                <small>John Doe</small>
              </div>
            </div>
          </div>

          <div className="p-3">
            <h2 className="text-[#F24E1E] font-bold">Best Sellers</h2>
            <small className="text-black">last products sold</small>
            <div className="overflow-scroll flex gap-3 my-5">
              <div className="relative min-w-[170px]">
                <img
                  src="./user1.png"
                  alt="user"
                  width={50}
                  className="absolute"
                />
                <img src="./prd1.png" alt="product" width={250} />
                <div>
                  <p className="text-[#6C6C6C] font-medium">Adam smith</p>
                  <small>Rating</small>
                </div>
              </div>
              <div className="relative min-w-[170px]">
                <img
                  src="./user2.png"
                  alt="user"
                  width={50}
                  className="absolute"
                />
                <img src="./prd2.png" alt="product" width={250} />
                <div>
                  <p className="text-[#6C6C6C] font-medium">luker vetran</p>
                  <small>Rating</small>
                </div>
              </div>
              <div className="relative min-w-[170px]">
                <img
                  src="./user3.png"
                  alt="user"
                  width={50}
                  className="absolute"
                />
                <img src="./prd3.png" alt="product" width={250} />
                <div>
                  <p className="text-[#6C6C6C] font-medium">modric fagi</p>
                  <small>Rating</small>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 rounded shadow grid grid-cols-2 gap-2 md:grid-cols-5">
            <div className="w-full flex flex-col gap-2">
              <div>
                <p className="capitalize px-3 font-light">add to favourite</p>
                <img src="./product1.png" alt="product" />
                <h3 className="capitalize px-3 text-[#C0A688] font-bold">
                  Wooden desk
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="capitalize px-3">
                  <span className="font-medium">Location</span>: Lagos
                </p>
                <p className="capitalize px-3">
                  <span className="font-medium">Price</span>: $6,000.00
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>
                <p className="capitalize px-3 font-light">add to favourite</p>
                <img src="./product2.png" alt="product" />
                <h3 className="capitalize px-3 text-[#C0A688] font-bold">
                  mustang 2018
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="capitalize px-3">
                  <span className="font-medium">Location</span>: Lagos
                </p>
                <p className="capitalize px-3">
                  <span className="font-medium">Price</span>: $6,000.00
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>
                <p className="capitalize px-3 font-light">add to favourite</p>
                <img src="./product3.png" alt="product" />
                <h3 className="capitalize px-3 text-[#C0A688] font-bold">
                  clothes
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="capitalize px-3">
                  <span className="font-medium">Location</span>: Lagos
                </p>
                <p className="capitalize px-3">
                  <span className="font-medium">Price</span>: $6,000.00
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>
                <p className="capitalize px-3 font-light">add to favourite</p>
                <img src="./product4.png" alt="product" />
                <h3 className="capitalize px-3 text-[#C0A688] font-bold">
                  Wooden apartment
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="capitalize px-3">
                  <span className="font-medium">Location</span>: Lagos
                </p>
                <p className="capitalize px-3">
                  <span className="font-medium">Price</span>: $6,000.00
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>
                <p className="capitalize px-3 font-light">add to favourite</p>
                <img src="./product5.png" alt="product" />
                <h3 className="capitalize px-3 text-[#C0A688] font-bold">
                  old wired television
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="capitalize px-3">
                  <span className="font-medium">Location</span>: Lagos
                </p>
                <p className="capitalize px-3">
                  <span className="font-medium">Price</span>: $6,000.00
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>
                <p className="capitalize px-3 font-light">add to favourite</p>
                <img src="./product6.png" alt="product" />
                <h3 className="capitalize px-3 text-[#C0A688] font-bold">
                  Wooden chair
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="capitalize px-3">
                  <span className="font-medium">Location</span>: Lagos
                </p>
                <p className="capitalize px-3">
                  <span className="font-medium">Price</span>: $6,000.00
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>
                <p className="capitalize px-3 font-light">add to favourite</p>
                <img src="./product7.png" alt="product" />
                <h3 className="capitalize px-3 text-[#C0A688] font-bold">
                  camera
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="capitalize px-3">
                  <span className="font-medium">Location</span>: Lagos
                </p>
                <p className="capitalize px-3">
                  <span className="font-medium">Price</span>: $6,000.00
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>
                <p className="capitalize px-3 font-light">add to favourite</p>
                <img src="./product8.png" alt="product" />
                <h3 className="capitalize px-3 text-[#C0A688] font-bold">
                  washing machine
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="capitalize px-3">
                  <span className="font-medium">Location</span>: Lagos
                </p>
                <p className="capitalize px-3">
                  <span className="font-medium">Price</span>: $6,000.00
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>
                <p className="capitalize px-3 font-light">add to favourite</p>
                <img src="./product9.png" alt="product" />
                <h3 className="capitalize px-3 text-[#C0A688] font-bold">
                  coffee maker
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="capitalize px-3">
                  <span className="font-medium">Location</span>: Lagos
                </p>
                <p className="capitalize px-3">
                  <span className="font-medium">Price</span>: $6,000.00
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>
                <p className="capitalize px-3 font-light">add to favourite</p>
                <img src="./product10.png" alt="product" />
                <h3 className="capitalize px-3 text-[#C0A688] font-bold">
                  makeup brush
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="capitalize px-3">
                  <span className="font-medium">Location</span>: Lagos
                </p>
                <p className="capitalize px-3">
                  <span className="font-medium">Price</span>: $6,000.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg__gradient p-5 flex flex-col md:flex-row gap-5 justify-between">
        <div className="w-full md:max-w-[500px]">
          <h1 className="text-3xl p-3 font-semibold">ShopSphere</h1>
          <p className="text-white p-2 leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            voluptatum explicabo dolores vitae earum, corrupti, pariatur minima
            rem nam quidem, nisi velit expedita. Magnam sint minus commodi
            reprehenderit accusantium aspernatur?
          </p>
          <button className=" bg-white p-2 text-2xl text-[#58F521] rounded-full font-medium m-3">
            Read more
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-between text-white">
          <div>
            <ul className="flex flex-col gap-2">
              <p className="text-[18px] font-medium py-3">Site map</p>
              <li>Home</li>
              <li>Product</li>
              <li>Chart</li>
              <li>About</li>
              <li>Log out</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <p className="text-[18px] font-medium py-3">Services</p>
              <li>Catergory</li>
              <li>Brand</li>
              <li>Item</li>
              <li>Product</li>
              <li>Age</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <input className="p-2 rounded-full" type="text" placeholder="Name" />
          <input className="p-2 rounded-full" type="text" placeholder="Email" />
          <textarea className="p-2" name="" id=""></textarea>
          <button className="bg-white text-[#58F521] p-2 font-semibold text-xl">
            Send
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Platform;
