import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {  useParams } from "react-router-dom";

const Certificate = () => {
  const { user, loading } = useContext(AuthContext);
  const certificateRef = useRef(null);
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [imageUrl, setImageUrl] = useState(""); // State to store the image URL

  useEffect(() => {
    fetch("https://focus-studio-server.vercel.app/history")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
      });

    // Fetch the image and store its URL
    fetch("https://i.ibb.co/TqNnpjX/Logo-SILVER.png")
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      });
  }, []);

  const courseDetails = courses.find((course) => course._id === id);

  const downloadCertificate = () => {
    const certificate = certificateRef.current;

    html2canvas(certificate).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 220, 150); // Adjust width and height as needed
      pdf.save("certificate.pdf");
    });
  };

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div className="py-40 text-center space-y-10">
      <h1 className="text-3xl font-bold ">
        Congratulations{" "}
        <span className="text-blue-500">{user?.displayName}</span>. You have successfully completed your course. Now you can download your Certificate.
      </h1>

      <div
        className="border-2 p-7 md:w-1/2 space-y-5 mx-auto bg-yellow-100 border-black"
        ref={certificateRef}
      >
        <div className="header">
          <div className="flex items-center justify-center gap-2">
            <img src={imageUrl} className="w-28 ms-3" alt="Focus Studio Logo" />
          </div>
          <p className="text-4xl mb-7">Focus Studio</p>
          <h1 className="text-3xl">Certificate of Completion</h1>
        </div>
        <div>
          <p>This is to certify that</p>
          <h2 className="text-2xl font-bold">Name: {user.displayName}</h2>
          <p>has successfully completed the course</p>
          <h3 className="text-2xl mb-28">Course name: {courseDetails?.classNames}</h3>
        </div>
        <div className="flex justify-around">
          <div>
            <p className="italic">{courseDetails?.instructor}</p>
            <p>Signature</p>
          </div>
          <div>
            <p>31-12-2025</p>
            <p>Expiration Date</p>
          </div>
        </div>
      </div>
      <button onClick={downloadCertificate} className="btn btn-primary">
        Download PDF
      </button>
    </div>
  );
};

export default Certificate;
