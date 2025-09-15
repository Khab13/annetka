export interface IButton {
  variant:
    | "primary"
    | "secondary"
    | "social"
    | "orderOzon"
    | "orderWildberries";
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
