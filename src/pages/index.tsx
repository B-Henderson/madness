import * as React from "react"
import styled from 'styled-components'

import Data from 'data/data'


const Main = styled.main`
  background: #0A1931;
  height: 100vh;
`
// markup
const IndexPage = () => {
  console.log(JSON.stringify(Data))
  return (
    <Main>
      Hello world 1234
    </Main>
  )
}

export default IndexPage
