/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MathJax from "react-native-mathjax";
const mmlOptions = {
  messageStyle: "none",
  extensions: ["tex2jax.js"],
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
  },
  TeX: {
    extensions: [
      "AMSmath.js",
      "AMSsymbols.js",
      "noErrors.js",
      "noUndefined.js",
    ],
  },
};
export default function MathjaxTest() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Maths Formula</Text>
      <MathJax
        mathJaxOptions={mmlOptions}
        html={
          "<p>This is formula $x^2$</p>$sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$"
        }
      />
      <MathJax mathJaxOptions={mmlOptions} html={"$(ax^2 + bx + c = 0)$"} />
      <MathJax
        mathJaxOptions={mmlOptions}
        html={"$x = (-b +- \\sqrt(b^2-4ac))/(2a)$"}
      />
      <MathJax
        mathJaxOptions={mmlOptions}
        html={"z = $\\frac{1}{\\sqrt{x^2 + 1}}$"}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
  },
});
