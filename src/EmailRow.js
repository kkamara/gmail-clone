import React from 'react'
import { useNavigate, } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'

import './EmailRow.css'

function EmailRow({ id, title, subject, description, time, }) {
  const navigate = useNavigate()

  return <div onClick={() => navigate('/mail')} className='emailRow'>
    <div className='emailRow__options'>
      <Checkbox />
      <IconButton>
        <StarBorderOutlinedIcon />
      </IconButton>
      <IconButton>
        <LabelImportantOutlinedIcon />
      </IconButton>
    </div>
    <h3 className='emailRow__title'>
      {title}
    </h3>
    <div className='emailRow__message'>
      <h4>{subject}</h4>
      <span className='emailRow__description'>
        {description}
      </span>
    </div>
    <p className='emailRow__time'>
      {time}
    </p>
  </div>
}

export default EmailRow
