import cvFile from "../assets/cv.pdf";

export const downloadCV = () => {
  const link = document.createElement("a");
  link.href = cvFile;
  link.download = "Khun-Kyaw-Hla-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
