import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LayoutNavbar from '../LayoutNavbar.vue'

describe('LayoutNavbar', () => {
  it('renders properly', () => {
    const wrapper = mount(LayoutNavbar)
    expect(wrapper.text()).toContain('Portfolio')
  })
})
