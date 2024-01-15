<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>

  <p>static data:{{ staticData }}</p>
  <p>cat fact data:{{ catFactData }}</p>
</template>

<script setup>
const { data: staticData } = await useFetch("/api/ninja?name=Max", {
  method: "post",
  body: { age: 20 },
});

const { data: catFactData } = await useFetch(
  "/api/facts/591f98803b90f7150a19c229"
);
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
