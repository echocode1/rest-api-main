"use client";
import { UseDropdownReturn } from "@/common/types/hook_types";
import { useState, useEffect, useRef } from "react";

export const useDropdown = (): UseDropdownReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside both the dropdown content and the icon
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isOpen,
    toggleDropdown,
    dropdownRef,
    iconRef,
  };
};
