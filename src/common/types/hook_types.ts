export interface UseDropdownReturn {
  isOpen: boolean;
  toggleDropdown: () => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  iconRef: React.RefObject<HTMLDivElement>;
}
