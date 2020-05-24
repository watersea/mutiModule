const MBhome = () => import('@/views/moduleB/pages')

const moduleChildren = [
  {
    path: '/moduleB/home',
    name: 'moduleBhome',
    component: MBhome,
  }
]

export { moduleChildren }
