import { path } from './path'
import routesSite from './routes/site'
import routesAbout from './routes/about'

var routes = []

export default routes.concat([{
  path: path.index,
  redirect: path.site.index
}], routesSite, routesAbout, [{
  path: '*',
  component: resolve => require(['../pages/common/not-found'], resolve)
}])
