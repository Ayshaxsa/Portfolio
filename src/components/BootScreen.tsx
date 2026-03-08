import { useEffect, useState } from "react";

export default function BootScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="boot-container">
      <div className="boot-content">
        <div className="apple-logo"></div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <style>{`
        .boot-container{
          position: fixed;
          inset: 0;
          background: black;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .boot-content{
          text-align: center;
        }

        .apple-logo{
          font-size: 80px;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .progress-bar{
          width: 220px;
          height: 4px;
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill{
          height: 100%;
          background: white;
          transition: width 0.2s linear;
        }
      `}</style>
    </div>
  );
}