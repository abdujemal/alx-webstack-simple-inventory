import * as React from "react";

function MyComponent() {
  return (
    <div className="flex overflow-hidden flex-wrap gap-4 bg-white">
      <div className="flex flex-col pt-12 text-white border border-black border-solid bg-slate-600 pb-[618px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pb-24">
        <div className="flex flex-col pr-7 pl-2 w-full whitespace-nowrap max-md:pr-5">
          <div className="self-end text-3xl text-center">Inventory</div>
          <div className="flex gap-1 self-start mt-32 text-lg max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ac6f81e16d00ae6d1129e7ff7eefca831ce3835e84db138d2ffb5dd7a597fe6?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
              className="object-contain shrink-0 aspect-square w-[30px]"
            />
            <div>Home</div>
          </div>
        </div>
        <div className="flex gap-10 self-start px-4 py-4 mt-5 text-lg text-black whitespace-nowrap bg-white rounded-none">
          <div className="flex gap-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5c9f8a873ea5b7e22c74513fd253a62fffb91d989e5109f7ccd9ffb869e66d3?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
              className="object-contain shrink-0 self-start aspect-square w-[18px]"
            />
            <div>Product</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b9c3fb7616c3e07af92517d4d6ffa36a411a0be858436c4b39c952f21ab2b23?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
            className="object-contain shrink-0 my-auto aspect-square w-[15px]"
          />
        </div>
        <div className="flex flex-col items-start pr-10 pl-3.5 mt-7 w-full text-lg max-md:pr-5">
          <div className="flex gap-1.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb077a3c0b694032ce0b9107928786b2b885c6f9f2a0f31051c712ab474e1e26?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
              className="object-contain shrink-0 self-start mt-1 w-5 aspect-[1.18]"
            />
            <div>Customer</div>
          </div>
          <div className="flex gap-2 mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b0e86fa76ce18ae4163991e1a466a83c37671bf5b23895a0dcb33aa901a9abf?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
              className="object-contain shrink-0 self-start mt-1.5 aspect-square w-[17px]"
            />
            <div>Log Out</div>
          </div>
        </div>
      </div>
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col mt-7 w-full max-md:mr-0 max-md:max-w-full">
              <div className="flex flex-wrap gap-10 mr-6 text-lg max-md:mr-2.5 max-md:max-w-full">
                <div className="flex flex-auto gap-2 self-start px-4 py-2.5 whitespace-nowrap bg-white rounded-lg text-black text-opacity-70">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d1c4839d4bbb8eec83d234b847f9c2a02794f7a99cdcb2c150165a14c699afd?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-square w-[27px]"
                  />
                  <div className="my-auto basis-auto">Search....</div>
                </div>
                <div className="flex flex-wrap flex-auto gap-2.5 items-start text-white">
                  <div className="flex gap-2 p-3 rounded-lg bg-slate-600 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    <div className="grow">Best Seller</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bbd4db31c430f04821d8e636fa76715cce636245f9ec66c43b4c7260d466e00?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                      className="object-contain shrink-0 self-start mt-1.5 aspect-square w-[18px]"
                    />
                  </div>
                  <div className="flex gap-7 px-2.5 py-3 rounded-lg bg-slate-600 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    <div className="basis-auto">
                      Filter : <span className="text-white">No ID</span>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bbd4db31c430f04821d8e636fa76715cce636245f9ec66c43b4c7260d466e00?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                      className="object-contain shrink-0 self-start mt-1 aspect-square w-[18px]"
                    />
                  </div>
                  <div className="flex gap-1 px-2.5 py-3 rounded-lg bg-slate-600 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    <div className="grow">Add Item</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c4b622f718abc581455b649c12c1d747d01f90d24dceb2e7a3538129b1cf812?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                      className="object-contain shrink-0 aspect-square w-[22px]"
                    />
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0af7e2862e2202ec73e09e1055aabbd76dd827d5c311496ad53539a38fcbbb9?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0af7e2862e2202ec73e09e1055aabbd76dd827d5c311496ad53539a38fcbbb9?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0af7e2862e2202ec73e09e1055aabbd76dd827d5c311496ad53539a38fcbbb9?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0af7e2862e2202ec73e09e1055aabbd76dd827d5c311496ad53539a38fcbbb9?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0af7e2862e2202ec73e09e1055aabbd76dd827d5c311496ad53539a38fcbbb9?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0af7e2862e2202ec73e09e1055aabbd76dd827d5c311496ad53539a38fcbbb9?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0af7e2862e2202ec73e09e1055aabbd76dd827d5c311496ad53539a38fcbbb9?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0af7e2862e2202ec73e09e1055aabbd76dd827d5c311496ad53539a38fcbbb9?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 rounded-lg aspect-[1.91] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[86px]"
                  />
                </div>
              </div>
              <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col w-full text-lg max-md:mt-10">
                      <div className="flex gap-5 justify-between text-black">
                        <div className="flex flex-col self-start">
                          <div className="flex gap-3 self-start">
                            <div className="flex shrink-0 self-start bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                            <div>No ID</div>
                          </div>
                          <div className="flex gap-3 mt-7 whitespace-nowrap">
                            <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                            <div>1741D</div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="self-center ml-2.5">Product</div>
                          <div className="flex gap-2.5 mt-3.5">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/69bf2a9802fe80448ce57e22651d2f0503c4993c863e9a8ae84d041257b38196?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/69bf2a9802fe80448ce57e22651d2f0503c4993c863e9a8ae84d041257b38196?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69bf2a9802fe80448ce57e22651d2f0503c4993c863e9a8ae84d041257b38196?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/69bf2a9802fe80448ce57e22651d2f0503c4993c863e9a8ae84d041257b38196?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/69bf2a9802fe80448ce57e22651d2f0503c4993c863e9a8ae84d041257b38196?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69bf2a9802fe80448ce57e22651d2f0503c4993c863e9a8ae84d041257b38196?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/69bf2a9802fe80448ce57e22651d2f0503c4993c863e9a8ae84d041257b38196?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/69bf2a9802fe80448ce57e22651d2f0503c4993c863e9a8ae84d041257b38196?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                              className="object-contain shrink-0 aspect-square w-[50px]"
                            />
                            <div className="grow shrink my-auto w-[94px]">
                              Dollan watch
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between mt-5 text-black text-opacity-50">
                        <div className="flex gap-3 my-auto whitespace-nowrap">
                          <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                          <div>1741D</div>
                        </div>
                        <div className="flex gap-2.5">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                            className="object-contain shrink-0 aspect-square w-[50px]"
                          />
                          <div className="my-auto basis-auto">Dollan watch</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                    <div className="max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col w-full text-lg max-md:mt-10">
                            <div className="flex gap-5 justify-between text-black">
                              <div className="flex flex-col whitespace-nowrap">
                                <div className="self-center">SKU</div>
                                <div className="mt-7">12569756</div>
                              </div>
                              <div className="flex flex-col">
                                <div className="self-center">Location</div>
                                <div className="mt-7">Warehouse 1</div>
                              </div>
                            </div>
                            <div className="flex gap-7 mt-12 text-black text-opacity-50 max-md:mt-10">
                              <div>12569756</div>
                              <div className="grow shrink w-[88px]">
                                Warehouse 1
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col w-full max-md:mt-10">
                            <div className="flex gap-2.5 items-start w-full">
                              <div className="flex flex-col">
                                <div className="flex gap-5 justify-between text-lg text-black whitespace-nowrap max-md:mr-2.5">
                                  <div>Price</div>
                                  <div>Stock</div>
                                  <div>Action</div>
                                </div>
                                <div className="flex gap-5 justify-between mt-7 w-full">
                                  <div className="text-lg text-black">
                                    $ 123
                                  </div>
                                  <div className="text-lg text-black">1108</div>
                                  <div className="flex gap-0.5 self-start">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a360e70db832581e33a56031356ed67b82795ba555eed6227e8bb160caa89a13?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                                      className="object-contain shrink-0 self-start aspect-square w-[21px]"
                                    />
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/05e7befe098ded38ae6d74097c2685ebda7ee1537c47ff1857d2f0f19dfe1448?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                                      className="object-contain shrink-0 my-auto w-5 aspect-square"
                                    />
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a8622667cb4e65272c2bea0ca0d2f80a7cd1e475c2875c72d105a6b11771c33?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                                      className="object-contain shrink-0 w-6 aspect-square"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2.5 justify-center items-center mt-4">
                                <img
                                  loading="lazy"
                                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/90cb54615cbf106c7d5481b351e360635af4e3f099769947dff4bb26dc9bbb45?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/90cb54615cbf106c7d5481b351e360635af4e3f099769947dff4bb26dc9bbb45?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/90cb54615cbf106c7d5481b351e360635af4e3f099769947dff4bb26dc9bbb45?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/90cb54615cbf106c7d5481b351e360635af4e3f099769947dff4bb26dc9bbb45?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/90cb54615cbf106c7d5481b351e360635af4e3f099769947dff4bb26dc9bbb45?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/90cb54615cbf106c7d5481b351e360635af4e3f099769947dff4bb26dc9bbb45?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/90cb54615cbf106c7d5481b351e360635af4e3f099769947dff4bb26dc9bbb45?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/90cb54615cbf106c7d5481b351e360635af4e3f099769947dff4bb26dc9bbb45?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                                  className="object-contain self-stretch my-auto w-10 rounded-none aspect-[0.48]"
                                />
                              </div>
                            </div>
                            <div className="flex gap-5 justify-between mt-4 max-w-full w-[249px]">
                              <div className="text-lg text-black text-opacity-50">
                                $ 123
                              </div>
                              <div className="text-lg text-black text-opacity-50">
                                1108
                              </div>
                              <div className="flex gap-0.5 self-start">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                                  className="object-contain shrink-0 self-start aspect-square w-[21px]"
                                />
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/30b109220e6ecea76371fbe14979484f7b6cbe893537ef5737176d9b85367761?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                                  className="object-contain shrink-0 my-auto w-5 aspect-square"
                                />
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ce7ef843da9a47bf5ba00e1336ff0cf1abbfaecacee23582b143b1a74a8c386?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                                  className="object-contain shrink-0 w-6 aspect-square"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 mt-2.5 max-w-full h-px w-[907px] max-md:mr-2.5" />
              <div className="flex gap-5 justify-between items-center mt-2.5 max-w-full w-[875px]">
                <div className="flex gap-3 self-stretch my-auto text-lg whitespace-nowrap text-black text-opacity-50">
                  <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                  <div>1741D</div>
                </div>
                <div className="flex gap-2.5 self-stretch text-lg text-black text-opacity-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                  <div className="my-auto basis-auto">Dollan watch</div>
                </div>
                <div className="flex gap-7 self-stretch my-auto text-lg text-black text-opacity-50">
                  <div className="grow">12569756</div>
                  <div className="basis-auto">Warehouse 1</div>
                  <div>$ 123</div>
                  <div>1108</div>
                </div>
                <div className="flex gap-0.5 self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 self-start aspect-square w-[21px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/631494c6c6382f69e7d0b945b5b742cb1cb06c4ab897a5e59cf0df55ced3c24c?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 my-auto w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb4376f4a2f2489e121a2cd9edfc7bb292bc10013ca49bd16a7770071168119b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="shrink-0 mt-2 max-w-full h-px w-[907px] max-md:mr-2.5" />
              <div className="flex gap-5 justify-between items-center mt-2.5 max-w-full w-[875px]">
                <div className="flex gap-3 self-stretch my-auto text-lg whitespace-nowrap text-black text-opacity-50">
                  <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                  <div>1741D</div>
                </div>
                <div className="flex gap-2.5 self-stretch text-lg text-black text-opacity-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                  <div className="my-auto basis-auto">Dollan watch</div>
                </div>
                <div className="flex gap-7 self-stretch my-auto text-lg text-black text-opacity-50">
                  <div className="grow">12569756</div>
                  <div className="basis-auto">Warehouse 1</div>
                  <div>$ 123</div>
                  <div>1108</div>
                </div>
                <div className="flex gap-0.5 self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 self-start aspect-square w-[21px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7220904dc24596fdcf1296da7d3aec1b95eb2035c9ea45c9b19cc0cde168059?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 my-auto w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32dcee13541bf707090692c8ffbe406b6fb52d34b1a5dff88098ef90f2e2d72b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="shrink-0 mt-2 max-w-full h-px w-[907px] max-md:mr-2.5" />
              <div className="flex gap-5 justify-between items-center mt-2.5 max-w-full w-[875px]">
                <div className="flex gap-3 self-stretch my-auto text-lg whitespace-nowrap text-black text-opacity-50">
                  <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                  <div>1741D</div>
                </div>
                <div className="flex gap-2.5 self-stretch text-lg text-black text-opacity-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                  <div className="my-auto basis-auto">Dollan watch</div>
                </div>
                <div className="flex gap-7 self-stretch my-auto text-lg text-black text-opacity-50">
                  <div className="grow">12569756</div>
                  <div className="basis-auto">Warehouse 1</div>
                  <div>$ 123</div>
                  <div>1108</div>
                </div>
                <div className="flex gap-0.5 self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 self-start aspect-square w-[21px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c7a32e85b884f97065c3718020d5bd9dc5a7cd2ae28c124e772c17c5fa3ab7?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 my-auto w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b068be57e015f31861839583229ff38ab576f9c2eac537c2fc22cca7b964b4b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="shrink-0 mt-2 max-w-full h-px w-[907px] max-md:mr-2.5" />
              <div className="flex gap-5 justify-between items-center mt-2.5 max-w-full w-[875px]">
                <div className="flex gap-3 self-stretch my-auto text-lg whitespace-nowrap text-black text-opacity-50">
                  <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                  <div>1741D</div>
                </div>
                <div className="flex gap-2.5 self-stretch text-lg text-black text-opacity-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                  <div className="my-auto basis-auto">Dollan watch</div>
                </div>
                <div className="flex gap-7 self-stretch my-auto text-lg text-black text-opacity-50">
                  <div className="grow">12569756</div>
                  <div className="basis-auto">Warehouse 1</div>
                  <div>$ 123</div>
                  <div>1108</div>
                </div>
                <div className="flex gap-0.5 self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 self-start aspect-square w-[21px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/94acf74d9165e46641e7c164a8c15d55a82ab6b3db9ba2a62b5819f4dbf20ab4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 my-auto w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aebf5d28ce0ff8c17633ed2d582e8d238a7222c7111f41bafdebde8cc6a62c3?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="shrink-0 mt-2 max-w-full h-px w-[907px] max-md:mr-2.5" />
              <div className="flex gap-5 justify-between items-center mt-2.5 max-w-full w-[875px]">
                <div className="flex gap-3 self-stretch my-auto text-lg whitespace-nowrap text-black text-opacity-50">
                  <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                  <div>1741D</div>
                </div>
                <div className="flex gap-2.5 self-stretch text-lg text-black text-opacity-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                  <div className="my-auto basis-auto">Dollan watch</div>
                </div>
                <div className="flex gap-7 self-stretch my-auto text-lg text-black text-opacity-50">
                  <div className="grow">12569756</div>
                  <div className="basis-auto">Warehouse 1</div>
                  <div>$ 123</div>
                  <div>1108</div>
                </div>
                <div className="flex gap-0.5 self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 self-start aspect-square w-[21px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cad2e65e0dfa6cb79e0e29ab7bed5a83f479d304e1b2aade4634934839d862e?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 my-auto w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffb0a3b81b37fb7151f5d2e9c6cfd19eeb722c4bc835db8957e9133a3ff7912b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="shrink-0 mt-2 max-w-full h-px w-[907px] max-md:mr-2.5" />
              <div className="flex gap-5 justify-between items-center mt-2.5 max-w-full w-[875px]">
                <div className="flex gap-3 self-stretch my-auto text-lg whitespace-nowrap text-black text-opacity-50">
                  <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                  <div>1741D</div>
                </div>
                <div className="flex gap-2.5 self-stretch text-lg text-black text-opacity-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                  <div className="my-auto basis-auto">Dollan watch</div>
                </div>
                <div className="flex gap-7 self-stretch my-auto text-lg text-black text-opacity-50">
                  <div className="grow">12569756</div>
                  <div className="basis-auto">Warehouse 1</div>
                  <div>$ 123</div>
                  <div>1108</div>
                </div>
                <div className="flex gap-0.5 self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 self-start aspect-square w-[21px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed79ca7c43bc45cd7bd28878110ef0eecf134e78553705cdd3c468772f48397?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 my-auto w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07067990822ee41655c1f55518476a790a38b8bee8609a01179d8cc99146ba2d?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="shrink-0 mt-2.5 max-w-full h-px w-[907px] max-md:mr-2.5" />
              <div className="flex gap-5 justify-between items-center mt-2.5 max-w-full w-[875px]">
                <div className="flex gap-3 self-stretch my-auto text-lg whitespace-nowrap text-black text-opacity-50">
                  <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                  <div>1741D</div>
                </div>
                <div className="flex gap-2.5 self-stretch text-lg text-black text-opacity-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                  <div className="my-auto basis-auto">Dollan watch</div>
                </div>
                <div className="flex gap-7 self-stretch my-auto text-lg text-black text-opacity-50">
                  <div className="grow">12569756</div>
                  <div className="basis-auto">Warehouse 1</div>
                  <div>$ 123</div>
                  <div>1108</div>
                </div>
                <div className="flex gap-0.5 self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 self-start aspect-square w-[21px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03395328a3e3e9d4ea7dd9d47fd580e0a22b0ebb668dcac98c6ee5dcfd535f87?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 my-auto w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ea6b74962780b2af2d59ba02bb700fda2cde195a24886c3368def58fbf95459?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="shrink-0 mt-2 max-w-full h-px w-[907px] max-md:mr-2.5" />
              <div className="flex gap-5 justify-between items-center mt-2.5 max-w-full w-[875px]">
                <div className="flex gap-3 self-stretch my-auto text-lg whitespace-nowrap text-black text-opacity-50">
                  <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                  <div>1741D</div>
                </div>
                <div className="flex gap-2.5 self-stretch text-lg text-black text-opacity-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                  <div className="my-auto basis-auto">Dollan watch</div>
                </div>
                <div className="flex gap-7 self-stretch my-auto text-lg text-black text-opacity-50">
                  <div className="grow">12569756</div>
                  <div className="basis-auto">Warehouse 1</div>
                  <div>$ 123</div>
                  <div>1108</div>
                </div>
                <div className="flex gap-0.5 self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 self-start aspect-square w-[21px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/98db78fb357287f80b5958d8846062275b8f4512b3114d9058d3b5d2f2612e3d?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 my-auto w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b5d40a63d06e7e05c1a6f45853408c4bf8a69545a687a920d74b955776c477f?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="shrink-0 mt-2 max-w-full h-px w-[907px] max-md:mr-2.5" />
              <div className="flex gap-5 justify-between items-center mt-2.5 max-w-full w-[875px]">
                <div className="flex gap-3 self-stretch my-auto text-lg whitespace-nowrap text-black text-opacity-50">
                  <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                  <div>1741D</div>
                </div>
                <div className="flex gap-2.5 self-stretch text-lg text-black text-opacity-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                  <div className="my-auto basis-auto">Dollan watch</div>
                </div>
                <div className="flex gap-7 self-stretch my-auto text-lg text-black text-opacity-50">
                  <div className="grow">12569756</div>
                  <div className="basis-auto">Warehouse 1</div>
                  <div>$ 123</div>
                  <div>1108</div>
                </div>
                <div className="flex gap-0.5 self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 self-start aspect-square w-[21px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c11f987b4f84617cec977fd905e845deb60d93d8dc550f4108e30bda534b6b1?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 my-auto w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8206a84248b950a210278044494ecadad71a9e10ee160daa41e77b94a287081f?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="shrink-0 mt-2 max-w-full h-px w-[907px] max-md:mr-2.5" />
              <div className="flex gap-5 justify-between items-center mt-2.5 max-w-full w-[875px]">
                <div className="flex gap-3 self-stretch my-auto text-lg whitespace-nowrap text-black text-opacity-50">
                  <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                  <div>1741D</div>
                </div>
                <div className="flex gap-2.5 self-stretch text-lg text-black text-opacity-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/201334fa4a4f9fadfa87425f0d4614e318ec19f862c85fc70074a5365b1aabaa?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                  <div className="my-auto basis-auto">Dollan watch</div>
                </div>
                <div className="flex gap-7 self-stretch my-auto text-lg text-black text-opacity-50">
                  <div className="grow">12569756</div>
                  <div className="basis-auto">Warehouse 1</div>
                  <div>$ 123</div>
                  <div>1108</div>
                </div>
                <div className="flex gap-0.5 self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 self-start aspect-square w-[21px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb766bca0e0259275c41be8f37a6b448d507831169fd06ba1ca9127567bcd14b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 my-auto w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/798fe7be85bb8abf2b6e126c84e34207e694d490e535564ced8d277de2282287?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="shrink-0 mt-2 max-w-full h-px w-[907px] max-md:mr-2.5" />
              <div className="flex gap-5 justify-between items-start mt-2.5 max-w-full w-[875px]">
                <div className="flex gap-3 mt-3.5 text-lg whitespace-nowrap text-black text-opacity-50">
                  <div className="flex shrink-0 my-auto bg-white rounded-sm border border-solid border-black border-opacity-30 h-[18px] w-[18px]" />
                  <div>1741D</div>
                </div>
                <div className="flex gap-2.5 self-stretch text-lg text-black text-opacity-50">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d1274268c1e06de35840926029e9a48b514039b143edf9d3fb2c1c036b46b38?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1274268c1e06de35840926029e9a48b514039b143edf9d3fb2c1c036b46b38?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1274268c1e06de35840926029e9a48b514039b143edf9d3fb2c1c036b46b38?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1274268c1e06de35840926029e9a48b514039b143edf9d3fb2c1c036b46b38?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1274268c1e06de35840926029e9a48b514039b143edf9d3fb2c1c036b46b38?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1274268c1e06de35840926029e9a48b514039b143edf9d3fb2c1c036b46b38?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1274268c1e06de35840926029e9a48b514039b143edf9d3fb2c1c036b46b38?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1274268c1e06de35840926029e9a48b514039b143edf9d3fb2c1c036b46b38?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 aspect-[1.35] w-[50px]"
                  />
                  <div className="self-start mt-3.5 basis-auto">
                    Dollan watch
                  </div>
                </div>
                <div className="flex gap-7 mt-3 text-lg text-black text-opacity-50">
                  <div className="grow">12569756</div>
                  <div className="basis-auto">Warehouse 1</div>
                  <div>$ 123</div>
                  <div>1108</div>
                </div>
                <div className="flex gap-0.5 mt-3.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb23fbcfe2e23692ec1f5549c8b8ddb3cf2c3247012b1e9c0fe1ac7fccc40d4?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 self-start aspect-square w-[21px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5dc93c73e91a91f66d6da8a1148db5a8cf3874fe954c21f8625e8a72cb91b3d?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 my-auto w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f3224a777cc468cf1756372b4cd34e61b541adde2cbd0493be5b1651a2a630c?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                    className="object-contain shrink-0 w-6 aspect-[1.04]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-6 pt-10 w-full text-xl font-bold text-white bg-slate-600 pb-[612px] max-md:px-5 max-md:pb-24">
              <div className="text-2xl">Preview Product</div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/422177226cd72c14791e4076ac2068a07858195ebfddf8320e9e0beaafab071b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/422177226cd72c14791e4076ac2068a07858195ebfddf8320e9e0beaafab071b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/422177226cd72c14791e4076ac2068a07858195ebfddf8320e9e0beaafab071b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/422177226cd72c14791e4076ac2068a07858195ebfddf8320e9e0beaafab071b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/422177226cd72c14791e4076ac2068a07858195ebfddf8320e9e0beaafab071b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/422177226cd72c14791e4076ac2068a07858195ebfddf8320e9e0beaafab071b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/422177226cd72c14791e4076ac2068a07858195ebfddf8320e9e0beaafab071b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/422177226cd72c14791e4076ac2068a07858195ebfddf8320e9e0beaafab071b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4"
                className="object-contain self-center mt-6 max-w-full rounded-xl aspect-[0.99] w-[180px]"
              />
              <div className="mt-4">1741D - Dollan Watch</div>
              <div className="self-stretch mt-2.5">
                Stock : 1108 - Warehouse 1
              </div>
              <div className="mt-3">Price : $ 123</div>
              <div className="mt-2">Status : Ready Stock</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent