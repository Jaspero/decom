<div class="flex rounded-lg border border-blue-500 overflow-hidden bg-blue-50">
  <div class="flex items-center gap-2 bg-blue-500 pl-4 whitespace-nowrap">
    <span class="bg-blue-100 w-8 h-8 flex items-center justify-center rounded-full"> 🎉 </span>

    <span class="text-white font-bold">New Feature</span>
  </div>
  <div
    class="w-6 h-full border-t-[2rem] border-t-transparent border-b-[2rem] border-b-transparent border-l-[1.5rem] border-l-blue-500"
  />

  <div class="flex items-center">
    <div class="px-4 flex-1 line-clamp-2">
      <slot />
    </div>
  </div>
</div>
