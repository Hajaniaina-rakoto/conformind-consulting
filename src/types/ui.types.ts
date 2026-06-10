import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
} from "react";

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost";

  size?: "sm" | "md" | "lg";

  isLoading?: boolean;

  fullWidth?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
}

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export interface SectionTitleProps {
  badge?: string;

  title: string;

  description?: string;

  align?: "left" | "center";

  className?: string;
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "dark" | "outline";
}

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}