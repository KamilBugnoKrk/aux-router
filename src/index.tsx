import * as React from 'react'
import {
  useHistory,
  BrowserRouter,
  Route,
  useRouteMatch
} from 'react-router-dom'

interface AuxLinkProps {
  componentName?: string
  componentValue?: string
  description: string
}

export const AuxLink = (props: AuxLinkProps) => {
  const history = useHistory()
  const match = useRouteMatch()

  function getComponentName() {
    if (match.url.lastIndexOf('(') < 0) {
      throw 'AuxLink should have componentName if it is not within AuxRoute element!'
    }
    return match.url.substring(match.url.lastIndexOf('(') + 1)
  }

  function onClick(): void {
    let oldPath = history.location.pathname
    let componentName = props.componentName
      ? props.componentName
      : getComponentName()

    let regex: RegExp
    if (componentName.indexOf(')') >= 0) {
      componentName = componentName.replace(')', '')
      regex = new RegExp(`(${componentName})`)
    } else {
      regex = new RegExp(`(${componentName}\\/\\w*)`)
    }
    let foundComponent = oldPath.match(regex)

    if (foundComponent) {
      history.push(
        oldPath.replace(
          regex,
          `${componentName}/${props.componentValue ? props.componentValue : ''}`
        )
      )
    } else {
      history.push(
        oldPath +
          `(${componentName}/${
            props.componentValue ? props.componentValue : ''
          })`
      )
    }
  }

  return <button onClick={onClick}>{props.description}</button>
}

interface AuxMainLinkProps {
  path: string
  description: string
}

export const AuxMainLink = (props: AuxMainLinkProps) => {
  const history = useHistory()

  function onClick(): void {
    let oldPath = history.location.pathname
    let newPath: string
    let pathPrefix = ''
    if (
      oldPath.indexOf('/', 1) >= 0 &&
      oldPath.indexOf('(', 1) >= oldPath.indexOf('/', 1)
    ) {
      pathPrefix =
        '/' + oldPath.slice(1).slice(0, oldPath.slice(1).indexOf('/'))
    }
    if (oldPath.indexOf('(') >= 0) {
      newPath = pathPrefix + props.path + oldPath.slice(oldPath.indexOf('('))
    } else {
      newPath = pathPrefix + props.path
    }
    history.push(newPath)
  }

  return <button onClick={onClick}>{props.description}</button>
}

export const AuxRouter = (props: any) => {
  return <BrowserRouter> {props.children}</BrowserRouter>
}

interface AuxMainRouteProps {
  path: string
  component?: any
  children: React.ReactNode
}

export const AuxMainRoute = (props: AuxMainRouteProps) => {
  const getPath = (): string => {
    return `*${props.path}*`
  }

  return (
    <Route path={getPath()} component={props.component}>
      {props.children}
    </Route>
  )
}

interface AuxRouteProps {
  component?: any
  componentName?: string
  componentValue?: string
  children: React.ReactNode
}

export const AuxRoute = (props: AuxRouteProps) => {
  const match = useRouteMatch()

  const getPath = (): string => {
    if (!props.componentValue) {
      return `*\\(${props.componentName}`
    } else if (match.url && match.url != '/') {
      return `*${match.url.replace(/[(]/g, `\\(`).replace(/[)]/, `\\)`)}/${
        props.componentValue
      }\\)*`
    } else {
      return `*\\(${props.componentName}/${props.componentValue}\\)*`
    }
  }

  return (
    <Route path={getPath()} component={props.component}>
      {props.children}
    </Route>
  )
}