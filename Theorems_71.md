71. **Nielsen–Schreier Theorem**

**Statement:** Every subgroup of a free group is itself free.

**Proof hint:** Choose coset representatives and explicitly construct generators (Schreier generators), or use covering spaces of graphs.

---

---

72. **Noether Normalization Lemma**

**Statement:** Every finitely generated algebra over a field is integral over a polynomial ring in finitely many algebraically independent variables.

**Proof hint:** Change generators cleverly so one satisfies a monic polynomial relation, then induct on the number of generators.

---

---

73. **Nullstellensatz (Hilbert’s Nullstellensatz)**

**Statement:** Over an algebraically closed field (k), maximal ideals of [k[x_1,\dots,x_n]] are exactly ideals of the form [(x_1-a_1,\dots,x_n-a_n).]

**Proof hint:** For a maximal ideal (M), study the field (k[x_1,\dots,x_n]/M); show it must be an algebraic extension of (k), hence equals (k).

---

---

74. **Borel–Cantelli Lemmas**

**Statement:** For events (A_1,A_2,\dots):
1. If [\sum_{n=1}^\infty P(A_n)<\infty,] then with probability (1), only finitely many (A_n) occur.
2. If the (A_n) are independent and [\sum_{n=1}^\infty P(A_n)=\infty,] then with probability (1), infinitely many occur.

**Proof hint:** Use subadditivity for the first part; for the second, use complements and independence.

---

---

75. **Brouwer Fixed Point Theorem**

**Statement:** Every continuous map [f:B^n \to B^n] from the closed unit ball to itself has a fixed point.

**Proof hint:** Assume no fixed point. Then each point can be pushed radially to the boundary, producing a continuous retraction (B^n \to S^{n-1}), which is impossible.

---

---

76. **Jordan Curve Theorem**

**Statement:** Every simple closed curve in the plane divides the plane into exactly two connected regions: an inside and an outside.

**Proof hint:** Define winding number for points off the curve, show it is locally constant, equals (0) outside, nonzero inside, and exclude extra components.

---

---

77. **Tychonoff Theorem**

**Statement:** Any product of compact topological spaces is compact.

**Proof hint:** Use the finite intersection property / ultrafilters / nets coordinatewise, then assemble a point in the full product using Choice.

---

---

78. **Gauss–Bonnet Theorem**

**Statement:** For a compact oriented surface (M), [\int_M K dA = 2\pi \chi(M),] where (K) is Gaussian curvature and (\chi(M)) is the Euler characteristic.

**Proof hint:** Triangulate the surface, relate angle defect in triangles to curvature, then sum globally.

---

---

79. **Seifert–van Kampen Theorem**

**Statement:** If a topological space (X = U \cup V) with (U, V, U \cap V) path-connected, then [\pi_1(X) \cong \pi_1(U) *_{\pi_1(U\cap V)} \pi_1(V).]

**Proof hint:** Break loops into pieces lying in (U) or (V), translate concatenation of loops into group generators and relations.

---

---

80. **Primary Decomposition Theorem**

**Statement:** In a Noetherian ring, every ideal can be written as an intersection of finitely many primary ideals.

**Proof hint:** Use Noetherian induction / maximal counterexample arguments, splitting ideals using zero divisors and associated primes.

---