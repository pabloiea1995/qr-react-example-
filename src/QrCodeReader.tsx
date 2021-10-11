import React from "react";
import QrReader from "react-qr-reader";

interface QrCodeReaderProps {}
/**
 * Component to scan a QR code from energy bills and send information to server with a sesion id
 * @param param0
 */
const QrCodeReader: React.FC<QrCodeReaderProps> = () => {
  const handleError = (error: any) => {
    console.error(error);
  };
  const handleScan = (data: any) => {
    console.log(data);
  };
  return (
    <div className="container">
      <div className="row">
        <i>Escanea el código QR de la factura</i>
        <div className="col-12">
          <QrReader
            legacyMode
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
