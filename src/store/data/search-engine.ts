export function getSearchEngineList() {
  return [
    {
      title: '搜索',
      list: [
        {
          logo: 'https://www.baidu.com/favicon.ico',
          title: '百度',
          link: 'https://www.baidu.com/s?wd={%s}',
        },
        {
          logo: 'https://www.google.com/favicon.ico',
          title: 'Google',
          link: 'https://www.google.com/search?q={%s}',
        },
      ]
    },
    {
      title: '图片',
      list: [
        {
          logo: 'https://www.baidu.com/favicon.ico',
          title: '百度',
          link: 'https://www.baidu.com/s?wd=%s',
        }
      ]
    },
    {
      title: '社区',
      list: [
        {
          logo: 'https://www.baidu.com/favicon.ico',
          title: '百度',
          link: 'https://www.baidu.com/s?wd=%s',
        },
      ]
    },
    {
      title: '学术',
      list: [
        {
          logo: 'https://www.baidu.com/favicon.ico',
          title: '百度',
          link: 'https://www.baidu.com/s?wd=%s',
        },
        {
          logo: 'https://www.baidu.com/favicon.ico',
          title: 'Google',
          link: 'https://www.baidu.com/s?wd=%s',
        },
      ]
    },
    {
      title: '视频',
      list: [
        {
          logo: 'https://www.baidu.com/favicon.ico',
          title: '百度',
          link: 'https://www.baidu.com/s?wd=%s',
        },
      ]
    },
    {
      title: '小说',
      list: [
        {
          logo: 'https://www.baidu.com/favicon.ico',
          title: '百度',
          link: 'https://www.baidu.com/s?wd=%s',
        },
      ]
    },
    {
      title: '购物',
      list: [
        {
          logo: 'https://www.baidu.com/favicon.ico',
          title: '百度',
          link: 'https://www.baidu.com/s?wd=%s',
        },
      ]
    },
    {
      title: '网盘',
      list: [
        {
          logo: 'https://www.baidu.com/favicon.ico',
          title: '百度',
          link: 'https://www.baidu.com/s?wd=%s',
        },
      ]
    },
  ]
}

const SearchEngine = {
  getSearchEngineList
}

export default SearchEngine