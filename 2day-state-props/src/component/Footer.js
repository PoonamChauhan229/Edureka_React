import React from 'react'

export default function Footer(props) {
  return (
    <React.Fragment>
        <hr/>
        <center>
            <h3>&copy; Footer {props.year} {props.month}</h3>
        </center>
    </React.Fragment>
  )
}
