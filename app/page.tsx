import Image from "next/image";

export default function Home() {
  return (
      <>
          <section className="bg-white">
              <div className="items-center grid py-8 mx-auto lg:gap-11 xl:gap-0 lg:py-14 lg:grid-cols-12">
                  <div className="place-self-center lg:col-span-8 col-start-1 z-10">
                      <h1 className="text-gray-700 pl-40 mb-4 text-4xl leading-normal md:text-4xl md:leading-loose xl:text-5xl xl:leading-normal font-extrabold">
                          <span className="text-red-600">مشاوره تخصصی</span> فروش کالا و خدمات
                          برقی و روشنایی الکتوتک
                      </h1>
                      <p className="mb-6 font-normal text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
                          هدف ما فروش محصولات ارزیابی شده و با کیفیت است ، الکتوتک بستری برای
                          ایجاد فروش کالا و خدمات با کیفیت و ارزیابی شده و ایحاد حمایت از برندهای
                          تخصصی تامین کالا و خدمات است
                      </p>
                      <button
                          className="bg-red-600 text-white px-3 py-2 rounded-lg transform transition duration-500 hover:scale-105 cursor-pointer">
                          محتوای تخصصی
                      </button>
                      <button
                          className="bg-gray-100 text-gray-700 mx-3 px-3 py-2 rounded-lg hover:scale-105 cursor-pointer">
                          تیم مشاوران متخصص
                      </button>
                  </div>
                  <div
                      className="lg:col-span-4 lg:col-end-13 grid grid-cols-2 gap-2 grid-rows-6 max-h-[700px] relative">
                      <span
                          className="hidden absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex left-[30%] -top-24 w-[640px] h-[640px] z-0"
                          style={{
                              backgroundImage:
                                  "radial-gradient(50% 50% at 50% 50%,#eb4432 0,hsla(0,0%,100%,0) 100%)",
                          }}
                      >
                      </span>
                      <div className="row-start-1 row-end-5 z-10">
                          <Image
                              width={5000}
                              height={5000}
                              src={"/images/banner1.jpg"}
                              alt=""
                              className="rounded-lg w-full h-full object-cover"
                          />
                      </div>
                      <div className="row-start-5 row-end-7">
                          <Image
                              width={5000}
                              height={5000}
                              alt=""
                              src={"/images/banner2.jpg"}
                              className="rounded-lg w-full h-full object-cover"
                          />
                      </div>
                      <div className="row-start-1 row-end-3">
                          <Image
                              width={5000}
                              height={5000}
                              alt=""
                              src={"/images/banner3.jpg"}
                              className="rounded-lg w-full h-full object-cover"
                          />
                      </div>
                      <div className="row-end-7 row-start-3">
                          <Image
                              width={5000}
                              height={5000}
                              alt=""
                              src={"/images/banner4.jpg"}
                              className="rounded-lg w-full h-full object-cover"
                          />
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}
