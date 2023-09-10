import img from './error.gif';

const Error = () => {
  return (
    <div style={{display: 'flex', width: "150px", height: "150px", objectFit: 'contain', alignItems: "center", justifyContent: "center", transform: 'translate(-50%)'}}>
      <img style={{display: 'inline-block', width: "150px", height: "150px", objectFit: 'contain', margin: "0 auto"}} src={img} alt="Error"/>
    </div>
  )
}

export default Error;