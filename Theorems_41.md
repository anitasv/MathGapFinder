41. **Rouché’s Theorem**

**Statement:** If (f) and (g) are holomorphic inside/on a closed contour (\gamma), and [|g(z)|<|f(z)| \quad \text{on } \gamma,] then (f) and (f+g) have the same number of zeros inside (\gamma), counting multiplicity.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 7.0

**Proof hint:** Interpolate via (f+t g) for (t\in[0,1]); boundary nonvanishing keeps the winding number / zero count unchanged.

---

---

42. **Structure Theorem for Finite Abelian Groups**

**Statement:** Every finite abelian group is isomorphic to a direct product of cyclic groups of prime-power order.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 6.0

**Proof hint:** Split the group into its (p)-primary parts, then repeatedly choose elements of maximal order and induct.

---

---

43. **Gauss’s Lemma (Polynomial Version)**

**Statement:** The product of two primitive polynomials in (\mathbb Z[x]) is primitive.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 5.5

**Proof hint:** Assume a prime divides every coefficient of the product. Reduce coefficients modulo that prime and derive a contradiction from degree behavior.

---

---

44. **Eisenstein Criterion**

**Statement:** If a polynomial [f(x)=a_nx^n+\cdots+a_0 \in \mathbb Z[x]] has a prime (p) such that:
* (p\nmid a_n)
* (p\mid a_0,\dots,a_{n-1})
* (p^2\nmid a_0)
then (f(x)) is irreducible over (\mathbb Q).

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 6.0

**Proof hint:** Assume a factorization into primitive integer polynomials and compare divisibility of constant terms and higher coefficients modulo (p).

---

---

45. **Monotone Convergence Theorem**

**Statement:** If (0 \le f_n \uparrow f) pointwise (measurable functions), then [\int f_n \to \int f.]

**Course:** Graduate, Real Analysis

**Difficulty:** 6.5

**Proof hint:** Approximate (f) from below by simple functions; eventually those approximations are bounded by some (f_n).

---

---

46. **Fatou’s Lemma**

**Statement:** For nonnegative measurable functions (f_n), [\int \liminf_{n\to\infty} f_n \le \liminf_{n\to\infty} \int f_n.]

**Course:** Graduate, Real Analysis

**Difficulty:** 6.0

**Proof hint:** Define [g_n=\inf_{k\ge n} f_k.] Then (g_n\uparrow \liminf f_n), so apply Monotone Convergence.

---

---

47. **Riesz Representation Theorem (Hilbert Space Version)**

**Statement:** Every bounded linear functional (\phi) on a Hilbert space (H) can be written uniquely as [\phi(x)=\langle x,y\rangle] for some unique (y\in H).

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.0

**Proof hint:** Look at (\ker \phi), take a vector orthogonal to it, and decompose every vector into kernel part plus one orthogonal direction.

---

---

48. **Dominated Convergence Theorem**

**Statement:** If (f_n \to f) almost everywhere and [|f_n| \le g] for some integrable (g), then [\int f_n \to \int f.]

**Course:** Graduate, Real Analysis

**Difficulty:** 6.5

**Proof hint:** Use Fatou’s Lemma on (g \pm f_n), or apply Fatou to (2g-|f_n-f|).

---

---

49. **Fredholm Alternative (finite-dimensional form)**

**Statement:** For a matrix (A), [Ax=b] is solvable iff (b\perp \ker(A^*)).

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 6.0

**Proof hint:** Use orthogonal complements and dimension arguments: vectors orthogonal to all columns are exactly (\ker(A^*)).

---

---

50. **Arzelà–Ascoli Theorem**

**Statement:** A uniformly bounded equicontinuous family of functions on a compact set has a uniformly convergent subsequence.

**Course:** Undergraduate, Real Analysis

**Difficulty:** 6.5

**Proof hint:** Choose a countable dense set, extract a diagonal subsequence converging there, then use equicontinuity to upgrade pointwise convergence to uniform convergence.

---