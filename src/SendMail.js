import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { Button, } from '@material-ui/core'
import { useForm, } from 'react-hook-form'
import { useDispatch, } from 'react-redux'
import { closeSendMessage, } from './features/mailSlice'
import './SendMail.css'

function SendMail() {
  const { register, handleSubmit, watch, formState: { errors, }, } = useForm()
  const dispatch = useDispatch()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} className='sendMail__close' />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='to' placeholder='To' type='email' {...register('to', { required: true, })} />
        {errors.to && <p className='sendMail__error'>To is required!</p>}
        <input name='subject' placeholder='Subject' type='text' {...register('subject', { required: true, })} />
        {errors.subject && <p className='sendMail__error'>Subject is required!</p>}
        <input name='message' placeholder='Message...' className='sendMail__message' type='text' {...register('message', { required: true, })} />
        {errors.message && <p className='sendMail__error'>Message is required!</p>}

        <div className='sendMail__options'>
          <Button 
            className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
