import Header from '@/components/header/SiteHeader'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'

describe('Header.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
  })

  it('should exist', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should contain the site header', () => {
    expect(wrapper.find('#site-header').text()).toBe('Coding with Johan')
  })
})
