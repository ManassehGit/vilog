import React, {useState} from 'react'
import QrReader from 'react-qr-scanner'


const QrScanner = () => {
    const [delay, setDelay] = useState(100);
    const [result, setResult] = useState("No Result")

    const previewStyle = {
        height: 240,
        width: 320
      };

      setDelay(100);

      const handleScan = (data) =>{
        setResult(data);
      };
       
      const handleError = (err) => {
        console.error(err)
      }
  return (
    <div>
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          />
        <p>{result}</p>
    </div>
  )
}

export default QrScanner