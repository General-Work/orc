import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export default function Heroselectservice() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 items-center">
      <select className="border border-blue-200 rounded-md p-2 text-sm">
        <option value="">Ciminal Case </option>
        <option value="">Civil Case</option>
        {/* <option value="">Commence Business  </option> */}
        {/* <option value="">Change in particulars</option>  */}
        {/* <option value="">Entity Registration</option>  */}
        {/* <option value="">Entity Registration With Tin</option>  */}
      </select>
      <button
        onClick={() => navigate("/auth")}
        className="inline-flex p-2 rounded-md py-2.5 px-5 bg-blue-600 text-sm text-white"
      >
        <ArrowForwardIcon sx={{ fontSize: 13 }} />
      </button>
    </div>
  );
}
