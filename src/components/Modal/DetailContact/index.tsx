import Icon from '@/components/Icons'
import { useClient } from '@/hooks/useClient'
import React from 'react'

const DetailContact = () => {

  const {contactCurrent, setOpenModal, setTypeModal} = useClient()

  return (
    <div>
      <div>
      <h2>{contactCurrent.name}</h2>
      <div className="flex gap-2">
        <Icon type="update" handle={() => (setOpenModal(true), setTypeModal("updateContact"))} />
        <Icon type="delete" handle={() => (setOpenModal(true), setTypeModal("deleteContact"))} />
      </div>
    </div>
    </div>
  )
}

export default DetailContact