import React from "react";

const Reviews = () => {
  return (
    <section id="reviews">
      <div class="text-6xl my-8 font-semibold text-center font-sans ">
        Testimonials <br />{" "}
        <i class="text-3xl">Read what people say about us!!! </i>
      </div>
      <div class="max-w-6xl py-20 pt-6 mx-auto mb-10">
        <div
          id="default-carousel"
          class="relative hover:shadow-red-500 shadow-2xl "
          data-carousel="static"
        >
          <div class="overflow-hidden relative h-56 rounded-lg sm:h-96 xl:h-80 2xl:h-96 ">
            <div
              class="hidden duration-700 ease-in-out bg-1"
              data-carousel-item
            >
              <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl  ">
                {" "}
                <i>
                  {" "}
                  "I can't believe how accurate this website's predictions are!
                  It alerted me to my risk of diabetes, and I've made
                  significant lifestyle changes as a result. Thank you!"
                </i>{" "}
                <br />
                ~John Doe
              </span>
            </div>

            <div
              class="hidden duration-700 ease-in-out bg-2"
              data-carousel-item
            >
              <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl ">
                <i>
                  "I've been using this platform for a few months now, and it's
                  been an invaluable tool for managing my diabetes. The ability
                  to track my glucose levels and receive personalized
                  recommendations has made a real difference in my life."
                </i>
                <br />
                ~David Johnson
              </span>
            </div>

            <div
              class="hidden duration-700 ease-in-out bg-3"
              relative
              data-carousel-item
            >
              <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl ">
                <i>
                  "As someone with a family history of hypertension, I've always
                  been concerned about my health. This website has been a
                  game-changer for me. It's easy to use and provides valuable
                  insights into my health risks."
                </i>{" "}
                <br /> ~Jane Smith{" "}
              </span>
            </div>
          </div>

          <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>

          <button
            type="button"
            class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
              <svg
                class="w-5 h-5 text-white sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="hidden">Anterior</span>
            </span>
          </button>
          <button
            type="button"
            class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 0 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
              <svg
                class="w-5 h-5 text-white sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span class="hidden">Siguiente</span>
            </span>
          </button>
        </div>

        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      </div>
    </section>
  );
};

export default Reviews;
