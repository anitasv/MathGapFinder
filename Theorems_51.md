51. **Cayley–Hamilton Theorem**

**Statement:** Every square matrix satisfies its own characteristic polynomial: [p_A(A)=0.]

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 6.5

**Proof hint:** Use the adjugate identity [(\lambda I-A)\operatorname{adj}(\lambda I-A)=p_A(\lambda)I] and interpret it as a polynomial identity before substituting (\lambda=A).

---

---

52. **Fubini’s Theorem**

**Statement:** If (f) is integrable on a product space (X\times Y), then [\int_{X\times Y} f(x,y)d(x,y) = \int_X\left(\int_Y f(x,y)dy\right)dx] (and similarly with the order reversed).

**Course:** Graduate, Real Analysis

**Difficulty:** 6.5

**Proof hint:** First prove it for indicator functions of rectangles, then simple functions, then extend by approximation to general integrable functions.

---

---

53. **Law of Large Numbers**

**Statement:** For i.i.d. random variables (X_1,X_2,\dots) with mean (\mu), [\frac{X_1+\cdots+X_n}{n}\to \mu] (in probability or almost surely).

**Course:** Undergraduate, Probability

**Difficulty:** 6.0

**Proof hint:** Control variance of averages (weak form), or combine truncation + Borel–Cantelli for almost sure convergence.

---

---

54. **Uniform Boundedness Principle**

**Statement:** Let ({T_\alpha}) be bounded linear operators from a Banach space (X) to a normed space (Y). If for every (x\in X), [\sup_\alpha |T_\alpha x|<\infty,] then [\sup_\alpha |T_\alpha|<\infty.]

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.5

**Proof hint:** Consider sets where operators are uniformly bounded on a point. Use Baire Category Theorem to upgrade pointwise boundedness to norm boundedness.

---

---

55. **Closed Graph Theorem**

**Statement:** If (T:X\to Y) is a linear operator between Banach spaces and its graph {(x,Tx):x\in X} is closed in (X\times Y), then (T) is bounded.

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.0

**Proof hint:** View the graph itself as a Banach space, then use projection maps together with the Open Mapping Theorem.

---

---

56. **Open Mapping Theorem (Banach Spaces)**

**Statement:** If (T:X\to Y) is a surjective bounded linear operator between Banach spaces, then (T) maps open sets to open sets.

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.0

**Proof hint:** Show the image of the unit ball is dense enough to contain a small ball around (0), then use scaling and translation.

---

---

57. **Hilbert Basis Theorem**

**Statement:** If (R) is a Noetherian ring, then the polynomial ring [R[x]] is also Noetherian.

**Course:** Graduate, Algebra

**Difficulty:** 7.0

**Proof hint:** For an ideal in (R[x]), look at leading coefficients of polynomials of each degree. Use finite generation in (R), then induct on degree.

---

---

58. **Krull Intersection Theorem**

**Statement:** If (R) is Noetherian, (I\subseteq J(R)), and (M) is a finitely generated (R)-module, then [\bigcap_{n\ge1} I^n M = 0.]

**Course:** Graduate, Commutative Algebra

**Difficulty:** 7.5

**Proof hint:** Let [N=\bigcap I^nM.] Show (N=IN), then apply Nakayama’s Lemma.

---

---

59. **Central Limit Theorem**

**Statement:** For i.i.d. random variables with mean (\mu) and variance (\sigma^2), [\frac{(X_1+\cdots+X_n)-n\mu}{\sigma\sqrt n} \Rightarrow N(0,1).]

**Course:** Undergraduate, Probability

**Difficulty:** 6.5

**Proof hint:** Compute characteristic functions of normalized sums, use Taylor expansion near (0), then pass to the limit.

---

---

60. **Perron–Frobenius Theorem**

**Statement:** A positive square matrix has a largest positive real eigenvalue with a positive eigenvector.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 6.5

**Proof hint:** Map the positive simplex to itself using the matrix, then use compactness / fixed-point ideas; stronger versions handle irreducible nonnegative matrices.

---