import type { DefaultTheme } from 'vitepress'

export const getSidebar = (): DefaultTheme.Sidebar => {
  // return [
  //   {
  //     text: 'button',
  //     link: '/components/button/'
  //   }
  // ]
  return {
    '/components/': [
      {
        text: 'Button 按钮',
        link: '/components/button/'
      }
    ]
  }
}
