import { defineStore } from 'pinia'
import { getSearchEngineList } from '@/store/data/search-engine';

export interface defaultEngineInterface {
  logo: string,
  title: string,
  link: string,
}

export const useSearchStore = defineStore('search', {
  //用来存放变量
  state: () => ({
    list: [] as any[],
    defaultEngine: {} as defaultEngineInterface
  }),
  //方法
  actions: {
    //
    searchEngineList() {
      this.list = getSearchEngineList()
      //设置默认引擎
      this.defaultEngine.logo = this.list[0].list[0].logo
      this.defaultEngine.title = this.list[0].list[0].title
      this.defaultEngine.link = this.list[0].list[0].link
      return this.list
    },
  }
})