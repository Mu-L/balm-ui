const Event = () => import('@/views/plugins/event');
const Debounce = () => import('@/views/directives/debounce');
const Ripple = () => import('@/views/directives/ripple');
const Elevation = () => import('@/views/directives/elevation');
const Anchor = () => import('@/views/directives/anchor');
const Copy = () => import('@/views/directives/copy');
const Longpress = () => import('@/views/directives/longpress');

export default [
  {
    path: '',
    redirect: () => {
      return { name: 'misc.event' };
    }
  },
  {
    path: 'event',
    name: 'misc.event',
    component: Event
  },
  {
    path: 'debounce',
    name: 'misc.debounce',
    component: Debounce
  },
  {
    path: 'ripple',
    name: 'misc.ripple',
    component: Ripple
  },
  {
    path: 'elevation',
    name: 'misc.elevation',
    component: Elevation
  },
  {
    path: 'anchor',
    name: 'misc.anchor',
    component: Anchor
  },
  {
    path: 'copy',
    name: 'misc.copy',
    component: Copy
  },
  {
    path: 'longpress',
    name: 'misc.longpress',
    component: Longpress
  }
];
