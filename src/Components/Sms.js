import React from 'react'
import useForm from '../Hooks/useForm'

function Sms({setQRCode, loader}) {
  const {setLoading} = loader
  const {setQr} = setQRCode
  const [getInput, input, formSubmit] = useForm('sms', setQr, setLoading)

  return (
    <div className="sms-component">
<form onSubmit={e => formSubmit(e)}>
<div className="full-column">
    <input required value={input.number} name="number" onChange={(e) => getInput(e)} type="text" className="input-form" placeholder="Mobiele nummer" />
    <textarea required value={input.body} name="body" onChange={(e) => getInput(e)} type="text" className="input-form" placeholder="Bericht" />
</div>

<div className="full-column">
    <input type="submit" className="button-column width-button" value='Sms genereren' />
</div>
</form>
    </div>
  )
}

export default Sms