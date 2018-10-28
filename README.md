# React Scrolling Progress

This is a component I created to test the new `React 16.7.0-alpha.0` Hooks. It utilises state using `useState` and and effect, `useEffect` to calculate how far the user has scrolled down the content and updates a progress bar at the top of the screen with the calculated value. It uses the return value of `useEffect` to remove the eventListener on unmount.

## Demo

After cloning the repo run `yarn install` to install all dependencies needed for the demo and then run `yarn dev` which will start a web server at `http://localhost:1234/`.

## Usage

Simply import the component and include in your page, it will display at the top of the screen using `position: fixed`

```
import React, { Fragment } from 'react'
import ReactScrollingProgress from 'ReactScrollingProgress'

const Page = () => (
  <Fragment>
    <ReactScrollingProgress />
    <Header />
    <Content>
      <p>Content here</p>
    </Content>
    <Footer />
  </Fragment>
)
```