import { create } from "zustand";

interface NavigationState {
  isMobileMenuOpen: boolean;
  isServicesMenuOpen: boolean;
  isElearningMenuOpen: boolean;

  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  setServicesMenuOpen: (isOpen: boolean) => void;
  setElearningMenuOpen: (isOpen: boolean) => void;
}

export const useNavigationStore =
  create<NavigationState>((set) => ({
    isMobileMenuOpen: false,
    isServicesMenuOpen: false,
    isElearningMenuOpen: false,

    toggleMobileMenu: () =>
      set((state) => ({
        isMobileMenuOpen: !state.isMobileMenuOpen,
      })),

    closeMobileMenu: () =>
      set({
        isMobileMenuOpen: false,
      }),

    setServicesMenuOpen: (isOpen) =>
      set({
        isServicesMenuOpen: isOpen,
      }),

    setElearningMenuOpen: (isOpen) =>
      set({
        isElearningMenuOpen: isOpen,
      }),
  }));