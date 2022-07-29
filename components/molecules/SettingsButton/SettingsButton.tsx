import styles from "./SettingsButton.module.scss";

const SettingsButton = () => {
  return (
    <div className={styles.settingsButton}>
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.9656 3.33905L19.4379 3.33905C19.7502 3.33905 20 3.09473 20 2.78933C20 2.48393 19.7502 2.23961 19.4379 2.23961L14.9656 2.23961C14.7033 0.965066 13.5499 -2.81944e-07 12.1674 -3.42374e-07C10.7849 -4.02804e-07 9.63148 0.965066 9.36914 2.2396L0.566311 2.2396C0.254005 2.2396 0.00416173 2.48393 0.00416171 2.78933C0.0041617 3.09473 0.254005 3.33905 0.566311 3.33905L9.37331 3.33905C9.63564 4.61359 10.7891 5.57865 12.1716 5.57865C13.554 5.57865 14.7033 4.61359 14.9656 3.33905ZM10.4393 2.78933C10.4393 1.85684 11.2138 1.09944 12.1674 1.09944C13.121 1.09944 13.8955 1.85684 13.8955 2.78933C13.8955 3.72182 13.121 4.47921 12.1674 4.47921C11.2138 4.47921 10.4393 3.71774 10.4393 2.78933ZM10.2519 10.0701L19.4379 10.0701C19.7502 10.0701 20 9.82578 20 9.52038C20 9.21497 19.7502 8.97065 19.4379 8.97065L10.2519 8.97065C9.98959 7.69611 8.83614 6.73105 7.45367 6.73105C6.07121 6.73105 4.91776 7.69611 4.65542 8.97065L0.56631 8.97065C0.254007 8.97065 0.00416334 9.21497 0.00416333 9.52037C0.00416331 9.82578 0.254007 10.0701 0.56631 10.0701L4.65542 10.0701C4.91776 11.3446 6.07121 12.3097 7.45367 12.3097C8.83198 12.3097 9.98959 11.3487 10.2519 10.0701ZM5.72559 9.52037C5.72559 8.58788 6.5001 7.83049 7.45367 7.83049C8.40725 7.83049 9.18176 8.58788 9.18176 9.52037C9.18176 10.4529 8.40725 11.2103 7.45367 11.2103C6.5001 11.2103 5.72559 10.4529 5.72559 9.52037ZM19.4379 16.7604L14.9656 16.7604C14.7033 18.039 13.554 19 12.1716 19C10.7891 19 9.63564 18.0349 9.37331 16.7604L0.562148 16.7604C0.249843 16.7604 -7.21941e-07 16.5161 -7.08591e-07 16.2107C-6.95242e-07 15.9053 0.249843 15.661 0.562148 15.661L9.36914 15.661C9.63148 14.3864 10.7849 13.4214 12.1674 13.4214C13.5499 13.4214 14.7033 14.3864 14.9656 15.661L19.4379 15.661C19.7502 15.661 20 15.9053 20 16.2107C20 16.5161 19.7502 16.7604 19.4379 16.7604ZM12.1674 14.5208C11.2138 14.5208 10.4393 15.2782 10.4393 16.2107C10.4393 17.1432 11.2138 17.9006 12.1674 17.9006C13.121 17.9006 13.8955 17.1432 13.8955 16.2107C13.8955 15.2782 13.121 14.5208 12.1674 14.5208Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default SettingsButton;
