const MChome = () => import('@/views/moduleC/pages')

const moduleChildren = [
  {
    path: '/moduleC/home',
    name: 'moduleChome',
    component: MChome,
  }
]

export { moduleChildren }
