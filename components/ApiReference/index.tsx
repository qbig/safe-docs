import React from 'react'
import { renderToString } from 'react-dom/server'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TOC from './TOC'

import { getHeadingsFromHtml, MDXComponents } from '../../lib/mdx'
import Mdx from './generated-reference.mdx'
import { NetworkProvider } from './Network'

const ApiReference: React.FC = () => {
  const renderedMdx = <Mdx components={MDXComponents} />
  const contentString = renderToString(renderedMdx)
  const headings = getHeadingsFromHtml(contentString)
  return (
    <Grid container justifyContent='space-between'>
      <Grid item xs={12} md={2.7}>
        <TOC headings={headings} />
      </Grid>
      <Grid item xs={12} md={9.2} mr={1}>
        <NetworkProvider>{renderedMdx}</NetworkProvider>
      </Grid>
    </Grid>
  )
}

export default ApiReference
