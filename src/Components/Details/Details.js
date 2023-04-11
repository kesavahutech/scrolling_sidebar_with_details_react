import React, { useContext } from 'react'
import DetailContext from '../../context/details-context'

export default function Details() {
  const detailctx = useContext(DetailContext);
  return (
    <div>Details</div>
  )
}
