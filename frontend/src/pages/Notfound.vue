<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const backTo = () => router.go(-1);
const toHome = () => router.push({ name: "main" });
</script>
<template>
  <div class="row">
    <div class="col-12 text-center">
      <h1 style="font-size: 11em">404</h1>
      <p class="h2">{{ $translate("PAGE_Notfound_001") }}</p>
      <br />
      <p>
        <button class="btn btn-primary" @click="backTo">
          <i class="fas fa-arrow-left"></i>
          {{ $translate("PAGE_Notfound_002") }}
        </button>
        <a class="btn btn-cathay" @click="toHome">
          <i class="fa fa-home"></i>
          {{ $translate("PAGE_Error_0002") }}
        </a>
      </p>
    </div>
  </div>
</template>
