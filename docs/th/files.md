---
layout: page
title: Continue to the English guide
search: false
---

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'
onMounted(() => window.location.replace(withBase('/en/files') + window.location.search + window.location.hash))
</script>

[Continue to the English participant guide](/en/files)
