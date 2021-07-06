import React from 'react'

const Error = ({mensaje}) => {
    return (
        <p className="grey darken-4 error">{mensaje}<br></br>
        Error
        <img src="https://files.slack.com/files-pri/T021ZG93NHL-F0276DJD96X/oops2.jpg" alt="imagen" width="200" />
        </p>
      );
}
 
export default Error;