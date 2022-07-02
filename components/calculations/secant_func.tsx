import MathJax from "react-mathjax";

export default function SecantFunc() {
  const tex =
    "xr_{+1}=xr-\\frac{(xr^{3}-xr^{2}-xr+1)(xr-xr_{-1})}{(xr^{3}-xr^{2}-xr+1)-(xr^{3}_{-1}-xr^{2}_{-1}-xr_{-1}+1)}";
  return (
    <MathJax.Provider>
      <MathJax.Node formula={tex} inline></MathJax.Node>
    </MathJax.Provider>
  );
}
