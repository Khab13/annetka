export interface SlideShowProps<T> {
  items: T[];
  renderSlide: (item: T, index: number) => React.ReactNode;
}
