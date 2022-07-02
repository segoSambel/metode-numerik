import MathJax from "react-mathjax";

export default function NRFunction() {
  const tex = "xr+1=xr-\\frac{xr^{3}-xr^{2}-xr+1}{3xr^{2}-2xr-1}";
  return (
    <MathJax.Provider>
      <MathJax.Node formula={tex} inline></MathJax.Node>
    </MathJax.Provider>
  );
}
