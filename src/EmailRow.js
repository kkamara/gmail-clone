import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'

import './EmailRow.css'

function EmailRow({ id, title, subject, description, time, }) {
  return <div className='emailRow'>
    <div className='emailRow__options'>
      <Checkbox />
      <IconButton>
        <StarBorderOutlinedIcon />
      </IconButton>
      <IconButton>
        <LabelImportantOutlinedIcon />
      </IconButton>
    </div>
    <div className='emailRow__title'>
    </div>
    <div className='emailRow__message'>
    </div>
    <div className='emailRow__description'>
    </div>
  </div>
}

export default EmailRow
