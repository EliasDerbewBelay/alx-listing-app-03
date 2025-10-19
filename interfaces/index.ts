export interface CardProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  ctaLabel?: string;
  onCta?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  disabled?: boolean;
}


export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
