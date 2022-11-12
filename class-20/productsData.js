let allProducts = [
  {
    id: 1,
    name: "men's blue shirt",
    price: 750,
    imgUrl:
      "https://static-01.daraz.com.bd/p/2f39751b4a6dd696f395da423a17af94.jpg",
    description: "This is a very premium quality product.",
    sizes: ["M", "L", "Xl", "XXL"],
  },
  {
    id: 2,
    name: "men's black shirt",
    price: 850,
    imgUrl:
      "https://static-01.daraz.com.bd/p/2b52db5af6f0c21be997e9ebc16a05d5.jpg",
    description: "This is a very premium quality product.",
    sizes: ["M", "L", "Xl"],
  },
  {
    id: 3,
    name: "men's green shirt",
    price: 680,
    imgUrl:
      "https://5.imimg.com/data5/ZP/RG/VO/SELLER-14071010/unicolr-formal-green-shirt-500x500.jpeg",
    description: "This is a very premium quality product.",
    sizes: ["M", "L", "Xl"],
  },
];

let products = document.getElementById("products");

products.innerHTML = `<div id="card">
            <div
              class="h-[200px] w-[200px] rounded-lg bg-[#EBEBEB] cursor-pointer"
            >
              <img id="myImg" src="./img/earphones_a_4.webp" alt="" />
            </div>

            <div class="mt-2 text-sm font-bold">
              <p id="name" class="text-gray-500">solo headphone</p>
              <p id="price">$80</p>
            </div>
          </div>`;
