const MAhome = () => import('@/views/moduleA/pages')

const moduleChildren = [
  {
    path: '/moduleA/home',
    name: 'moduleAhome',
    component: MAhome,
  }
]

export { moduleChildren }
