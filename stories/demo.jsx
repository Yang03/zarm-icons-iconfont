
   
import React, { useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { Keyboard, ArrowDown, ArrowLeft, ArrowRight, CloseCircle, CloseCircleFill, Close, DeleteKey, InfoCircleFill, Info, InfoCircle, Minus, Search, StarFill, PlusCircle, Plus, Star, SuccessCircle, Success, Volume, Waiting, WaitingCircleFill, WaitingCircle, Warning, Empty } from '../lib/index'


require('../lib/style/index.css')

const stories = storiesOf('zarm icon font', module);

function Demo() {
  return (
    <div>
      <Keyboard theme="primary" />
      <ArrowDown theme="primary"/>
      <ArrowLeft theme="primary" />
      <ArrowRight theme="primary" />
      <CloseCircle theme="primary" />
      <CloseCircleFill theme="primary" />
      <DeleteKey theme="primary" />
      <Close theme="primary" />
      <InfoCircleFill theme="primary" />
      <Info theme="primary" />
      <InfoCircle theme="primary" />
      <Minus theme="primary" />
      <Search theme="primary" />
      <StarFill theme="primary" />
      <Star theme="primary" />

      <PlusCircle theme="primary" />
      <Plus theme="primary"/>
      <SuccessCircle theme="primary" />
      <Success theme="primary" />
      <Waiting theme="primary" />
      <WaitingCircle theme="primary" />
      <WaitingCircleFill theme="primary" />
      <Empty theme="primary" />
      <Volume theme="primary" />
      <Warning theme="primary" />
    </div>
  )
}
stories.add('demo', () => {
    return (
      <div className='story_wrapper'>
      <h2>zarm icon font</h2>
      <div>
        <Demo/>
      </div>
      </div >
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        import React from 'react'
        import {
          Keyboard, 
          ArrowDown,
          ArrowLeft,
          ArrowRight,
          CloseCircle,
          CloseCircleFill,
          Close,
          DeleteKey,
          InfoCircleFill,
          Info,
          InfoCircle,
          Minus,
          Search,
          StarFill,
          PlusCircle,
          Plus,
          Star,
          SuccessCircle,
          Success,
          Volume,
          Waiting,
          WaitingCircleFill,
          WaitingCircle,
          Warning,
          Empty
        } from 'zarm-icons-iconfont'
        function Demo() {
          return (
            <Keyboard theme="primary" />
            <ArrowDown theme="primary"/>
            <ArrowLeft theme="primary" />
            <ArrowRight theme="primary" />
            <CloseCircle theme="primary" />
            <CloseCircleFill theme="primary" />
            <DeleteKey theme="primary" />
            <Close theme="primary" />
            <InfoCircleFill theme="primary" />
            <Info theme="primary" />
            <InfoCircle theme="primary" />
            <Minus theme="primary" />
            <Search theme="primary" />
            <StarFill theme="primary" />
            <Star theme="primary" />
      
            <PlusCircle theme="primary" />
            <Plus theme="primary"/>
            <SuccessCircle theme="primary" />
            <Success theme="primary" />
            <Waiting theme="primary" />
            <WaitingCircle theme="primary" />
            <WaitingCircleFill theme="primary" />
            <Empty theme="primary" />
            <Volume theme="primary" />
            <Warning theme="primary" />
          )
        }
        ~~~
        `,
        TableComponent: () => (<div></div>),
    }
})