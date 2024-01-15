<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home Page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About Page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products" class="btn">Products Page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products/abc" class="btn">Products ABC</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <!-- output the  page content -->
  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
