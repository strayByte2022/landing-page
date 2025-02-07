import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import { SeedButton } from './SeedButton'
import './index.scss'
import { getMeUser } from '@/utilities/getMeUser'
import { toast } from '@payloadcms/ui'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = async () => {
  const {user} = await getMeUser();
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h3>Welcom back, {user.name}</h3>
      </Banner>
    </div>
  )
}

export default BeforeDashboard
