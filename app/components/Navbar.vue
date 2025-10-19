<template>
  <header class="w-full absolute flex items-center justify-center">
    <nav
      class="flex items-center justify-between px-4 md:justify-around w-full h-[10vh] sm:h-[15vh] md:h-[20vh]"
    >
      <!-- Logo -->
      <div class="flex items-center justify-center w-[25%] md:w-[18%]">
        <img src="/Logo.png " alt="hello" class="h-full w-auto" />
      </div>

      <img class="md:hidden" src="/menu.png" alt="" />
      <!-- Navigation Links -->
      <ul class="md:flex space-x-6 text-white font-medium hidden">
        <li><a href="#home" class="hover:text-blue-600">Home</a></li>
        <li><a href="#about" class="hover:text-blue-600">About</a></li>
        <li><a href="#pricing" class="hover:text-blue-600">Pricing</a></li>
      </ul>

      <div
        class="bg-[#F9A71E] w-[16vw] h-[50%] md:flex items-center justify-center rounded-md hidden"
      >
        <span class="text-[2vw]">Start Sandbox</span>
      </div>
    </nav>
  </header>
</template>
