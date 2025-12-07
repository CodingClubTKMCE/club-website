<script>
  export let open = false;
  export let title = "";
  export let onClose = () => {};
</script>

{#if open}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
    on:click={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}
  >
    <!-- Modal Panel -->
    <div
      class="bg-[#0d0f16] border border-white/10 rounded-2xl shadow-2xl w-[90%] max-w-md p-6 animate-[fadeIn_.2s_ease-out]"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-white">{title}</h2>

        <button
          on:click={onClose}
          class="text-gray-400 hover:text-white transition"
        >
          ✕
        </button>
      </div>

      <!-- Body -->
      <div class="text-gray-300 text-sm mb-4">
        <slot />
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-3">
        <slot name="footer">
          <button
            class="px-4 py-1.5 rounded-full bg-gray-700/40 text-gray-200 hover:bg-gray-600/40 transition"
            on:click={onClose}
          >
            Close
          </button>
        </slot>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
