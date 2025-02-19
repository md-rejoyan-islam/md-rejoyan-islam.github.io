import React, { useEffect, useRef, useState } from "react";

interface UseDropDownPopupControl {
  isOpen: boolean;
  toggleMenu: () => void;
  dropDownRef: React.RefObject<HTMLButtonElement>; // Ref type for div
}

const useDropDownPopupControl = (): UseDropDownPopupControl => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropDownRef = useRef<HTMLButtonElement | null>(null);

  // toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //outside click
  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { isOpen, toggleMenu, dropDownRef };
};

export default useDropDownPopupControl;
