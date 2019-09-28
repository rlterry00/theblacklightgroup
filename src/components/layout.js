import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet>
            <title>The Blacklight Group</title>
            <meta name="viewport" content="width=device-width"></meta>
            <meta name="title" content="The Blacklight Group" />
            <meta
              name="description"
              content="Finding the solutions that are right in front of us through technology"
            />
            <meta
              name="keywords"
              content="IT, Technology, Devolopment, React, React Native, Business"
            />

            <html lang="en" />
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content="https://www.theblacklightgroup.org/"
            />
            <meta property="og:title" content="The Blacklight Group" />
            <meta
              property="og:description"
              content="Finding the solutions right in front of us through technology"
            />
            <meta
              property="og:image"
              content="https://images.unsplash.com/photo-1527259216948-b0c66d6fc31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content="https://www.theblacklightgroup.org/"
            />
            <meta property="twitter:title" content="The Blacklight Group" />
            <meta
              property="twitter:description"
              content="Finding the solutions right in front of us through technology"
            />
            <meta
              property="twitter:image"
              content="https://images.unsplash.com/photo-1527259216948-b0c66d6fc31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
          </Helmet>
          <div>{content}</div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
