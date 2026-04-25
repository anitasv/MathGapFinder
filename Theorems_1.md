1. **Euclidean Algorithm**

**Statement:** For integers (a,b) not both zero, repeated division with remainder computes (\gcd(a,b)).

**Course:** Undergraduate, Number Theory

**Difficulty:** 3.5

**Proof hint:** Use that (\gcd(a,b)=\gcd(b,r)) with (r=a-bq) and the remainders strictly decrease until the last nonzero remainder.

---

---

2. **Binomial Theorem**

**Statement:** For any integer (n\ge 0),

[\sum_{k=0}^{n}\binom{n}{k}x^{n-k}y^k.]

**Course:** High School, Algebra II

**Difficulty:** 2.5

**Proof hint:** Expand ((x+y)^n) and count the ways to choose (k) of the (n) factors to supply (y) (or use induction with Pascal’s identity).

---

---

3. **Triangle Inequality**

**Statement:** In any normed space,

[|x+y|\le |x|+|y|.]

For real numbers this becomes:

[|a+b|\le |a|+|b|.]

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 4.0

**Proof hint:** Square both sides (or use Cauchy–Schwarz in inner product spaces) to show [|x+y|^2\le (|x|+|y|)^2] and take square roots.

---

---

4. **Infinitude of Primes**

**Statement:** There are infinitely many prime numbers.

**Course:** High School, Number Theory

**Difficulty:** 2.0

**Proof hint:** Assume finitely many primes (p_1,\dots,p_n) and consider [N=p_1p_2\cdots p_n+1], whose prime divisors are not among the list.

---

---

5. **Bézout’s Identity**

**Statement:** For integers (a,b), there exist integers (x,y) such that [ax+by=\gcd(a,b).]

**Course:** Undergraduate, Number Theory

**Difficulty:** 3.5

**Proof hint:** Run the Euclidean Algorithm and back-substitute the remainder equations to express the gcd as a linear combination of (a) and (b).

---

---

6. **Cauchy–Schwarz Inequality**

**Statement:** In an inner product space, [|\langle x,y\rangle|\le |x||y|.]

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 4.5

**Proof hint:** Consider the nonnegative quadratic [|x-ty|^2\ge 0] in (t) and require its discriminant to be nonpositive.

---

---

7. **AM-GM Inequality**

**Statement:** For nonnegative real numbers (a_1,\dots,a_n), [\frac{a_1+\cdots+a_n}{n}\ge (a_1a_2\cdots a_n)^{1/n}.]

**Course:** High School, Precalculus

**Difficulty:** 3.0

**Proof hint:** Prove the two-variable case via [(a-b)^2\ge 0] and extend to (n) variables by induction or repeated averaging.

---

---

8. **Fundamental Theorem of Arithmetic**

**Statement:** Every integer (n>1) can be written as a product of primes, and this factorization is unique up to order.

**Course:** High School, Number Theory

**Difficulty:** 3.0

**Proof hint:** Use induction for existence and Euclid’s lemma to show two prime factorizations must match up to order.

---

9. **Prime Number Theorem for Arithmetic Progressions**

**Statement:** For any coprime integers (a) and (d), the number of primes (p \le x) with (p \equiv a \pmod d) is asymptotically (\frac{1}{\varphi(d)} \frac{x}{\log x}).

**Course:** Graduate, Analytic Number Theory

**Difficulty:** 9.0

**Proof hint:** Use Dirichlet characters and (L)-series, prove (L(1,\chi)\neq 0) for nonprincipal characters, then translate logarithmic sums into the asymptotic prime count.

---

---

10. **Chinese Remainder Theorem**

**Statement:** If (n_1,\dots,n_k) are pairwise coprime, then a system [x\equiv a_i \pmod{n_i}\quad (i=1,\dots,k)] has a unique solution modulo (N=n_1\cdots n_k).

**Course:** Undergraduate, Number Theory

**Difficulty:** 4.0

**Proof hint:** Use Bézout coefficients to build numbers that are (1) mod one modulus and (0) mod the others, then combine them linearly to solve the system.

---