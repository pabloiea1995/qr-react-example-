import React, { useState } from "react";
import QrReader from "react-qr-reader";

interface QrCodeReaderProps {}
/**
 * Component to scan a QR code from energy bills and send information to server with a sesion id
 * @param param0
 */

const QrCodeReader: React.FC<QrCodeReaderProps> = () => {
  const [state, setstate] = useState<any>();
  const [error, seterror] = useState<string>("");
  const handleError = (error: any) => {
    seterror(error);
  };
  const handleScan = (data: any) => {
    setstate(data);
  };
  return (
    <div className="container">
      <div className="row">
        <i>Escanea el código QR de la factura</i>
        {state}
        {JSON.stringify(error)}
        <div className="col-12">
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
export default QrCodeReader;
