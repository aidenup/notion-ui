import type { CSSInterpolation } from '@antd-tiny-vue/cssinjs'
import { useStyleRegister } from '@antd-tiny-vue/cssinjs'
import { computed, defineComponent, h } from 'vue'
import type { ThemeToken } from '../theme/index'
import { useToken } from '../theme'

export const generateButtonStyle = (
  prefixCls: string,
  token: ThemeToken
): CSSInterpolation => ({
  [`.${prefixCls}`]: {
    backgroundColor: token.primaryColor,
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: 'red'
    }
  }
})

const Button = defineComponent({
  name: 'Nbutton',
  setup() {
    const preFixCls = 'ant-btn'
    const [theme, token, hashId] = useToken()
    const info = computed(() => ({
      theme: theme.value,
      token: token.value,
      path: [preFixCls],
      hashId: hashId.value
    }))
    const wrapSSR = useStyleRegister(info, () => [
      generateButtonStyle(preFixCls, token.value as any)
    ])

    const button = h('button', {
      class: [preFixCls, hashId.value],
      innerHTML: '按钮'
    })

    return () => wrapSSR(button)
  }
})

export default Button
