import MathJax from "react-mathjax";

export default function FungsiUtama() {
  const tex = "f(x)=x^{3}-x^{2}-x+1";
  return (
    <MathJax.Provider>
      <MathJax.Node formula={tex} inline></MathJax.Node>
    </MathJax.Provider>
  );
}
