<template>
  <footer class="w-full bg-[#E1E2F0] px-4 pt-10 pb-20 md:px-16 lg:py-12">
    <div
      class="w-full h-full flex flex-col items-start md:flex-row md:items-start md:justify-between"
    >
      <div
        class="w-full lg:w-[40%] flex items-center justify-center flex-col h-full lg:mr-6"
      >
        <div class="flex items-start w-full h-auto mb-2">
          <img src="/Logo-two.png" class="h-auto w-[50%]" />
        </div>
        <h1 class="text-[4vw] mb-2 md:text-[1.4vw] lg:text-[1vw]">
          IntelliToggle is built by AORTEM, a company focused on powering
          scalable, multi-platform developer tools.
        </h1>
        <div class="items-start w-full">
          <a href=""
            ><img
              src="/github.png"
              class="w-[10vw] h-auto border rounded-full object-contain mb-2 md:w-[3vw]"
              alt="github"
          /></a>
        </div>
      </div>
      <div class="w-full lg:w-[70%] lg:flex">
        <div
          class="w-full flex lg:flex-row items-top justify-between mb-24 lg:mb-8"
        >
          <div>
            <h2 class="text-[4vw] mb-1 md:text-[2vw] lg:text-[1vw]">Company</h2>
            <ul>
              <li
                class="text-[4vw] font-bold mb-1 md:text-[2vw] lg:text-[1vw] md:mb-3"
              >
                pricing
              </li>
              <li
                class="text-[4vw] font-bold mb-1 md:text-[2vw] lg:text-[1vw] md:mb-3"
              >
                Doc
              </li>
              <li class="text-[4vw] font-bold md:text-[2vw] lg:text-[1vw]">
                About Us
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-[4vw] mb-1 md:text-[2vw] lg:text-[1vw]">
              Resources
            </h2>
            <ul>
              <li
                class="text-[4vw] font-bold mb-1 md:text-[2vw] lg:text-[1vw] md:mb-3"
              >
                Why IntelliToggle is Different
              </li>
              <li
                class="text-[4vw] font-bold mb-1 md:text-[2vw] lg:text-[1vw] md:mb-3"
              >
                Customer Support
              </li>
              <li
                class="text-[4vw] font-bold mb-1 md:text-[2vw] lg:text-[1vw] md:mb-3"
              >
                Terms & Conditions
              </li>
              <li class="text-[4vw] font-bold md:text-[2vw] lg:text-[1vw]">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div class="w-full hidden lg:flex lg:flex-col lg:w-[30%]">
            <h2 class="text-[4vw] font-bold mb-4 md:text-[2vw] lg:text-[1vw]">
              Subscribe to Newsletter
            </h2>
            <form
              action=""
              class="w-full h-[10vw] md:h-[5vw] lg:h-[2vw] flex items-center justify-center"
            >
              <input
                class="w-[70%] h-full rounded-l-sm md:rounded-l-md p-4 md:text-[2vw] lg:text-[1vw]"
                placeholder="Enter email address"
                type="text"
              />
              <button
                type="submit"
                class="w-[30%] bg-gradient-to-b h-full from-[#42389E] to-[#0F1026] md:bg-gradient-to-b md:from-[#F9A71E] md:to-[#F9A71E] md:rounded-r-sm rounded-r-md text-white flex items-center justify-center"
              >
                <span class="text-[4vw] md:text-[2vw] lg:text-[1vw]">Join</span>
              </button>
            </form>
          </div>
        </div>

        <div class="w-full lg:hidden">
          <h2 class="text-[4vw] font-bold mb-4 md:text-[2vw] lg:text-[1vw]">
            Subscribe to Newsletter
          </h2>
          <form
            action=""
            class="w-full h-auto flex items-center justify-center"
          >
            <input
              class="w-[70%] h-[10vw] md:h-[5vw] rounded-l-sm md:rounded-l-md p-4"
              placeholder="Enter email adress"
              type="text"
            />
            <button
              type="submit"
              class="w-[30%] bg-gradient-to-b from-[#42389E] to-[#0F1026] md:bg-gradient-to-b md:from-[#F9A71E] md:to-[#F9A71E] md:rounded-r-md rounded-r-sm text-white h-[10vw] md:h-[5vw] flex items-center justify-center"
            >
              <span class="text-[4vw] md:text-[2vw] text-center">Join</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>
