import Header from "@/components/Header";
import SearchInput from "@/components/search-input";
import ProductCategories from "@/components/static/Hero/ProductCategories";

export default function Home() {
  return (
    <>
    <div className="flex-col md:flex-row">
      <div className="bg-hero bg-cover">
        <div className="hidden md:inline">
        <Header />
        </div>
        <div className="h-screen w-full">
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center text-white ">
          <h2 className="text-4xl font-rowdies px-8 font-semibold p-4">
          Your Trusted Source for Quality Products – From Pet Supplies to Household Essentials.
          </h2>
          <div className="p-4 w-full">
            <SearchInput />
          </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      <div className="w-full h-screen">
        <ProductCategories />
      </div>
      </div>
    </>
  );
}
