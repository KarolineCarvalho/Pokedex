import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  selector: string;
  children: React.ReactNode[] | React.ReactNode;
};

const ClientOnlyPortal = ({ children, selector }: Props) => {
  const ref = useRef<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector) as HTMLDivElement;
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current as HTMLDivElement) : null;
};

export default ClientOnlyPortal;
