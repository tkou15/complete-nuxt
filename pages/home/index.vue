<script lang="ts" setup>
import {
  getAnalytics,
  logEvent,
  setAnalyticsCollectionEnabled,
} from 'firebase/analytics';

const counterStore = useCounterStore();
const { increment } = counterStore;
const { counter } = storeToRefs(counterStore);

// Analytics can only be retrieved on the client
const analytics = () => getAnalytics(useFirebaseApp());

const handleClientClick = () => {
  // クリック時の処理 (クライアントサイドのみ)
  logEvent(analytics(), 'click_event', {
    page: 'home',
  });
};
</script>
<template src="./index.html"></template>
