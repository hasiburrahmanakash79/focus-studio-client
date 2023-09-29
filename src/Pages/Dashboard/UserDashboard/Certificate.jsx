import { useContext, useRef } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import "./Certificate.css";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Certificate = () => {
  const { user } = useContext(AuthContext);
  const certificateRef = useRef(null);

  const downloadCertificate = () => {
    const certificate = certificateRef.current;

    html2canvas(certificate).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, 220, 150); // Adjust width and height as needed
      pdf.save('certificate.pdf');
    });
  };

  return (
    <div className="py-40 text-center space-y-10">
      <h1 className="text-3xl font-bold ">
        Congratulation <span className="text-blue-500">{user?.displayName}</span>
        . You Successfully complete your course. Now you can download your
        Certificate.
      </h1>

      <div  className="certificate" ref={certificateRef}>
        <div className="header">
          <h1>Certificate of Completion</h1>
        </div>
        <div className="content">
          <p>This is to certify that</p>
          <h2>name</h2>
          <p>has successfully completed the course</p>
          <h3>courseName</h3>
          <p>on</p>
          <p>completionDate</p>
        </div>
        <div className="flex justify-around">
          <p>Signature</p>
          <p>Date</p>
        </div>
      </div>
        <button onClick={downloadCertificate} className="btn btn-primary">Download PDF</button>
    </div>
  );
};

export default Certificate;
