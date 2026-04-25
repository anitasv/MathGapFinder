21. **Fundamental Theorem of Calculus**

**Statement:** If (f) is continuous and [F(x)=\int_a^x f(t)dt,] then [F'(x)=f(x).] Also, if (G'(x)=f(x)), then [\int_a^b f(x)dx=G(b)-G(a).]

**Course:** Undergraduate, Calculus II

**Difficulty:** 4.0

**Proof hint:** Use a difference quotient for (F) and continuity of (f), then apply the Mean Value Theorem to (G).

---

---

22. **Taylor’s Theorem**

**Statement:** If (f) is sufficiently differentiable near (a), then [f(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n+R_n(x),] where (R_n(x)) is a remainder term.

**Course:** Undergraduate, Calculus II

**Difficulty:** 5.0

**Proof hint:** Subtract the Taylor polynomial from (f) and repeatedly apply Rolle’s/Mean Value Theorem to control the remainder.

---

---

23. **Bolzano–Weierstrass Theorem**

**Statement:** Every bounded sequence in (\mathbb R^n) has a convergent subsequence.

**Course:** Undergraduate, Real Analysis

**Difficulty:** 4.5

**Proof hint:** Repeatedly bisect a containing box to form a nested sequence with infinitely many terms, then pick one term from each stage.

---

---

24. **Gershgorin Circle Theorem**

**Statement:** Every eigenvalue of a complex matrix (A=(a_{ij})) lies in at least one disk [|z-a_{ii}|\le \sum_{j\ne i}|a_{ij}|.]

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 5.0

**Proof hint:** Take an eigenvector, choose a coordinate of maximal magnitude, and inspect the corresponding row of (Av=\lambda v).

---

---

25. **Cauchy’s Theorem (Group Theory)**

**Statement:** If a prime (p) divides the order of a finite group (G), then (G) contains an element of order (p).

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 5.0

**Proof hint:** Let a cyclic group of order (p) act on suitable (p)-tuples or subsets of (G), then count fixed points modulo (p).

---

---

26. **Parseval’s Identity**

**Statement:** If ({e_n}) is an orthonormal basis of a Hilbert space, then for any vector (x), [|x|^2=\sum_n |\langle x,e_n\rangle|^2.]

**Course:** Undergraduate, Functional Analysis

**Difficulty:** 4.5

**Proof hint:** Use Pythagoras on finite partial sums of the orthogonal expansion, then pass to the limit using completeness.

---

---

27. **Heine–Borel Theorem**

**Statement:** A subset of (\mathbb R^n) is compact iff it is closed and bounded.

**Course:** Undergraduate, Real Analysis

**Difficulty:** 4.0

**Proof hint:** Use Bolzano–Weierstrass/sequential compactness for one direction and open-cover arguments for the other.

---

---

28. **Banach Fixed Point Theorem**

**Statement:** If ((X,d)) is a complete metric space and (T:X\to X) satisfies [d(Tx,Ty)\le c d(x,y), \quad 0<c<1,] then (T) has a unique fixed point.

**Course:** Graduate, Functional Analysis

**Difficulty:** 5.0

**Proof hint:** Iterate (x_{n+1}=T(x_n)) so distances shrink geometrically, making a Cauchy sequence that converges to the fixed point.

---

---

29. **Liouville’s Theorem**

**Statement:** Every bounded entire function is constant.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 4.0

**Proof hint:** Use Cauchy’s integral formula or estimates to show all derivatives are zero.

---

---

30. **Jordan–Hölder Theorem**

**Statement:** Any two composition series of a finite group have the same length, and the same simple factor groups up to order and isomorphism.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 5.5

**Proof hint:** Refine two composition series to a common refinement, then compare successive quotient factors.

---