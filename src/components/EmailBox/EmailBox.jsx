import React from 'react'
import './EmailBox.css'
import {LuMail} from 'react-icons/Lu'

import { motion } from 'framer-motion' 

function EmailBox() {
  return (
    <div className="emailBox">
        {/* icon */}
        <div>
            <LuMail  size={30} color='grey'/>
        </div>
      <input type="email" placeholder="Enter Email" />

      <div className="getFunded">
        Get Funded
      </div>
    </div>
  )
}

export default EmailBox