import React from 'react'
import { useTranslation} from "react-i18next";
// import IEighteen from './IEighteen';

export default function IEigntneen2() {
    const {t} = useTranslation()
  return (
    <div className='container'>
      <div className='lang2'>
      {t('welcome_message')}
      </div>
    </div>
  )
}
