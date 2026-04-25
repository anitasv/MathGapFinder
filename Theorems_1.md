1. **Euclidean Algorithm**

**Statement:** For integers (a,b) not both zero, repeated division with remainder computes (\gcd(a,b)).

**Proof hint:**
* Show
  [\gcd(a,b)=\gcd(b,r)]
  because common divisors are preserved by (r=a-bq).
* Each remainder strictly decreases and stays nonnegative.
* Therefore process terminates.
* Final nonzero remainder is the greatest common divisor.

---

---

2. **Binomial Theorem**

**Statement:** For any integer (n\ge 0),

[\sum_{k=0}^{n}\binom{n}{k}x^{n-k}y^k.]

**Proof hint:**
* Expand ((x+y)(x+y)\cdots(x+y)) with (n) factors.
* To get a term (x^{n-k}y^k), choose (k) of the (n) factors to contribute (y), the rest contribute (x).
* Number of such choices is [\binom{n}{k}.]
(Alternative proof: induction using Pascal identity.)

---

---

3. **Triangle Inequality**

**Statement:** In any normed space,

[|x+y|\le |x|+|y|.]

For real numbers this becomes:

[|a+b|\le |a|+|b|.]

**Proof hint (real numbers):**
* Square both sides: [|a+b|^2=(a+b)^2=a^2+2ab+b^2.]
* Since [2ab\le 2|a||b|,] we get [|a+b|^2\le (|a|+|b|)^2.]
* Take square roots.

**Proof hint (inner product spaces):**
Use Cauchy–Schwarz on [|x+y|^2=|x|^2+2\Re\langle x,y\rangle+|y|^2.]

---

---

4. **Infinitude of Primes**

**Statement:** There are infinitely many prime numbers.

**Proof hint:** Assume finitely many primes (p_1,\dots,p_n). Consider [N=p_1p_2\cdots p_n+1.] Then analyze prime divisors of (N).

---

---

5. **Bézout’s Identity**

**Statement:** For integers (a,b), there exist integers (x,y) such that [ax+by=\gcd(a,b).]

**Proof hint:** Run the Euclidean Algorithm, then back-substitute each remainder equation upward until the gcd is written in terms of (a) and (b).

---

---

6. **Cauchy–Schwarz Inequality**

**Statement:** In an inner product space, [|\langle x,y\rangle|\le |x||y|.]

**Proof hint:** Consider the nonnegative quadratic [|x-ty|^2\ge 0] and use its discriminant.

---

---

7. **AM-GM Inequality**

**Statement:** For nonnegative real numbers (a_1,\dots,a_n), [\frac{a_1+\cdots+a_n}{n}\ge (a_1a_2\cdots a_n)^{1/n}.]

**Proof hint:** First prove the two-variable case using [(a-b)^2\ge 0.] Then extend to (n) variables by induction or repeated averaging.

---

---

8. **Fundamental Theorem of Arithmetic**

**Statement:** Every integer (n>1) can be written as a product of primes, and this factorization is unique up to order.

**Proof hint:** Use induction for existence. For uniqueness, if two prime factorizations exist, use Euclid’s lemma: a prime dividing a product must divide one factor.

---

9. **Prime Number Theorem for Arithmetic Progressions**

**Statement:** For any coprime integers (a) and (d), the number of primes (p \le x) with (p \equiv a \pmod d) is asymptotically (\frac{1}{\varphi(d)} \frac{x}{\log x}).

**Proof hint:** Use Dirichlet characters and (L)-series; show (L(1,\chi)\neq 0) for nonprincipal characters, then relate to the distribution of primes via logarithmic divergence.

---

---

10. **Chinese Remainder Theorem**

**Statement:** If (n_1,\dots,n_k) are pairwise coprime, then a system [x\equiv a_i \pmod{n_i}\quad (i=1,\dots,k)] has a unique solution modulo (N=n_1\cdots n_k).

**Proof hint:** For each (i), build a number that is (1) mod (n_i) and (0) mod all other (n_j), using Bézout coefficients. Then combine them linearly.

---