31. **Fundamental Theorem of Symmetric Polynomials**

**Statement:** Every symmetric polynomial in (x_1,\dots,x_n) can be written as a polynomial in the elementary symmetric polynomials.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 6.0

**Proof hint:** Order monomials and eliminate the leading symmetric monomial using suitable products of elementary symmetric polynomials, then iterate.

---

---

32. **Spectral Theorem (Finite-Dimensional)**

**Statement:** A complex matrix (A) is normal iff there exists a unitary matrix (U) such that [U^*AU=D] with (D) diagonal.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 6.5

**Proof hint:** Use Schur triangularization and then show a normal upper-triangular matrix must already be diagonal.

---

---

33. **Schur Triangularization Theorem**

**Statement:** Every complex square matrix (A) is unitarily similar to an upper triangular matrix: [U^*AU=T] for some unitary (U) and upper triangular (T).

**Course:** Graduate, Linear Algebra

**Difficulty:** 6.5

**Proof hint:** Use existence of one eigenvector, extend it to an orthonormal basis, obtain a block upper-triangular form, then induct on dimension.

---

---

34. **Singular Value Decomposition (SVD)**

**Statement:** For any matrix (A\in \mathbb C^{m\times n}), there exist unitary matrices (U,V) such that [A=U\Sigma V^*] where (\Sigma) is diagonal with nonnegative real entries.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 6.0

**Proof hint:** Diagonalize (A^*A) using the Spectral Theorem, and take square roots of its eigenvalues as singular values.

---

---

35. **Cauchy Integral Formula**

**Statement:** If (f) is holomorphic on and inside a simple closed curve (\gamma), and (a) lies inside, then [f(a)=\frac{1}{2\pi i}\oint_\gamma \frac{f(z)}{z-a}dz.]

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.5

**Proof hint:** Split [\frac{f(z)}{z-a} = \frac{f(z)-f(a)}{z-a}+\frac{f(a)}{z-a},} then apply Cauchy’s theorem to the first term.

---

---

36. **Maximum Modulus Principle**

**Statement:** A nonconstant holomorphic function cannot attain a local maximum of (|f(z)|) at an interior point of its domain.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.0

**Proof hint:** Use the Cauchy Integral Formula or mean-value property: if (|f|) is maximal at the center, then boundary values force (f) to be constant nearby.

---

---

37. **Schwarz Lemma**

**Statement:** If (f:\mathbb D\to\mathbb D) is holomorphic and (f(0)=0), then [|f(z)|\le |z|,\qquad |f'(0)|\le 1,] with equality cases giving rotations.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.0

**Proof hint:** Consider [g(z)=\frac{f(z)}{z}] (with removable singularity at (0)), then apply the Maximum Modulus Principle.

---

---

38. **Open Mapping Theorem (Complex Analysis)**

**Statement:** A nonconstant holomorphic function maps open sets to open sets.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.5

**Proof hint:** Near (z_0), write [f(z)-f(z_0)=(z-z_0)^k g(z)] with (g(z_0)\neq 0), so small circles around (z_0) map around (f(z_0)) and force nearby values to be attained.

---

---

39. **Residue Theorem**

**Statement:** If (f) is meromorphic inside a closed contour (\gamma), then [\oint_\gamma f(z)dz = 2\pi i \sum \operatorname{Res}(f;a_k),] where the sum is over enclosed poles.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 6.0

**Proof hint:** Remove small circles around each pole, apply the Cauchy Integral Theorem to the remaining region, and use Laurent coefficients on the small circles.

---

---

40. **Argument Principle**

**Statement:** If (f) is meromorphic and has no zeros or poles on a closed contour (\gamma), then [\frac{1}{2\pi i}\oint_\gamma \frac{f'(z)}{f(z)}dz = N-P,] where (N) and (P) are the numbers of zeros and poles inside (\gamma), counted with multiplicity.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 6.0

**Proof hint:** Near a zero/pole, write (f(z)=(z-a)^m g(z)), so (f'/f) has a simple pole with residue (m) (or (-m)).

---