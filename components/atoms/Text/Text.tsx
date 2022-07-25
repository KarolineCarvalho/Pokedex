type Props = {
  text: string;
};

const Text = ({ text }: Props): JSX.Element => {
  return <p>{text}</p>;
};

export default Text;
