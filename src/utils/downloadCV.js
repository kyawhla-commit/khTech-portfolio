import cvFile from "../assets/cv.pdf";

export const downloadCV = () => {
  const link = document.createElement("a");
  link.href = cvFile;
  link.download = "KyawHla-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
