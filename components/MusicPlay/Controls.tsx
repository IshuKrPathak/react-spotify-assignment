import Slider from "@mui/material/Slider";
import { useAppSelector } from "hooks";

export default function Controls() {
  const state = useAppSelector((state) => state.player);

  return (
    <div className="w-1/3 lg:w-1/2 h-full text-gray-500 flex justify-center items-center px-4">
      <div className="w-full">
        <div className="w-full flex justify-center items-center">
          <div className="flex w-full lg:w-1/3 justify-around items-center">
            <div className="hover:text-white">
              <svg width="1em" height="1em" viewBox="0 0 16 16">
                <g fill="none">
                  <path
                    d="M13.75 13.035a1 1 0 0 1-1.577.817L5.04 8.817a1 1 0 0 1 0-1.634l7.133-5.035a1 1 0 0 1 1.577.817v10.07z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M1.75 13.25a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0v10.5z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="text-3xl text-white">
              {state.paused ? (
                <svg width="1em" height="1em" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8zM6 12V4l6 4l-6 4z"
                  ></path>
                </svg>
              ) : (
                <svg width="1em" height="1em" viewBox="0 0 24 24">
                  <g fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm9-3a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              )}
            </div>
            <div className="hover:text-white">
              <svg width="1em" height="1em" viewBox="0 0 16 16">
                <g fill="none">
                  <path
                    d="M2 2.965a1 1 0 0 1 1.577-.817l7.133 5.035a1 1 0 0 1 0 1.634l-7.133 5.035A1 1 0 0 1 2 13.035V2.965z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M14 2.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V2.75z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-10/12 mx-3 mt-1">
            <Slider min={50} max={100} style= {{ color: "gray" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
