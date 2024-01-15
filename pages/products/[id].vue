<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "product",
});

const route = useRoute();

const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${route.params.id}`,
  { key: route.params.id }
);

if (!product.value) {
  throw createError({
    statusCode: 400,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>
