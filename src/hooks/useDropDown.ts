import { useEffect, useState, useRef } from "react";

const useDropDown = () => {
  const [dropIsOpen, setDropIsOpen] = useState<boolean>(false);
  const dropRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const removeHandler = () => {
    setDropIsOpen(!dropIsOpen);
  };

  useEffect(() => {
    function handleDrop(event: React.BaseSyntheticEvent | MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setDropIsOpen(dropIsOpen);
      }
    }

    document.addEventListener("click", handleDrop, true);

    return () => {
      document.removeEventListener("click", handleDrop, true);
    };
  }, [dropRef]);

  return {
    isDropped: dropIsOpen,
    dropRef: dropRef,
    handleRemove: removeHandler,
  };
};

export default useDropDown;
