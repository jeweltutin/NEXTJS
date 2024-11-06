import GlobalApi from '@/actions/GlobalApi';
import SearchProduct from '@/components/SearchProduct';
import React from 'react';

async function Shop() {
  const productList = await GlobalApi.getAllProducts();
  return (
    <div>
      <SearchProduct productList={productList} />
      <r />
      <div class="max-w-max mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5">
        <div class="overflow-x-auto flex">
          <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
            <div class="flex flex-col items-center justify-center gap-3">
              <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
              <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Andrew</strong>
            </div>
          </div>
          <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
            <div class="flex flex-col items-center justify-center gap-3">
              <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
              <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Emily</strong>
            </div>
          </div>
          <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
            <div class="flex flex-col items-center justify-center gap-3">
              <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
              <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Whitney</strong>
            </div>
          </div>
          <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
            <div class="flex flex-col items-center justify-center gap-3">
              <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
              <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">David</strong>
            </div>
          </div>
          <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
            <div class="flex flex-col items-center justify-center gap-3">
              <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
              <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Kristin</strong>
            </div>
          </div>
          <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
            <div class="flex flex-col items-center justify-center gap-3">
              <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
              <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Sarah</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop;
