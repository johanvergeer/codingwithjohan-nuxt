<template>
  <footer class="bg-blue-700 text-white">
    <div
      class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8"
    >
      <ul class="flex items-center text-xl space-x-4">
        <li class="text-white hover:text-gray-400 font-light">
          Copyright {{ new Date().getFullYear() }}. All rights reserved
        </li>
        <li class="font-black">&middot;</li>
        <li>
          <nuxt-link
            to="/PrivacyPolicy"
            class="text-white hover:text-gray-400 font-light"
          >
            Privacy Policy
          </nuxt-link>
        </li>
      </ul>

      <ul class="flex items-center space-x-8">
        <FooterIcon href="mailto:johanvergeer@gmail.com" img="email" />
        <FooterIcon
          href="https://www.youtube.com/channel/UC9YXmkTSfE7A2lCs-ndrmxw"
          img="youtube"
        />
        <FooterIcon href="https://github.com/johanvergeer" img="github" />
        <FooterIcon href="https://twitter.com/johan_vergeer" img="twitter" />
        <FooterIcon
          href="https://linkedin.com/in/johanvergeer"
          img="linkedin"
        />
      </ul>
    </div>
  </footer>
</template>
