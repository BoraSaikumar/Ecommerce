// category
import { useNavigate } from "react-router";
const category = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/027/032/700/non_2x/watercolor-fashion-illustration-isolated-png.png",
    name: "fashion",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/051/753/826/non_2x/new-male-shirt-isolated-on-transparent-background-png.png",
    name: "shirt",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/050/511/812/non_2x/army-green-mens-denim-jacket-button-up-collar-and-long-sleeves-for-a-trendy-slim-fit-look-png.png",
    name: "jacket",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/008/850/477/non_2x/3d-render-mobile-phone-png.png",
    name: "mobile",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/010/850/792/non_2x/3d-illustration-golden-laptop-png.png",
    name: "laptop",
  },
  {
    image:
      "https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-blue-sport-shoes-png-image_10187592.png",
    name: "shoes",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/049/621/111/small_2x/a-group-of-appliances-including-a-washer-and-dryer-png.png",
    name: "Electronics",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/023/337/473/non_2x/ai-generative-books-stock-illustration-free-png.png",
    name: "books",
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mt-5">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
          {/* main 2  */}
          <div className="flex ">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  {/* Image  */}
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-purple-800 transition-all hover:bg-purple-400 cursor-pointer mb-1 "
                  >
                    <div className="flex justify-center mb-12">
                      {/* Image tag  */}
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
