11. **Fermat’s Little Theorem**

**Statement:** If (p) is prime and (p\nmid a), then [a^{p-1}\equiv 1 \pmod p.]

**Course:** Undergraduate, Number Theory

**Difficulty:** 4.0

**Proof hint:** Multiply all nonzero residue classes mod (p): [1,2,\dots,p-1], then compare with their multiples by (a), which form the same set in a different order.

---

---

12. **Euler’s Theorem**

**Statement:** If (\gcd(a,n)=1), then [a^{\varphi(n)}\equiv 1 \pmod n,] where (\varphi(n)) is the number of integers in ({1,\dots,n}) coprime to (n).

**Course:** Undergraduate, Number Theory

**Difficulty:** 4.5

**Proof hint:** Look at the invertible residue classes modulo (n); multiplication by (a) permutes them, just like in Fermat’s Little Theorem.

---

---

13. **Lagrange’s Theorem (Group Theory)**

**Statement:** If (G) is a finite group and (H\le G) is a subgroup, then [|H| \mid |G|,\qquad |G|=[G:H]\cdot |H|.]

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 4.5

**Proof hint:** Partition (G) into left cosets of (H) and show every coset has exactly (|H|) elements.

---

---

14. **Intermediate Value Theorem**

**Statement:** If (f:[a,b]\to\mathbb R) is continuous and (y) lies between (f(a)) and (f(b)), then there exists (c\in[a,b]) such that [f(c)=y.]

**Course:** Undergraduate, Calculus I

**Difficulty:** 3.5

**Proof hint:** Consider all (x) where (f(x)<y), take the supremum of that set, then use continuity at the boundary point.

---

---

15. **Rank–Nullity Theorem**

**Statement:** For a linear map (T:V\to W) between finite-dimensional vector spaces, [\dim(\ker T)+\dim(\operatorname{im}T)=\dim V.]

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 4.0

**Proof hint:** Take a basis of (\ker T), extend it to a basis of (V), then apply (T) to the added basis vectors.

---

---

16. **Extreme Value Theorem**

**Statement:** If (f:[a,b]\to\mathbb R) is continuous, then (f) attains a maximum and a minimum on ([a,b]).

**Course:** Undergraduate, Calculus I

**Difficulty:** 3.0

**Proof hint:** Continuous image of a compact set is compact; compact subsets of (\mathbb R) contain their supremum and infimum.

---

---

17. **Rolle’s Theorem**

**Statement:** If (f) is continuous on ([a,b]), differentiable on ((a,b)), and [f(a)=f(b),] then there exists (c\in(a,b)) such that [f'(c)=0.]

**Course:** Undergraduate, Calculus I

**Difficulty:** 3.0

**Proof hint:** By Extreme Value Theorem, (f) has max/min, and if not constant, one extremum occurs inside ((a,b)) where the derivative is zero.

---

---

18. **Mean Value Theorem**

**Statement:** If (f) is continuous on ([a,b]) and differentiable on ((a,b)), then there exists (c\in(a,b)) such that [f'(c)=\frac{f(b)-f(a)}{b-a}.]

**Course:** Undergraduate, Calculus I

**Difficulty:** 3.5

**Proof hint:** Subtract the secant line from (f) so the new function has equal endpoint values, then apply Rolle’s Theorem.

---

---

19. **First Isomorphism Theorem**

**Statement:** For a homomorphism (\varphi:G\to H), [G/\ker\varphi \cong \operatorname{im}\varphi.]

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 4.5

**Proof hint:** Map each coset (g\ker\varphi) to (\varphi(g)) and check well-definedness and bijectivity.

---

---

20. **Gram–Schmidt Process**

**Statement:** Any linearly independent set ((v_1,\dots,v_n)) in an inner product space can be converted into an orthonormal set ((e_1,\dots,e_n)) spanning the same subspace.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 4.0

**Proof hint:** Build vectors one at a time by subtracting projections onto previously constructed orthonormal vectors, then normalize.

---