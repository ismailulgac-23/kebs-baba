import { Link } from "react-router";
import type { Route } from "./+types/home";
import cn from "classnames";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Input from "~/components/Input";
import { Icon } from "@iconify/react";
import { Footer, Marquee, Topbar } from "./home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kebs Baba | Products" },
    { name: "description", content: "Kebs Baba | Products" },
  ];
}

const Products = () => {
  return (
    <div className="">
      {/* topbar */}
      <Topbar />

      {/* marquee */}
      <Marquee />

      <IntroText />

      <ProductList />

      <Footer />
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="mt-10 container mx-auto">
      <div className="border-b-2 border-b-primary w-full py-2 flex items-center justify-end">
        <div className="flex items-center gap-1.5">
          <span className="text-lg font-frankfurter text-primary">Filtre</span>
          <Icon icon="fa-solid:chevron-down" className="text-primary w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 w-full py-10">
        {Array.from(Array(12).keys()).map((a: any, i: any) => {
          return (
            <Link
              to={"/products/" + i}
              key={i}
              className="border-2 border-primary rounded-3xl"
            >
              <img
                src="/assets/images/t-shirt.png"
                className="rounded-tl-3xl rounded-tr-3xl"
              />

              <div className="py-3.5 px-6">
                <h3 className="font-cooper text-primary uppercase text-[23px]">
                  Tee-shirt baba
                </h3>
                <p className="text-lg font-cooper mb-1">25,OO€</p>
                <p className="mb-7 text-base font-cooper text-primary">
                  Pièce iconique du moment, le t-shirt Kebs Baba allie confort
                  et caractère.
                </p>

                <button className="font-zipper font-medium text-2xl uppercase flex items-center justify-center h-10 px-4 pt-2 ml-auto cursor-pointer bg-white border-2 border-primary rounded-full">
                  Ajouter au panier
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const IntroText = () => {
  return (
    <div className="container mx-auto relative">
      <img
        src="/assets/images/merchs-intro.png"
        className="w-[1168px] mx-auto"
      />

      <div className="hidden md:block">
        <img
          src="/assets/images/ouvert.png"
          className="w-[232px] absolute top-0 left-[2%]"
        />
        <img
          src="/assets/images/bonheur-cuisine.png"
          className="w-[232px] absolute bottom-[5%] -left-[2%]"
        />

        <img
          src="/assets/images/bonheur-kebab.png"
          className="w-[187px] absolute top-[9%] rotate-10 left-[30%]"
        />

        <img
          src="/assets/images/bonheur-kebab.png"
          className="w-[257px] absolute bottom-[5%] -rotate-7 right-[4%]"
        />
      </div>

      <div className="block md:hidden">
        <img
          src="/assets/images/ouvert.png"
          className="w-[100px] absolute -top-[2%] left-[0%]"
        />

        <img
          src="/assets/images/bonheur-kebab.png"
          className="w-[100px] absolute bottom-[0%] -rotate-7 right-[4%]"
        />
      </div>
    </div>
  );
};

export default Products;
