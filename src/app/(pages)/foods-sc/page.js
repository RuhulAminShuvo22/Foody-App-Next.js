import CategoryFilter from "@/components/foods/category-filter";
import FoodCard from "@/components/foods/food-card";
import NoFood from "@/components/foods/no-food";
import SearchFood from "@/components/foods/search-food";

const getFoods = async (category = "", search = "") => {
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`,
  );
  const data = await res.json();
  return data.data;
};

const FoodsPage = async ({ searchParams }) => {
  const sp = await searchParams;

  const foods = await getFoods(sp.category, sp.search);

  return (
    <div className="min-h-screen bg-base-200 px-6 py-10">
      {/* 🔥 Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
          🍽️ Explore Delicious Foods
        </h1>
        <p className="text-gray-500 mt-3">
          Discover your favorite meals from different categories
        </p>
      </div>

      {/* 🔍 Filter Section */}
      <div className="bg-base-100 p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-5">
        <SearchFood />
        <CategoryFilter />
      </div>

      {/* 📊 Result Info */}
      {sp?.search && (
        <div className="mt-6 text-center text-sm md:text-base text-gray-500">
          🔍 Found{" "}
          <span className="font-bold text-primary">{foods.length}</span> results
          for{" "}
          <span className="px-2 py-1 bg-primary/10 text-primary rounded-md">
            {sp.search}
          </span>
        </div>
      )}

      {/* 🍔 Food Grid */}
      {foods.length === 0 ? (
        <div className="mt-10">
          <NoFood />
        </div>
      ) : (
        <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {foods.map((food) => (
            <div
              key={food.id}
              className="hover:scale-[1.03] transition duration-300"
            >
              <FoodCard food={food} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodsPage;
