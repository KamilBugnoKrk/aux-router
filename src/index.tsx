import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  useHistory,
  BrowserRouter,
  Route,
  useRouteMatch,
  NavLink,
  HashRouter
} from 'react-router-dom'

interface AuxLinkProps {
  componentName: string
  componentValue?: string
  activeClassName?: string
  description: string
}

export const AuxLink = (props: AuxLinkProps) => {
  const history = useHistory()
  const [getClassName, setClassName] = useState<string>(determineClassname())

  useEffect(() => {
    return history.listen((location) => {
      setClassName(determineClassname())
      console.log(`You changed the page to: ${location.pathname}`)
    })
  }, [history])

  function onClick(): void {
    let oldPath = history.location.pathname
    let componentName = props.componentName

    let regex = new RegExp(`(${componentName}\\/[A-Za-z0-9_\\/\\-%$]*)`)

    let foundComponent = oldPath.match(regex)
    let link: string

    if (foundComponent) {
      link = oldPath.replace(
        regex,
        `${componentName}/${props.componentValue ? props.componentValue : ''}`
      )
    } else {
      link =
        oldPath +
        `(${componentName}/${props.componentValue ? props.componentValue : ''})`
    }
    history.push(link)
  }

  function determineClassname(): string {
    if (
      history.location.pathname.indexOf(
        `(${props.componentName}/${
          props.componentValue ? props.componentValue : ''
        })`
      ) >= 0
    ) {
      return props.activeClassName ? props.activeClassName : ''
    }
    return ''
  }

  return (
    <a className={getClassName} onClick={onClick}>
      {props.description}
    </a>
  )
}

interface AuxMainLinkProps {
  path: string
  description: string
  activeStyle?: React.CSSProperties
  activeClassName?: string
}

export const AuxMainLink = (props: AuxMainLinkProps) => {
  const history = useHistory()
  const match = useRouteMatch()

  function getPath(): string {
    let oldPath = history.location.pathname
    let newPath: string
    if (oldPath.indexOf('(') >= 0) {
      newPath = props.path + oldPath.slice(oldPath.indexOf('('))
    } else {
      newPath = props.path
    }
    console.info(match)
    if (newPath.indexOf('/') == 0) {
      newPath = newPath.replace('/', '')
    }
    return '/' + newPath
  }

  return (
    <NavLink
      to={getPath()}
      activeStyle={props.activeStyle}
      activeClassName={props.activeClassName}
    >
      {props.description}
    </NavLink>
  )
}

export const AuxRouter = (props: any) => {
  return <BrowserRouter> {props.children}</BrowserRouter>
}

export const AuxHashRouter = (props: any) => {
  return <HashRouter> {props.children}</HashRouter>
}

interface AuxMainRouteProps {
  path: string
  component?: any
  children?: React.ReactNode
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
  componentName: string
  componentValue?: string
  componentExactValue?: string
  children?: React.ReactNode
}

export const AuxRoute = (props: AuxRouteProps) => {
  const getPath = (): string => {
    if (props.componentExactValue && props.componentValue) {
      throw 'AuxRoute should have either componentValue or componentExactValue - not both at the same time!'
    }
    if (!props.componentValue && !props.componentExactValue) {
      return `*\\(${props.componentName}*`
    } else if (props.componentValue) {
      return `*\\(${props.componentName}/${props.componentValue}*`
    } else {
      return `*\\(${props.componentName}/${props.componentExactValue}\\)*`
    }
  }

  return (
    <Route path={getPath()} component={props.component}>
      {props.children}
    </Route>
  )
}
