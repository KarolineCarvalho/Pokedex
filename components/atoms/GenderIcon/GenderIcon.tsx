import React from "react";

type Props = {
  gender: "male" | "female" | "unknown";
  color: string;
};

const GenderIcon = ({ gender, color }: Props): JSX.Element => {
  return (
    <>
      {gender === "male" && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill={color}
            d="M431.1 31.1l-112.6 0c-21.42 0-32.15 25.85-17 40.97l29.61 29.56l-56.65 56.55c-30.03-20.66-65.04-31-100-31c-47.99-.002-95.96 19.44-131.1 58.39c-60.86 67.51-58.65 175 4.748 240.1C83.66 462.2 129.6 480 175.5 480c45.12 0 90.34-17.18 124.8-51.55c61.11-60.99 67.77-155.6 20.42-224.1l56.65-56.55l29.61 29.56C411.9 182.2 417.9 184.4 423.8 184.4C436.1 184.4 448 174.8 448 160.4V47.1C448 39.16 440.8 31.1 431.1 31.1zM243.5 371.9c-18.75 18.71-43.38 28.07-68 28.07c-24.63 0-49.25-9.355-68.01-28.07c-37.5-37.43-37.5-98.33 0-135.8c18.75-18.71 43.38-28.07 68.01-28.07c24.63 0 49.25 9.357 68 28.07C281 273.5 281 334.5 243.5 371.9z"
          />
        </svg>
      )}
      {gender === "female" && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path
            fill={color}
            d="M368 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 86.26 62.1 157.9 144 172.1v35.05H112c-8.836 0-16 7.162-16 16v32c0 8.836 7.164 16 16 16H160v48c0 8.836 7.164 16 16 16h32c8.838 0 16-7.164 16-16v-48h48c8.838 0 16-7.164 16-16v-32c0-8.838-7.162-16-16-16H224v-35.05C305.9 333.9 368 262.3 368 176zM192 272c-52.93 0-96-43.07-96-96c0-52.94 43.07-96 96-96c52.94 0 96 43.06 96 96C288 228.9 244.9 272 192 272z"
          />
        </svg>
      )}
      {gender === "unknown" && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            fill={color}
            d="M204.3 32.01H96c-52.94 0-96 43.06-96 96c0 17.67 14.31 31.1 32 31.1s32-14.32 32-31.1c0-17.64 14.34-32 32-32h108.3C232.8 96.01 256 119.2 256 147.8c0 19.72-10.97 37.47-30.5 47.33L127.8 252.4C117.1 258.2 112 268.7 112 280v40c0 17.67 14.31 31.99 32 31.99s32-14.32 32-31.99V298.3L256 251.3c39.47-19.75 64-59.42 64-103.5C320 83.95 268.1 32.01 204.3 32.01zM144 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S166.1 400 144 400z"
          />
        </svg>
      )}
    </>
  );
};

export default GenderIcon;
