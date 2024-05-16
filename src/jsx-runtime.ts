export const jsx = (component, props) => component(props);

export const jsxs = jsx;

export function Fragment({ children }) {
  return children;
}
