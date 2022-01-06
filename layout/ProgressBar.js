import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));

    return () => {
      router.events.off("routeChangeStart", () => setLoading(true));
      router.events.off("routeChangeComplete", () => setLoading(false));
      router.events.off("routeChangeError", () => setLoading(false));
    };
  });
  return loading ? (
    <div className="progress">
      <div className="indeterminate" />
      <style jsx>{`
        .progress {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2000;
          width: 100%;
          height: 4px;
          border-radius: 2px;
          background-clip: padding-box;
          overflow: hidden;
          background-color: pink;
        }
        .indeterminate {
          background-color: lightgreen;
        }
        .progress .indeterminate:before {
          content: "";
          position: absolute;
          background-color: inherit;
          top: 0;
          left: 0;
          bottom: 0;
          will-change: left, right;
          -webkit-animation: indeterminate 2.1s
            cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
          animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)
            infinite;
        }
        .progress .indeterminate:after {
          content: "";
          position: absolute;
          background-color: inherit;
          top: 0;
          left: 0;
          bottom: 0;
          will-change: left, right;
          -webkit-animation: indeterminate-short 2.1s
            cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
          animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)
            infinite;
          -webkit-animation-delay: 1.15s;
          animation-delay: 1.15s;
        }
        @-webkit-keyframes indeterminate {
          0% {
            left: -35%;
            right: 100%;
          }
          60% {
            left: 100%;
            right: -90%;
          }
          100% {
            left: 100%;
            right: -90%;
          }
        }
        @keyframes indeterminate {
          0% {
            left: -35%;
            right: 100%;
          }
          60% {
            left: 100%;
            right: -90%;
          }
          100% {
            left: 100%;
            right: -90%;
          }
        }
        @-webkit-keyframes indeterminate-short {
          0% {
            left: -200%;
            right: 100%;
          }
          60% {
            left: 107%;
            right: -8%;
          }
          100% {
            left: 107%;
            right: -8%;
          }
        }
        @keyframes indeterminate-short {
          0% {
            left: -200%;
            right: 100%;
          }
          60% {
            left: 107%;
            right: -8%;
          }
          100% {
            left: 107%;
            right: -8%;
          }
        }
      `}</style>
    </div>
  ) : (
    ""
  );
}
