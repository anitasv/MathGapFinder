81. **Sard’s Theorem**

**Statement:** For a sufficiently smooth map (f:\mathbb R^n \to \mathbb R^m), the set of critical values has measure zero.

**Proof hint:** Near critical points, the map flattens directions; cover domain by small cubes and estimate that images of those cubes have very small total volume.

---

---

82. **de Rham Theorem**

**Statement:** For a smooth manifold (M), de Rham cohomology is naturally isomorphic to singular cohomology with real coefficients: [H^k_{dR}(M)\cong H^k(M;\mathbb R).]

**Proof hint:** Integrate differential forms over simplices to build a cochain map, then prove it is an isomorphism using local exactness + Mayer–Vietoris patching.

---

---

83. **Mercer’s Theorem**

**Statement:** A continuous symmetric positive kernel (K(x,y)) on a compact domain has an eigenfunction expansion [K(x,y)=\sum_{n=1}^\infty \lambda_n \phi_n(x)\phi_n(y).]

**Proof hint:** Convert the kernel into a compact self-adjoint integral operator, apply the spectral theorem, then use continuity to upgrade convergence.

---

---

84. **Löwenheim–Skolem Theorem**

**Statement:** If a first-order theory has an infinite model, then it has models of other cardinalities (in particular, a countable model in the downward form).

**Proof hint:** Add Skolem functions and take the closure of a countable set under those functions (Skolem hull), producing a countable elementary submodel.

---

---

85. **Prime Number Theorem**

**Statement:** If (\pi(x)) is the number of primes (\le x), then [\pi(x)\sim \frac{x}{\log x}.]

**Proof hint:** Study the Riemann zeta function (\zeta(s)), relate its logarithmic derivative to primes, prove suitable zero-free behavior near (\Re(s)=1), then use Tauberian/contour arguments.

---

---

86. **Spectral Theorem (Compact Self-Adjoint Operators)**

**Statement:** A compact self-adjoint operator on a Hilbert space has an orthonormal basis of eigenvectors, with real eigenvalues accumulating only at (0).

**Proof hint:** Maximize the Rayleigh quotient to obtain one eigenvector, restrict to its orthogonal complement, then iterate using compactness.

---

---

87. **Gelfand–Naimark Theorem**

**Statement:** Every commutative (C^*)-algebra with identity is isometrically isomorphic to the algebra of continuous functions on its space of maximal ideals.

**Proof hint:** Map elements to continuous functions via Gelfand transform (evaluation at characters), then use Stone–Weierstrass to show it is a surjective isometry.

---

---

88. **Stone’s Theorem on One-Parameter Unitary Groups**

**Statement:** Every strongly continuous unitary group ((U_t)_{t\in\mathbb R}) on a Hilbert space has the form [U_t=e^{itA}] for a unique self-adjoint operator (A).

**Proof hint:** Use the spectral theorem to exponentiate a self-adjoint operator; conversely recover the generator from the strong derivative / resolvent.

---

---

89. **Gödel’s First Incompleteness Theorem**

**Statement:** Any consistent effectively axiomatized theory strong enough to encode arithmetic contains a true arithmetic statement that it cannot prove.

**Proof hint:** Encode syntax as numbers (Gödel numbering), then diagonalize to construct a sentence that asserts its own unprovability.

---

---

90. **Gödel’s Second Incompleteness Theorem**

**Statement:** Any consistent, effectively axiomatized theory strong enough for arithmetic cannot prove its own consistency.

**Proof hint:** Formalize the First Incompleteness Theorem inside the theory itself; if the theory proved its own consistency, it would prove its Gödel sentence, contradiction.

---