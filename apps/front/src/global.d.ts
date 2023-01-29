declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGElement> & { title?: string }>;
  const src: string;
  export default src;
}
