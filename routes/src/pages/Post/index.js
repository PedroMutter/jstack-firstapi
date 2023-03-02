import React, { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default class Post extends React.Component {
  constructor(props) {
    super(props)

    const { search } = this.props.location
    this.queryParams = new URLSearchParams(search)
  }
  
  render() {
    console.log(this.queryParams.get('meuQueryParam'))

    return <h1>Post page</h1>
  }
}

// export default function Post() {
//   const params = useParams()
//   const { search } = useLocation()
//   const queryParams = useMemo(() => new URLSearchParams(search), [search])

//   console.log(params)
//   console.log(queryParams.get('meuQueryParam'))

//   return <h1>Post page</h1>
// }
