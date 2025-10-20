<script setup>
import Navbar from "./components/Navbar.vue";
import Footer_Box from "./components/Footer_Box.vue";
</script>

<template>
  <div class="w-full h-full p-0 m-0">
    <Navbar />

    <!-- Hero section  -->
    <section
      class="bg-[url('/vectorone.png')] w-[100vw] bg-cover bg-center p-2 mb-2"
    >
      <div
        class="flex flex-col items-center justify-center w-full h-[50%] mt-[10vh] md:mt-[36vh] sm:mt-[15vh]"
      >
        <div class="w-full h-auto">
          <h1
            class="text-[9vw] sm:text-[8vw] md:text-[5vw] text-white text-center"
          >
            The First
            <span class="bg-[#F9A71E] w-[16vw] rounded-lg text-[#42389E]"
              >Dart-Native</span
            >
            Feature Flag With DartCodeAI
          </h1>
        </div>

        <div class="text-[4vw] sm:text-[3vw] md-[text-1vw] md:px-16">
          <span class="hidden md:flex text-center text-white"
            >Feature Flags Built For Dart. Ship faster, control rollouts, and
            get ready for AI-powered delivery</span
          >
          <div
            class="hidden md:flex items-center justify-center w-full text-[#F9A71E] text-[3vw]"
          >
            starting with $1/month
          </div>
          <span class="md:hidden text-white"
            >Ship faster, control rollouts, and get ready for AI-powered
            delivery, starting with $1/month for a limited time</span
          >
        </div>

        <div class="w-full md:flex items-center justify-center">
          <a
            href=""
            class="w-full md:w-[30%] flex items-center justify-center bg-[#F9A71E] rounded-sm mb-2 text-[7vw] md:text-[4vw] md:mb-0 md:mr-4 md:rounded-md"
          >
            Get started</a
          >
          <a
            href=""
            class="w-full md:w-[30%] flex items-center justify-center border border-[#F9A71E] rounded-sm text-[#F9A71E] text-[7vw] md:text-[4vw] md:rounded-md"
            >Learn more</a
          >
        </div>
      </div>
      <div class="w-full h-[50%] flex items-center justify-center">
        <img class="w-full md:w-[80%]" src="/dashboard.png" alt="" />
      </div>
    </section>

    <!-- Trusted engineering team section -->
    <section class="flex flex-col items-center justify-center w-full mb-12">
      <h2 class="text-[5vw] text-[#1A1C3D]">
        Trusted by various team engineers
      </h2>
      <ul class="flex items-center justify-center w-[60%]">
        <li class="w-[30%]"><img src="/googlecloud.png" alt="" /></li>
        <li class="w-[30%]"><img src="/amazonaws.png" alt="" /></li>
        <li class="w-[30%]"><img src="/microsoftazure.png" alt="" /></li>
        <li class="w-[30%]"><img src="/digitalocean.png" alt="" /></li>
        <li class="w-[30%]"><img src="/ibm.png" alt="" /></li>
      </ul>
    </section>

    <!-- AI Dart control section -->
    <section
      class="p-2 flex flex-col items-center justify-center w-full mb-24 md:p-16"
    >
      <div class="w-full flex flex-col items-center justify-center">
        <h1 class="hidden md:flex text-[4vw]">What is IntelliToggle</h1>
        <div class="w-full md:flex md:items-center md:justify-between h-full">
          <div class="md:w-[45%]">
            <h1
              class="text-[#42389E] text-[7vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] font-bold"
            >
              Your AI Dart App's Control
              <span
                class="text-[#0F1026] text-[7vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] font-bold mb-4"
              >
                Panel for Future Realeases
              </span>
            </h1>

            <p
              class="text-[#5F5F60] text-[4vw] sm:text-[2.5vw] mb-2 md:text-[1.5vw] lg:text-[1vw]"
            >
              IntelliToggle is a 'Dart powered' featured flag that let's you
              turn features on/off instantly in your application without
              redeploying code. it allows you to control roll outs, run
              experiments, fix bugs faster.
            </p>
            <h2
              class="w-full text-start text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] font-bold"
            >
              Benefits
            </h2>
            <ul class="list-disc w-full">
              <li
                class="text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw]"
              >
                Toggle new features without app updates
              </li>
              <li
                class="text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw]"
              >
                Roll out specific users or regions
              </li>
              <li
                class="text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw]"
              >
                Install rollback when needed
              </li>
            </ul>
          </div>

          <div
            class="w-full md:w-[45%] md:h-[40vw] flex items-center justify-center"
          >
            <img class="w=full h-full" src="/benefitspic.png" />
          </div>
        </div>
      </div>
    </section>

    <!-- Open Feature Section -->
    <section class="p-2 mb-24 md:p-16 items-center justify-between lg:flex">
      <div
        class="w-full lg:w-[50%] lg:h-[40vw] h-[40vh] border border-[#42489E] border-opacity-20 rounded-[16px] flex items-center justify-center mb-8"
      >
        <img class="w-[60%]" src="/openfeaturestackedblack.png" />
      </div>

      <div class="w-full flex flex-col items-center justify-center lg:w-[40%]">
        <h2 class="text-[5vw] font-bold mb-2 md:text-[2.5vw] lg:text-[2vw]">
          Seemless Feature Management With OpenFeature
        </h2>
        <p class="text-[4vw] mb-8 md:text-[2vw] lg:text-[1.4vw]">
          Aortem now intergrates with OpenFeature to provide developer with
          powerful, standerdized approach to feature flagging and dynamic
          confuguration. Ship feature sfaster, test safely, and optimize user
          experince effortlessly.
        </p>

        <NuxtLink
          to="/"
          class="w-full h-[12vw] bg-gradient-to-t from-[#42389E] to-[#0F1026] flex items-center justify-center rounded-md md:bg-yellow-400 md:w-[30%] md:h-[8vw] lg:w-[40%] lg:h-[4vw]"
        >
          <span
            class="text-white text-[5vw] md:text-[3vw] lg:text-[1.4vw] font-bold"
            >Learn more</span
          ></NuxtLink
        >
      </div>
    </section>
    <!-- Control & Focused section -->
    <section class="w-full md:p-16">
      <div class="p-2 w-full flex flex-col items-center justify-center">
        <h1
          class="w-full text-center text-[7vw] md:text-[4vw] md:mb-16 font-bold text-[#42389E] mb-4"
        >
          Control & Focused-Power
        </h1>
        <ul class="w-full md:flex md:overflow-x-auto">
          <li class="w-full mb-10 md:mr-6">
            <img src="/Connect.png" class="w-full" alt="" />
            <h2 class="text-[5vw] font-bold mb-2 md:text-[2.5vw]">Connect</h2>
            <p class="text-[4vw] mb-2 md:text-[1vw]">
              Install SDK in your Dart project in 2 minutes.
            </p>
            <NuxtLink
              to="/"
              class="w-[50vw] border border-yellow-400 rounded-md h-[10vw] flex items-center justify-center md:h-[2.5vw] md:w-[12vw]"
              ><span class="text-[4vw] text-yellow-400 md:text-[1vw]"
                >View Documentation</span
              >
            </NuxtLink>
          </li>
          <li class="w-full mb-10 md:mr-6 md:mb-0">
            <img src="/shipcontrol.png" class="w-full" />
            <h2 class="text-[5vw] font-bold mb-2 md:text-[2.5vw]">
              Create Flags
            </h2>
            <p class="text-[4vw] mb-2 md:text-[1vw]">
              Define Features in IntelliToggle dashboard.
            </p>
            <NuxtLink
              to="/"
              class="w-[50vw] border border-yellow-400 rounded-md h-[10vw] flex items-center justify-center md:h-[2.5vw] md:w-[12vw]"
              ><span class="text-[4vw] text-yellow-400 md:text-[1vw]"
                >View Documentation</span
              >
            </NuxtLink>
          </li>
          <li class="w-full mb-10 md:mr-6">
            <img src="/createflags.png" class="w-full" />
            <h2 class="text-[5vw] font-bold mb-2 md:text-[2.5vw]">
              Ship & Control
            </h2>
            <p class="text-[4vw] mb-2 md:text-[1vw]">
              Flip switches anytime, see instant results.
            </p>
            <NuxtLink
              to="/"
              class="w-[50vw] border border-yellow-400 rounded-md h-[10vw] flex items-center justify-center md:h-[2.5vw] md:w-[12vw]"
              ><span class="text-[4vw] text-yellow-400 md:text-[1vw]"
                >View Documentation</span
              >
            </NuxtLink>
          </li>
        </ul>
        <div
          class="md:flex lg:hidden justify-center items-center gap-2 py-3 hidden"
        >
          <span class="w-6 h-2 bg-[#2A1E7A] rounded-full"></span>
          <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>

    <section class="flex flex-col items-center justify-center px-4 mb-24">
      <h1 class="text-[6vw] font-bold mb-2 w-full md:text-[3vw] text-center">
        Dart-Powered Featured Flag
      </h1>
      <div class="w-full mb-12 lg:text-center">
        <h2 class="text-[5vw] font-bold mb-2 md:text-[2.5vw]">
          Not Another Generic Feature Flag Tool
        </h2>

        <p class="text-[4vw] md:text-[1.5vw] md:px-32">
          Most tools are built for every language, which means extra layers and
          slower toggles. IntelliToggle is built in Dart, for Dart — so it's
          faster, safer, and built for your stack.
        </p>
      </div>
      <div
        class="w-full max-w-5xl overflow-hidden shadow-lg border border-gray-200 bg-white"
      >
        <!-- Scrollable wrapper for mobile -->
        <div class="overflow-x-auto">
          <table class="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr
                class="bg-gradient-to-r from-[#2A1E7A] to-[#1B1C7A] text-white"
              >
                <th class="py-4 px-6 text-lg font-semibold">Features</th>
                <th class="py-4 px-6 text-lg font-semibold text-center">
                  IntelliToggle
                </th>
                <th class="py-4 px-6 text-lg font-semibold text-center">
                  Other Feature Flag
                </th>
              </tr>
            </thead>
            <tbody class="bg-[#E8E6EF] text-gray-700">
              <tr class="border-t border-gray-300">
                <td class="py-3 px-6 font-medium">Dart-native SDK & server</td>
                <td class="text-center">✓</td>
                <td class="text-center">✗</td>
              </tr>
              <tr class="">
                <td class="py-3 px-6 font-medium">End-to-end type safety</td>
                <td class="text-center">✓</td>
                <td class="text-center">✗</td>
              </tr>
              <tr class="">
                <td class="py-3 px-6 font-medium">
                  AI-assisted roll-outs &amp; cleanup
                </td>
                <td class="text-center">✓</td>
                <td class="text-center">✗</td>
              </tr>
              <tr class="">
                <td class="py-3 px-6 font-medium">A/B testing built-in</td>
                <td class="text-center">✓</td>
                <td class="text-center">✗</td>
              </tr>
              <tr class="">
                <td class="py-3 px-6 font-medium">Dart-Powered SDKs</td>
                <td class="text-center">✓</td>
                <td class="text-center">✗</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Scroll indicator for mobile only -->
      <div class="flex justify-center items-center gap-2 py-3 md:hidden">
        <span class="w-6 h-2 bg-[#2A1E7A] rounded-full"></span>
        <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>
    </section>

    <section class="w-full">
      <div class="bg-gradient-to-b from-[#42389E] to-[#1A1C3D] w-full h-auto">
        <div class="bg-[url('/Ai.jpg')] p-4">
          <div class="flex flex-col items-center justify-center">
            <button
              class="bg-[#F9A71E] rounded-lg lg:w-[15vw] w-[15vw] mb-4 flex items-center justify-center"
            >
              <span class="text-[2vw]">Coming Soon</span>
            </button>
            <h1 class="text-white text-[3vw]">
              DartCodeAI That Actually Changes Flagging
            </h1>
          </div>

          <div class="w-full md:p-24">
            <ul
              class="w-full flex flex-col items-center justify-around md:flex md:flex-row md:flex-wrap"
            >
              <li
                class="w-full flex flex-col items-center justify-center border border-[#EDECF6] rounded-md p-4 mb-3 md:w-[40%] md:h-full"
              >
                <div
                  class="w-[4vh] h-auto bg-[#DEDEDE] p-1 mb-4 border rounded-sm"
                >
                  <img
                    src="/letsiconsflagfill.png"
                    class="w-full h-auto"
                    alt=""
                  />
                </div>
                <div class="w-full">
                  <h2 class="text-[#FEFEFF] text-[1rem] text-center mb-2">
                    AutoFlag AI (LLM-Assisted Flag Creation)
                  </h2>
                  <p class="text-[#DEDEDE] text-[0.7rem] text-center">
                    Create new flags just by typing what you need. The AI names
                    it, sets rules, and configures targeting for you..
                  </p>
                </div>
              </li>
              <li
                class="w-full flex flex-col items-center justify-center border border-[#EDECF6] rounded-md p-4 mb-3 md:w-[40%] md:h-full"
              >
                <div
                  class="w-[4vh] h-auto bg-[#DEDEDE] p-1 mb-4 border rounded-sm"
                >
                  <img
                    src="/icroundsmarttoy.png"
                    class="w-full h-auto"
                    alt=""
                  />
                </div>
                <div class="w-full">
                  <h2 class="text-[#FEFEFF] text-[1rem] text-center mb-2">
                    SmartRamp AI (AI-Driven Rollout Optimization)
                  </h2>
                  <p class="text-[#DEDEDE] text-[0.7rem] text-center">
                    Rollouts that adjust themselves. AI expands, pauses, or
                    rolls back based on real-time metrics.
                  </p>
                </div>
              </li>
              <li
                class="w-full flex flex-col items-center justify-center border border-[#EDECF6] rounded-md p-4 mb-3 md:w-[40%] md:h-full"
              >
                <div
                  class="w-[4vh] h-auto bg-[#DEDEDE] p-1 mb-4 border rounded-sm"
                >
                  <img
                    src="/mingcutesearchaifill.png"
                    class="w-full h-auto"
                    alt=""
                  />
                </div>
                <div class="w-full">
                  <h2 class="text-[#FEFEFF] text-[1rem] text-center mb-2">
                    ExplainFlags AI (LLM Root-Cause + Insights)
                  </h2>
                  <p class="text-[#DEDEDE] text-[0.7rem] text-center">
                    Understand issues instantly with AI-generated,
                    plain-language insights tied to your flags.
                  </p>
                </div>
              </li>
              <li
                class="w-full flex flex-col items-center justify-center border border-[#EDECF6] rounded-md p-4 mb-3 md:w-[40%] md:h-full"
              >
                <div
                  class="w-[4vh] h-auto bg-[#DEDEDE] p-1 mb-4 border rounded-sm"
                >
                  <img
                    src="/phlinesegmentsfill.png"
                    class="w-full h-auto"
                    alt=""
                  />
                </div>
                <div class="w-full">
                  <h2 class="text-[#FEFEFF] text-[1rem] text-center mb-2">
                    AutoSegment AI (Behavioral Segmentation)
                  </h2>
                  <p class="text-[#DEDEDE] text-[0.7rem] text-center">
                    Target the right users automatically. AI builds segments
                    from live behavior—no manual rules.
                  </p>
                </div>
              </li>
            </ul>
            <div
              class="hidden w-full lg:flex items-center justify-center my-8 font-bold"
            >
              <h2 class="text-[2vw] text-orange-400">Enterprise Only</h2>
            </div>
            <div
              class="w-full border border-[#EDECF6] rounded-md flex flex-col items-center justify-evenly p-4 md:px-48 lg:flex-row lg:justify-between lg:px-4"
            >
              <h1
                class="w-full text-[4vw] md:text-[3vw] text-white text-center mb-4 lg:text-[1.5vw]"
              >
                Be The First To Try Out Our New AI Features.
              </h1>
              <form
                action=""
                class="w-full border border-[#EDECF6] rounded-md flex items-center justify-center p-1 h-[8vw] lg:h-[4vw]"
              >
                <input
                  class="w-[70%] h-full bg-transparent"
                  type="text"
                  placeholder="Enter email address"
                />
                <button
                  type="submit"
                  class="w-[30%] h-full bg-[#F9A71E] border-r rounded-sm flex items-center justify-center"
                >
                  <span class="text-black text-[1vw] font-bold"
                    >Get access</span
                  >
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col items-center justify-center p-4 w-full bg-[#E6E7F4] mb-44"
    >
      <h1 class="text-lg text-[#1A1C3D] font-bold md:hidden">
        Control & Power-Focused
      </h1>

      <div
        class="w-full bg-gradient-to-b from-[#3e1f92] to-[#2a1668] text-white rounded-2xl p-4 shadow-lg mb-16 md:hidden"
      >
        <div>
          <!-- Popular badge -->
          <div class="w-full flex items-center justify-start mb-2">
            <img class="mr-2 w-[12%] h-auto" src="/vector.png" alt="" />
            <h1
              class="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-center text-[1rem] h-auto"
            >
              Popular
            </h1>
          </div>

          <!-- Header -->
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold">Enhance Plan</h3>
            <span
              class="bg-[#E1E2F0] text-[#42389E] text-[1rem] font-bold text-xs px-3 py-1 rounded-lg"
              >Billed annually</span
            >
          </div>

          <!-- Price -->
          <div class="mb-8">
            <h1 class="text-5xl font-extrabold">
              $149<span class="text-lg font-normal text-gray-300">/month</span>
            </h1>
          </div>
        </div>
        <!-- Features -->
        <ul class="space-y-3 mb-8 text-gray-200 text-sm">
          <li class="flex items-start gap-2 text-[0.9rem]">
            <span class="text-emerald-400 font-bold">✓</span>
            Multi-environment support (Dev / Staging / Prod)
          </li>
          <li class="flex items-start gap-2 text-[0.9rem]">
            <span class="text-emerald-400 font-bold">✓</span> Unlimited feature
            flags and projects
          </li>
          <li class="flex items-start gap-2 text-[0.9rem]">
            <span class="text-emerald-400 font-bold">✓</span> Advanced targeting
            rules with custom attributes
          </li>
          <li class="flex items-start gap-2 text-[0.9rem]">
            <span class="text-emerald-400 font-bold">✓</span>
            Environment-specific flags
          </li>
          <li class="flex items-start gap-2 text-[0.9rem]">
            <span class="text-emerald-400 font-bold">✓</span> Real-time
            streaming updates (WebSocket / gRPC)
          </li>
          <li class="flex items-start gap-2 text-[0.9rem]">
            <span class="text-emerald-400 font-bold">✓</span> Analytics hooks
            (flag usage tracking)
          </li>
          <li class="flex items-start gap-2 text-[0.9rem]">
            <span class="text-emerald-400 font-bold">✓</span> Built-in A/B
            testing / experimentation dashboard
          </li>
          <li class="flex items-start gap-2 text-[0.9rem]">
            <span class="text-emerald-400 font-bold">✓</span> Audit logs (90-day
            retention + export in CSV/JSON)
          </li>
          <li class="flex items-start gap-2 text-[0.9rem]">
            <span class="text-emerald-400 font-bold">✓</span> API access with
            multiple keys & custom roles
          </li>
        </ul>

        <!-- Button -->
        <button
          class="w-full border border-[#FFFFFF] rounded-lg text-white font-bold py-3"
        >
          Subscribe
        </button>
      </div>
      <div class="hidden md:flex text-[3.5vw] font-bold mb-12">
        Plans Built For Every Stage Of Growth
      </div>
      <button
        class="text-white hidden bg-gradient-to-b from-[#42389E] to-[#0F1026] rounded-md w-[35vw] p-2 mb-8 lg:flex lg:flex-col items-center justify-center"
      >
        <span class="text-[2vw] w-full text-center"> Prices start at </span>
        <span class="text-[2vw] w-full text-center">
          <span class="text-[3vw]">$10</span> /month</span
        >
      </button>
      <button class="hidden md:flex bg-[#F9A71E] rounded-md w-[35vw] p-2 mb-8">
        <Span class="text-[2vw] w-full text-center lg:hidden"
          >View Full Price Compensation</Span
        >
        <span
          class="text-[2vw] w-full text-center hidden lg:flex items-center justify-center"
        >
          View Subscription Details
        </span>
      </button>
      <div
        class="w-full flex flex-col items-center justify-center border border-[#42389E] p-4 rounded-lg md:flex-row md:justify-between"
      >
        <div
          class="w-[80%] h-full flex flex-col items-center justify-center mb-12 lg:w-[40%]"
        >
          <h1 class="text-center text-[#0E121B] text-[1.2rem] font-bold mb-4">
            Start Your 7-Day Free Sandbox Plan
          </h1>
          <p class="text-center text-[#5F5F60] text-[1rem] md:text-[#0E121B]">
            Join over 1,000+ startups already growing with Untitled.
          </p>
        </div>

        <div
          class="flex flex-col items-center justify-center w-[50%] md:w-[25%] lg:w-[30%] lg:flex-row"
        >
          <button
            class="w-full h-[14vw] bg-[#F9A71E] flex items-center justify-center mb-1 rounded-lg md:h-[6vw] lg:h-[4vw] lg:mb-0 lg:mr-8"
          >
            <span class="text-[3.5vw] md:text-[1.5vw] font-bold lg:text-[1vw]">
              Get Started</span
            >
          </button>
          <button
            class="w-full h-[14vw] border border-[#F9A71E] text-[#F9A71E] flex items-center justify-center rounded-lg md:h-[6vw] lg:h-[4vw] font-bold"
          >
            <span class="text-[3.5vw] md:text-[1.5vw] lg:text-[1vw]">
              Learn More</span
            >
          </button>
        </div>
      </div>
    </section>

    <section class="hidden lg:flex w-full px-6 text-center mb-24">
      <div>
        <h2 class="text-3xl font-semibold mb-14">
          Why Teams Use IntelliToggle
        </h2>

        <div class="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div
              class="w-24 h-24 mx-auto flex items-center justify-center border rounded-md border-[#c5c6f0] bg-[#f5f5ff]"
            >
              <img src="/controlfilled.png" class="w-10 h-10" />
            </div>
            <h3 class="mt-6 font-semibold text-lg">Safer, faster rollouts</h3>
            <p class="text-gray-500 mt-2">
              Control feature releases in minutes, not weeks without risking
              production stability.
            </p>
          </div>

          <div>
            <div
              class="w-24 h-24 mx-auto flex items-center justify-center border rounded-md border-[#c5c6f0] bg-[#f5f5ff]"
            >
              <img src="/codedeploy.png" class="w-10 h-10" />
            </div>
            <h3 class="mt-6 font-semibold text-lg">Confidence to ship</h3>
            <p class="text-gray-500 mt-2">
              “Flip, target, and roll back. Engineers ship more often knowing
              they can undo mistakes.”
            </p>
          </div>

          <div>
            <div
              class="w-24 h-24 mx-auto flex items-center justify-center border rounded-md border-[#c5c6f0] bg-[#f5f5ff]"
            >
              <img src="/aioperator.png" class="w-10 h-10" />
            </div>
            <h3 class="mt-6 font-semibold text-lg">
              Future-ready with AI delivery
            </h3>
            <p class="text-gray-500 mt-2">
              Built for Dart workflows and already prepared for AI-powered
              rollout automation tomorrow.
            </p>
          </div>
        </div>

        <!-- Bottom note -->
        <div
          class="border border-[#c5c6f0] rounded-lg flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-[#f7f7ff]"
        >
          <p class="text-lg font-medium">
            Read a 2-min case note:
            <span class="text-gray-600">
              How a sample Flutter app shipped faster with IntelliToggle
            </span>
          </p>
          <button
            class="mt-4 md:mt-0 bg-[#f8a300] hover:bg-[#e29300] text-white font-semibold px-6 py-2 rounded-md"
          >
            Read Now
          </button>
        </div>
      </div>
    </section>

    <section class="p-4 mb-12">
      <div
        class="flex items-center justify-center px-6 py-12 bg-gradient-to-b from-[#42389E] to-[#0F1026] rounded-3xl"
      >
        <div class="flex flex-col items-center justify-center">
          <div class="w-full mb-6">
            <h2 class="text-white text-center text-[8vw] md:text-[4vw] mb-4">
              Launch Features Confidently With AI Driven Feature Flags
            </h2>
            <p class="text-white text-center text-[4vw] md:text-[2.5vw]">
              Start for free, scale as your team grows
            </p>
          </div>
          <!-- mobile button view -->
          <div class="w-full md:hidden">
            <button
              class="w-full h-[10vw] bg-[#F9A71E] flex items-center justify-center mb-1 rounded-lg"
            >
              <span class="text-[4vw]">Get Started</span>
            </button>
            <button
              class="w-full h-[10vw] border border-[#F9A71E] text-[#F9A71E] flex items-center justify-center rounded-lg"
            >
              <span class="text-[4vw]">Learn More</span>
            </button>
          </div>

          <!-- Tablet and desktop button -->
          <div class="w-full items-center justify-evenly hidden md:flex">
            <button
              class="w-[40%] h-[6vw] bg-[#F9A71E] flex items-center justify-center rounded-lg"
            >
              <span class="text-[3vw] font-bold">Start for $1/mo</span>
            </button>
            <button
              class="w-[40%] h-[6vw] border border-[#F9A71E] text-[#F9A71E] flex items-center justify-center rounded-lg"
            >
              <span class="text-[3vw] font-bold"> Join AI Early Access</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <Footer_Box />
  </div>
</template>
