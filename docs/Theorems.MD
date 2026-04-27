1. **Infinitude of Primes**

**Statement:** There are infinitely many prime numbers.

**Course:** High School, Number Theory

**Difficulty:** 2.0

**Proof hint:** Assume finitely many primes $p_1,\dots,p_n$ and consider $$N=p_1p_2\cdots p_n+1,$$ whose prime divisors are not among the list.

---

2. **Law of Cosines**

**Statement:** In any triangle with sides $a,b,c$ and angle $C$ opposite $c$, $$c^2=a^2+b^2-2ab\cos C.$$

**Course:** High School, Trigonometry

**Difficulty:** 2.0

**Proof hint:** Place the triangle with the angle $C$ at the origin and one side along the $x$-axis, then expand $\|(b-a\cos C,-a\sin C)\|^2$.

---

3. **Bayes' Theorem**

**Statement:** For events $A,B$ with $P(B)>0$, $$P(A\mid B)=\frac{P(B\mid A)\,P(A)}{P(B)}.$$

**Course:** High School, Statistics

**Difficulty:** 2.0

**Proof hint:** Apply the definition of conditional probability $P(A\mid B)=P(A\cap B)/P(B)$ twice and equate $P(A\cap B)=P(B\mid A)P(A)$.

---

4. **Binomial Theorem**

**Statement:** For any integer $n\ge 0$,

$$(x+y)^n = \sum_{k=0}^{n}\binom{n}{k}x^{n-k}y^k.$$

**Course:** High School, Algebra II

**Difficulty:** 2.5

**Proof hint:** Expand $(x+y)^n$ and count the ways to choose $k$ of the $n$ factors to supply $y$ (or use induction with Pascal’s identity).

---

5. **Fundamental Theorem of Arithmetic**

**Statement:** Every integer $n>1$ can be written as a product of primes, and this factorization is unique up to order.

**Course:** High School, Number Theory

**Difficulty:** 3.0

**Proof hint:** Use induction for existence and Euclid’s lemma to show two prime factorizations must match up to order.

---

6. **AM-GM Inequality**

**Statement:** For nonnegative real numbers $a_1,\dots,a_n$, $$\frac{a_1+\cdots+a_n}{n}\ge (a_1a_2\cdots a_n)^{1/n}.$$

**Course:** High School, Precalculus

**Difficulty:** 3.5

**Proof hint:** Prove the two-variable case via $$(a-b)^2\ge 0$$ and extend to $n$ variables by induction or repeated averaging.

---

7. **Euclidean Algorithm**

**Statement:** For integers $a,b$ with $b\ne 0$, if $a=bq+r$ with $0\le r<|b|$, then $$\gcd(a,b)=\gcd(b,r),$$ and iterating this reduction terminates at the gcd in finitely many steps.

**Course:** Undergraduate, Number Theory

**Difficulty:** 2.5

**Proof hint:** Use that $\gcd(a,b)=\gcd(b,r)$ with $r=a-bq$ and the remainders strictly decrease until the last nonzero remainder.

---

8. **Triangle Inequality**

**Statement:** For all $x,y\in\mathbb{R}^n$ with the Euclidean norm $\|x\|=\sqrt{x_1^2+\cdots+x_n^2}$,

$$\|x+y\|\le \|x\|+\|y\|.$$

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 3.0

**Proof hint:** Square both sides; the inequality reduces to $x\cdot y\le \|x\|\,\|y\|$, which is the Cauchy–Schwarz inequality.

---

9. **Rolle’s Theorem**

**Statement:** If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $$f(a)=f(b),$$ then there exists $c\in(a,b)$ such that $$f'(c)=0.$$

**Course:** Undergraduate, Calculus I

**Difficulty:** 3.0

**Proof hint:** By Extreme Value Theorem, $f$ has max/min, and if not constant, one extremum occurs inside $(a,b)$ where the derivative is zero.

---

10. **Chebyshev's Inequality**

**Statement:** For any random variable $X$ with finite mean $\mu$ and variance $\sigma^2$, $$P(|X-\mu|\ge k\sigma)\le \frac{1}{k^2}\quad\text{for all }k>0.$$

**Course:** Undergraduate, Probability

**Difficulty:** 3.0

**Proof hint:** Apply Markov's inequality to the nonnegative random variable $(X-\mu)^2$ with threshold $k^2\sigma^2$.

---

11. **Inclusion–Exclusion Principle**

**Statement:** For finite sets $A_1,\dots,A_n$, $$\Big|\bigcup_{i=1}^n A_i\Big|=\sum_{\emptyset\ne S\subseteq\{1,\dots,n\}}(-1)^{|S|+1}\Big|\bigcap_{i\in S}A_i\Big|.$$

**Course:** Undergraduate, Discrete Mathematics

**Difficulty:** 3.0

**Proof hint:** Show each element of the union is counted exactly once on the right by expanding $\prod_i(1-\mathbf{1}_{A_i})$ and using the binomial identity $\sum_{k=1}^m\binom{m}{k}(-1)^{k+1}=1$.

---

12. **Euler's Theorem on Eulerian Circuits**

**Statement:** A finite connected graph has an Eulerian circuit if and only if every vertex has even degree.

**Course:** Undergraduate, Graph Theory

**Difficulty:** 3.0

**Proof hint:** Necessity: each visit to a vertex uses two edges. Sufficiency: greedily build a closed trail and splice in extra closed trails at vertices with unused edges, using even-degree to guarantee they exist.

---

13. **Cantor's Theorem**

**Statement:** For any set $X$, there is no surjection $X\to \mathcal{P}(X)$; in particular $|X|<|\mathcal{P}(X)|$.

**Course:** Undergraduate, Set Theory

**Difficulty:** 3.0

**Proof hint:** Given $f:X\to\mathcal{P}(X)$, consider $D=\{x\in X:x\notin f(x)\}$ and observe $D\ne f(x)$ for every $x$.

---

14. **Bézout’s Identity**

**Statement:** For integers $a,b$, there exist integers $x,y$ such that $$ax+by=\gcd(a,b).$$

**Course:** Undergraduate, Number Theory

**Difficulty:** 3.5

**Proof hint:** Run the Euclidean Algorithm and back-substitute the remainder equations to express the gcd as a linear combination of $a$ and $b$.

---

15. **Chinese Remainder Theorem**

**Statement:** If $n_1,\dots,n_k$ are pairwise coprime, then a system $$x\equiv a_i \pmod{n_i}\quad (i=1,\dots,k)$$ has a unique solution modulo $N=n_1\cdots n_k$.

**Course:** Undergraduate, Number Theory

**Difficulty:** 3.5

**Proof hint:** Use Bézout coefficients to build numbers that are $1$ mod one modulus and $0$ mod the others, then combine them linearly to solve the system.

---

16. **Fermat’s Little Theorem**

**Statement:** If $p$ is prime and $p\nmid a$, then $$a^{p-1}\equiv 1 \pmod p.$$

**Course:** Undergraduate, Number Theory

**Difficulty:** 3.5

**Proof hint:** Multiply all nonzero residue classes mod $p$: $$1,2,\dots,p-1.$$ Then compare with their multiples by $a$, which form the same set in a different order.

---

17. **Lagrange’s Theorem (Group Theory)**

**Statement:** If $G$ is a finite group and $H\le G$ is a subgroup, then $$|H| \mid |G|,\qquad |G|=[G:H]\cdot |H|.$$

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 3.5

**Proof hint:** Partition $G$ into left cosets of $H$ and show every coset has exactly $|H|$ elements.

---

18. **Intermediate Value Theorem**

**Statement:** If $f:[a,b]\to\mathbb R$ is continuous and $y$ lies between $f(a)$ and $f(b)$, then there exists $c\in[a,b]$ such that $$f(c)=y.$$

**Course:** Undergraduate, Calculus I

**Difficulty:** 3.5

**Proof hint:** Consider all $x$ where $f(x)<y$, take the supremum of that set, then use continuity at the boundary point.

---

19. **Rank–Nullity Theorem**

**Statement:** For a linear map $T:V\to W$ between finite-dimensional vector spaces, $$\dim(\ker T)+\dim(\operatorname{im}T)=\dim V.$$

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 3.5

**Proof hint:** Take a basis of $\ker T$, extend it to a basis of $V$, then apply $T$ to the added basis vectors.

---

20. **Mean Value Theorem**

**Statement:** If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c\in(a,b)$ such that $$f'(c)=\frac{f(b)-f(a)}{b-a}.$$

**Course:** Undergraduate, Calculus I

**Difficulty:** 3.5

**Proof hint:** Subtract the secant line from $f$ so the new function has equal endpoint values, then apply Rolle’s Theorem.

---

21. **Gram–Schmidt Process**

**Statement:** Any linearly independent set $(v_1,\dots,v_n)$ in an inner product space can be converted into an orthonormal set $(e_1,\dots,e_n)$ spanning the same subspace.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 3.5

**Proof hint:** Build vectors one at a time by subtracting projections onto previously constructed orthonormal vectors, then normalize.

---

22. **Cauchy–Schwarz Inequality**

**Statement:** In an inner product space, $$|\langle x,y\rangle|\le \|x\|\,\|y\|.$$

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 4.0

**Proof hint:** Consider the nonnegative quadratic $$|x-ty|^2\ge 0$$ in $t$ and require its discriminant to be nonpositive.

---

23. **Euler’s Theorem**

**Statement:** If $\gcd(a,n)=1$, then $$a^{\varphi(n)}\equiv 1 \pmod n,$$ where $\varphi(n)$ is the number of integers in $\{1,\dots,n\}$ coprime to $n$.

**Course:** Undergraduate, Number Theory

**Difficulty:** 4.0

**Proof hint:** Look at the invertible residue classes modulo $n$. Multiplication by $a$ permutes them, just like in Fermat’s Little Theorem.

---

24. **Extreme Value Theorem**

**Statement:** If $f:[a,b]\to\mathbb R$ is continuous, then $f$ attains a maximum and a minimum on $[a,b]$.

**Course:** Undergraduate, Calculus I

**Difficulty:** 4.0

**Proof hint:** Continuous image of a compact set is compact; compact subsets of $\mathbb R$ contain their supremum and infimum.

---

25. **First Isomorphism Theorem**

**Statement:** For a homomorphism $\varphi:G\to H$, $$G/\ker\varphi \cong \operatorname{im}\varphi.$$

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 4.0

**Proof hint:** Map each coset $g\ker\varphi$ to $\varphi(g)$ and check well-definedness and bijectivity.

---

26. **Fundamental Theorem of Calculus**

**Statement:** If $f$ is continuous and $$F(x)=\int_a^x f(t)dt,$$ then $$F'(x)=f(x).$$ Also, if $G'(x)=f(x)$, then $$\int_a^b f(x)dx=G(b)-G(a).$$

**Course:** Undergraduate, Calculus II

**Difficulty:** 4.0

**Proof hint:** Use a difference quotient for $F$ and continuity of $f$, then apply the Mean Value Theorem to $G$.

---

27. **Gershgorin Circle Theorem**

**Statement:** Every eigenvalue of a complex matrix $A=(a_{ij})$ lies in at least one disk $$|z-a_{ii}|\le \sum_{j\ne i}|a_{ij}|.$$

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 4.0

**Proof hint:** Take an eigenvector, choose a coordinate of maximal magnitude, and inspect the corresponding row of $Av=\lambda v$.

---

28. **Liouville’s Theorem**

**Statement:** Every bounded entire function is constant.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 4.0

**Proof hint:** Use Cauchy’s integral formula or estimates to show all derivatives are zero.

---

29. **Quadratic Convergence of Newton's Method**

**Statement:** If $f$ is $C^2$ with $f(x^*)=0$, $f'(x^*)\ne 0$, then for $x_0$ sufficiently close to $x^*$ the iteration $$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$$ converges to $x^*$ with $|x_{n+1}-x^*|\le C|x_n-x^*|^2$.

**Course:** Undergraduate, Numerical Analysis

**Difficulty:** 4.0

**Proof hint:** Taylor-expand $f$ around $x_n$ to second order at $x^*$ and divide by $f'(x_n)$ to get the error recursion in closed form.

---

30. **Bolzano–Weierstrass Theorem**

**Statement:** Every bounded sequence in $\mathbb R^n$ has a convergent subsequence.

**Course:** Undergraduate, Real Analysis

**Difficulty:** 4.5

**Proof hint:** Repeatedly bisect a containing box to form a nested sequence with infinitely many terms, then pick one term from each stage.

---

31. **Heine–Borel Theorem**

**Statement:** A subset of $\mathbb R^n$ is compact iff it is closed and bounded.

**Course:** Undergraduate, Real Analysis

**Difficulty:** 4.5

**Proof hint:** Use Bolzano–Weierstrass/sequential compactness for one direction and open-cover arguments for the other.

---

32. **Schwarz Lemma**

**Statement:** If $f:\mathbb D\to\mathbb D$ is holomorphic and $f(0)=0$, then $$|f(z)|\le |z|,\qquad |f'(0)|\le 1,$$ with equality cases giving rotations.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 4.5

**Proof hint:** Consider $$g(z)=\frac{f(z)}{z}$$ (with removable singularity at $0$), then apply the Maximum Modulus Principle.

---

33. **Eisenstein Criterion**

**Statement:** If a polynomial $$f(x)=a_nx^n+\cdots+a_0 \in \mathbb Z[x]$$ has a prime $p$ such that:
* $p\nmid a_n$
* $p\mid a_0,\dots,a_{n-1}$
* $p^2\nmid a_0$
then $f(x)$ is irreducible over $\mathbb Q$.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 4.5

**Proof hint:** Assume a factorization into primitive integer polynomials and compare divisibility of constant terms and higher coefficients modulo $p$.

---

34. **Fredholm Alternative (finite-dimensional form)**

**Statement:** For a matrix $A$, $$Ax=b$$ is solvable iff $b\perp \ker(A^*)$.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 4.5

**Proof hint:** Use orthogonal complements and dimension arguments: vectors orthogonal to all columns are exactly $\ker(A^*)$.

---

35. **Divergence Theorem**

**Statement:** For a sufficiently smooth vector field $F$ on a bounded region $\Omega\subset\mathbb{R}^3$ with outward-oriented boundary $\partial\Omega$, $$\int_{\Omega}(\nabla\cdot F)\,dV=\int_{\partial\Omega}F\cdot n\,dS.$$

**Course:** Undergraduate, Vector Calculus

**Difficulty:** 4.5

**Proof hint:** Reduce to a rectangular box by partitioning $\Omega$, then for each component use the Fundamental Theorem of Calculus in one coordinate and Fubini in the others.

---

36. **Picard–Lindelöf Theorem**

**Statement:** If $f(t,y)$ is continuous and Lipschitz in $y$ on a neighborhood of $(t_0,y_0)$, then the initial-value problem $$y'=f(t,y),\quad y(t_0)=y_0$$ has a unique solution on some interval around $t_0$.

**Course:** Undergraduate, Ordinary Differential Equations

**Difficulty:** 4.5

**Proof hint:** Rewrite as a fixed-point equation $y(t)=y_0+\int_{t_0}^t f(s,y(s))\,ds$ on a complete metric space of continuous functions and apply the Banach fixed point theorem using the Lipschitz constant.

---

37. **Ramsey's Theorem**

**Statement:** For all positive integers $r,s$ there exists $R(r,s)$ such that every 2-coloring of the edges of the complete graph on $R(r,s)$ vertices contains a red $K_r$ or a blue $K_s$.

**Course:** Undergraduate, Combinatorics

**Difficulty:** 4.5

**Proof hint:** Induct on $r+s$ using the recurrence $R(r,s)\le R(r-1,s)+R(r,s-1)$, obtained by examining edges from a fixed vertex and applying pigeonhole to its $R(r-1,s)+R(r,s-1)-1$ neighbors.

---

38. **Taylor’s Theorem**

**Statement:** If $f$ is $n$ times differentiable at $a$, then $$f(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n+h_n(x)(x-a)^n,$$ where $h_n(x)\to 0$ as $x\to a$.

**Course:** Undergraduate, Calculus II

**Difficulty:** 5.0

**Proof hint:** Subtract the Taylor polynomial from $f$ and repeatedly apply Rolle’s/Mean Value Theorem to control the remainder.

---

39. **Cauchy’s Theorem (Group Theory)**

**Statement:** If a prime $p$ divides the order of a finite group $G$, then $G$ contains an element of order $p$.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 5.0

**Proof hint:** Let a cyclic group of order $p$ act on suitable $p$-tuples or subsets of $G$, then count fixed points modulo $p$.

---

40. **Parseval’s Identity**

**Statement:** If $\{e_n\}$ is an orthonormal basis of a Hilbert space, then for any vector $x$, $$\|x\|^2=\sum_n |\langle x,e_n\rangle|^2.$$

**Course:** Undergraduate, Functional Analysis

**Difficulty:** 5.0

**Proof hint:** Use Pythagoras on finite partial sums of the orthogonal expansion, then pass to the limit using completeness.

---

41. **Singular Value Decomposition (SVD)**

**Statement:** For any matrix $A\in \mathbb C^{m\times n}$, there exist unitary matrices $U,V$ such that $$A=U\Sigma V^*$$ where $\Sigma$ is diagonal with nonnegative real entries.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 5.0

**Proof hint:** Diagonalize $A^*A$ using the Spectral Theorem, and take square roots of its eigenvalues as singular values.

---

42. **Cauchy Integral Formula**

**Statement:** If $f$ is holomorphic on and inside a simple closed curve $\gamma$, and $a$ lies inside, then $$f(a)=\frac{1}{2\pi i}\oint_\gamma \frac{f(z)}{z-a}dz.$$

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.0

**Proof hint:** Split $$\frac{f(z)}{z-a} = \frac{f(z)-f(a)}{z-a}+\frac{f(a)}{z-a},$$ then apply Cauchy’s theorem to the first term.

---

43. **Maximum Modulus Principle**

**Statement:** A nonconstant holomorphic function cannot attain a local maximum of $|f(z)|$ at an interior point of its domain.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.0

**Proof hint:** Use the Cauchy Integral Formula or mean-value property: if $|f|$ is maximal at the center, then boundary values force $f$ to be constant nearby.

---

44. **Gauss’s Lemma (Polynomial Version)**

**Statement:** The product of two primitive polynomials in $\mathbb Z[x]$ is primitive.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 5.0

**Proof hint:** Assume a prime divides every coefficient of the product. Reduce coefficients modulo that prime and derive a contradiction from degree behavior.

---

45. **Borel–Cantelli Lemmas**

**Statement:** For events $A_1,A_2,\dots$:
1. If $$\sum_{n=1}^\infty P(A_n)<\infty,$$ then with probability $1$, only finitely many $A_n$ occur.
2. If the $A_n$ are independent and $$\sum_{n=1}^\infty P(A_n)=\infty,$$ then with probability $1$, infinitely many occur.

**Course:** Undergraduate, Probability

**Difficulty:** 5.0

**Proof hint:** Use subadditivity for the first part, and for the second apply complements together with independence.

---

46. **Maximum Principle for the Heat Equation**

**Statement:** If $u$ is continuous on $\overline{\Omega\times[0,T]}$ and satisfies $u_t-\Delta u\le 0$ on $\Omega\times(0,T]$ with $\Omega\subset\mathbb{R}^n$ bounded, then $u$ attains its maximum on the parabolic boundary $(\overline\Omega\times\{0\})\cup(\partial\Omega\times[0,T])$.

**Course:** Undergraduate, Partial Differential Equations

**Difficulty:** 5.0

**Proof hint:** Perturb $u$ by $\varepsilon t$ and argue that an interior maximum would force $u_t\ge 0$ and $\Delta u\le 0$, contradicting strict inequality; let $\varepsilon\to 0$.

---

47. **Cramér–Rao Lower Bound**

**Statement:** Under regularity conditions, any unbiased estimator $\hat\theta$ of a scalar parameter $\theta$ satisfies $$\mathrm{Var}(\hat\theta)\ge \frac{1}{I(\theta)},$$ where $I(\theta)$ is the Fisher information.

**Course:** Undergraduate, Mathematical Statistics

**Difficulty:** 5.0

**Proof hint:** Apply the Cauchy–Schwarz inequality to $\hat\theta-\theta$ and the score $\partial_\theta\log f(X;\theta)$, using $E[\text{score}]=0$ and $\partial_\theta E[\hat\theta]=1$.

---

48. **Linear Programming Strong Duality**

**Statement:** If a linear program $\min c^Tx$ subject to $Ax\ge b,\,x\ge 0$ has an optimal solution, then so does its dual $\max b^Ty$ subject to $A^Ty\le c,\,y\ge 0$, and the optimal values coincide.

**Course:** Undergraduate, Optimization

**Difficulty:** 5.0

**Proof hint:** Use Farkas' lemma (a consequence of the separating hyperplane theorem) to certify that the gap between primal and dual optima is empty.

---

49. **Spectral Theorem (Finite-Dimensional)**

**Statement:** A complex matrix $A$ is normal iff there exists a unitary matrix $U$ such that $$U^*AU=D$$ with $D$ diagonal.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 5.5

**Proof hint:** Use Schur triangularization and then show a normal upper-triangular matrix must already be diagonal.

---

50. **Open Mapping Theorem (Complex Analysis)**

**Statement:** A nonconstant holomorphic function maps open sets to open sets.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.5

**Proof hint:** Near $z_0$, write $$f(z)-f(z_0)=(z-z_0)^k g(z)$$ with $g(z_0)\neq 0$, so small circles around $z_0$ map around $f(z_0)$ and force nearby values to be attained.

---

51. **Residue Theorem**

**Statement:** If $f$ is meromorphic inside a closed contour $\gamma$, then $$\oint_\gamma f(z)dz = 2\pi i \sum \operatorname{Res}(f;a_k),$$ where the sum is over enclosed poles.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.5

**Proof hint:** Remove small circles around each pole, apply the Cauchy Integral Theorem to the remaining region, and use Laurent coefficients on the small circles.

---

52. **Argument Principle**

**Statement:** If $f$ is meromorphic and has no zeros or poles on a closed contour $\gamma$, then $$\frac{1}{2\pi i}\oint_\gamma \frac{f'(z)}{f(z)}dz = N-P,$$ where $N$ and $P$ are the numbers of zeros and poles inside $\gamma$, counted with multiplicity.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.5

**Proof hint:** Near a zero/pole, write $f(z)=(z-a)^m g(z)$, so $f'/f$ has a simple pole with residue $m$ (or $-m$).

---

53. **Rouché’s Theorem**

**Statement:** If $f$ and $g$ are holomorphic inside/on a closed contour $\gamma$, and $$|g(z)|<|f(z)| \quad \text{on } \gamma,$$ then $f$ and $f+g$ have the same number of zeros inside $\gamma$, counting multiplicity.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.5

**Proof hint:** Interpolate via $f+t g$ for $t\in[0,1]$; boundary nonvanishing keeps the winding number / zero count unchanged.

---

54. **Cayley–Hamilton Theorem**

**Statement:** Every square matrix satisfies its own characteristic polynomial: $$p_A(A)=0.$$

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 5.5

**Proof hint:** Use the adjugate identity $$(\lambda I-A)\operatorname{adj}(\lambda I-A)=p_A(\lambda)I$$ and interpret it as a polynomial identity before substituting $\lambda=A$.

---

55. **Implicit Function Theorem**

**Statement:** If $F(x,y)=0$ and the derivative with respect to $y$ is invertible at a point, then locally one can solve uniquely for $$y=g(x).$$

**Course:** Undergraduate, Multivariable Calculus

**Difficulty:** 5.5

**Proof hint:** Apply the Inverse Function Theorem to the map $$(x,y)\mapsto (x,F(x,y))$$ to solve for $$y=g(x)$$ locally.

---

56. **Jordan–Hölder Theorem**

**Statement:** Any two composition series of a finite group have the same length, and the same simple factor groups up to order and isomorphism.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 6.0

**Proof hint:** Refine two normal series to a common refinement, then compare successive quotient factors.

---

57. **Fundamental Theorem of Symmetric Polynomials**

**Statement:** Every symmetric polynomial in $x_1,\dots,x_n$ over a commutative ring $R$ can be written **uniquely** as a polynomial in the elementary symmetric polynomials $e_1,\dots,e_n$ with coefficients in $R$.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 6.0

**Proof hint:** Order monomials and eliminate the leading symmetric monomial using suitable products of elementary symmetric polynomials, then iterate.

---

58. **Structure Theorem for Finite Abelian Groups**

**Statement:** Every finite abelian group is isomorphic to a direct product of cyclic groups of prime-power order.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 6.0

**Proof hint:** Split the group into its $p$-primary parts, then repeatedly choose elements of maximal order and induct.

---

59. **Inverse Function Theorem**

**Statement:** If $f:\mathbb R^n\to\mathbb R^n$ is continuously differentiable and the derivative $Df(a)$ is invertible, then $f$ is locally invertible near $a$, with differentiable inverse.

**Course:** Undergraduate, Multivariable Calculus

**Difficulty:** 6.0

**Proof hint:** Use the invertible linearization at $a$ and apply a contraction-mapping or Newton iteration argument to obtain a local inverse.

---

60. **Gauss–Bonnet Theorem**

**Statement:** For a compact oriented surface $S$ with Gaussian curvature $K$ and Euler characteristic $\chi(S)$, $$\int_S K\,dA = 2\pi\,\chi(S).$$

**Course:** Undergraduate, Differential Geometry

**Difficulty:** 6.0

**Proof hint:** Triangulate $S$ and apply the local Gauss–Bonnet formula to each triangle, then sum, using that interior angles around each vertex add to $2\pi$ and counting edges/faces gives $\chi(S)$.

---

61. **Arzelà–Ascoli Theorem**

**Statement:** A uniformly bounded equicontinuous family of functions on a compact set has a uniformly convergent subsequence.

**Course:** Undergraduate, Real Analysis

**Difficulty:** 6.5

**Proof hint:** Choose a countable dense set, extract a diagonal subsequence converging there, then use equicontinuity to upgrade pointwise convergence to uniform convergence.

---

62. **Law of Large Numbers**

**Statement:** Let $X_1,X_2,\dots$ be i.i.d. random variables with $\mathbb E|X_1|<\infty$ and mean $\mu$. Then (Strong Law) $$\frac{X_1+\cdots+X_n}{n}\xrightarrow{a.s.} \mu.$$ In particular, the same convergence holds in probability (Weak Law, which only needs $\mathbb E|X_1|<\infty$ as well, or finite variance for the elementary proof).

**Course:** Undergraduate, Probability

**Difficulty:** 6.5

**Proof hint:** Control variance of averages (weak form), or combine truncation + Borel–Cantelli for almost sure convergence.

---

63. **Stokes’ Theorem**

**Statement:** For a smooth oriented manifold $M$ with boundary, $$\int_M d\omega = \int_{\partial M} \omega,$$ where $\omega$ is a differential form.

**Course:** Undergraduate, Multivariable Calculus

**Difficulty:** 6.5

**Proof hint:** Prove the formula in $\mathbb{R}^n$ by iterated one-dimensional FTC and extend via partitions of unity and coordinate charts.

---

64. **Central Limit Theorem**

**Statement:** For i.i.d. random variables with mean $\mu$ and variance $\sigma^2$, $$\frac{(X_1+\cdots+X_n)-n\mu}{\sigma\sqrt n} \Rightarrow N(0,1).$$

**Course:** Undergraduate, Probability

**Difficulty:** 7.0

**Proof hint:** Compute characteristic functions of normalized sums, use Taylor expansion near $0$, then pass to the limit.

---

65. **Jordan Canonical Form**

**Statement:** Every complex square matrix is similar to a block diagonal matrix made of Jordan blocks.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 7.0

**Proof hint:** Decompose the space into generalized eigenspaces and build Jordan chains for each eigenvalue using the nilpotent action of $(A-\lambda I)$.

---

66. **Riemann Mapping Theorem**

**Statement:** Every simply connected proper open subset of $\mathbb C$ is conformally equivalent to the unit disk.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 7.5

**Proof hint:** Construct a family of injective holomorphic maps into the disk, maximize the derivative at a base point, and use normal families (Montel theorem) to extract a limit.

---

67. **Jordan Curve Theorem**

**Statement:** Every simple closed curve in the plane divides the plane into exactly two connected regions: an inside and an outside.

**Course:** Undergraduate, Topology

**Difficulty:** 8.0

**Proof hint:** Define the winding number for points off the curve, show it is locally constant with value $0$ outside and nonzero inside, and exclude extra components.

---

68. **Banach Fixed Point Theorem**

**Statement:** If $(X,d)$ is a complete metric space and $T:X\to X$ satisfies $$d(Tx,Ty)\le c d(x,y), \quad 0<c<1,$$ then $T$ has a unique fixed point.

**Course:** Graduate, Functional Analysis

**Difficulty:** 4.5

**Proof hint:** Iterate $x_{n+1}=T(x_n)$ so distances shrink geometrically, making a Cauchy sequence that converges to the fixed point.

---

69. **Schur Triangularization Theorem**

**Statement:** Every complex square matrix $A$ is unitarily similar to an upper triangular matrix: $$U^*AU=T$$ for some unitary $U$ and upper triangular $T$.

**Course:** Graduate, Linear Algebra

**Difficulty:** 5.0

**Proof hint:** Use existence of one eigenvector, extend it to an orthonormal basis, obtain a block upper-triangular form, then induct on dimension.

---

70. **Fatou’s Lemma**

**Statement:** For nonnegative measurable functions $f_n$, $$\int \liminf_{n\to\infty} f_n \le \liminf_{n\to\infty} \int f_n.$$

**Course:** Graduate, Real Analysis

**Difficulty:** 5.5

**Proof hint:** Define $$g_n=\inf_{k\ge n} f_k.$$ Then $g_n\uparrow \liminf f_n$, so apply Monotone Convergence.

---

71. **Riesz Representation Theorem (Hilbert Space Version)**

**Statement:** Every bounded linear functional $\phi$ on a Hilbert space $H$ can be written as $$\phi(x)=\langle x,y\rangle$$ for a unique $y\in H$.

**Course:** Graduate, Functional Analysis

**Difficulty:** 5.5

**Proof hint:** Look at $\ker \phi$, take a vector orthogonal to it, and decompose every vector into kernel part plus one orthogonal direction.

---

72. **Hilbert Basis Theorem**

**Statement:** If $R$ is a Noetherian ring, then the polynomial ring $$R[x]$$ is also Noetherian.

**Course:** Graduate, Commutative Algebra

**Difficulty:** 5.5

**Proof hint:** For an ideal in $R[x]$, look at leading coefficients of polynomials of each degree. Use finite generation in $R$, then induct on degree.

---

73. **Existence of QR Decomposition**

**Statement:** Every matrix $A\in\mathbb{R}^{m\times n}$ with $m\ge n$ admits a factorization $A=QR$ with $Q\in\mathbb{R}^{m\times n}$ having orthonormal columns and $R\in\mathbb{R}^{n\times n}$ upper triangular.

**Course:** Graduate, Numerical Linear Algebra

**Difficulty:** 5.5

**Proof hint:** Apply the Gram–Schmidt process (or Householder reflections) to the columns of $A$; the orthonormalized columns form $Q$ and the coefficients form the upper-triangular $R$.

---

74. **Monotone Convergence Theorem**

**Statement:** If $0 \le f_n \uparrow f$ pointwise (measurable functions), then $$\int f_n \to \int f.$$

**Course:** Graduate, Real Analysis

**Difficulty:** 6.0

**Proof hint:** Approximate $f$ from below by simple functions; eventually those approximations are bounded by some $f_n$.

---

75. **Dominated Convergence Theorem**

**Statement:** If $f_n \to f$ almost everywhere and $$|f_n| \le g$$ for some integrable $g$, then $$\int f_n \to \int f.$$

**Course:** Graduate, Real Analysis

**Difficulty:** 6.0

**Proof hint:** Use Fatou’s Lemma on $g \pm f_n$, or apply Fatou to $2g-|f_n-f|$.

---

76. **Maschke's Theorem**

**Statement:** Let $G$ be a finite group and $k$ a field with $\mathrm{char}(k)\nmid |G|$. Every finite-dimensional $k[G]$-module is a direct sum of irreducible submodules.

**Course:** Graduate, Representation Theory

**Difficulty:** 6.0

**Proof hint:** Given a submodule $W\subset V$, average any $k$-linear projection $V\to W$ over $G$ via $\frac{1}{|G|}\sum_{g\in G} g\cdot\pi\cdot g^{-1}$ to obtain a $G$-equivariant projection.

---

77. **Fubini’s Theorem**

**Statement:** If $f$ is integrable on a product space $X\times Y$, then $$\int_{X\times Y} f(x,y)d(x,y) = \int_X\left(\int_Y f(x,y)dy\right)dx$$ (and similarly with the order reversed).

**Course:** Graduate, Real Analysis

**Difficulty:** 6.5

**Proof hint:** First prove it for indicator functions of rectangles, then simple functions, then extend by approximation to general integrable functions.

---

78. **Closed Graph Theorem**

**Statement:** If $T:X\to Y$ is a linear operator between Banach spaces and its graph $\{(x,Tx):x\in X\}$ is closed in $X\times Y$, then $T$ is bounded.

**Course:** Graduate, Functional Analysis

**Difficulty:** 6.5

**Proof hint:** View the graph itself as a Banach space, then use projection maps together with the Open Mapping Theorem.

---

79. **Perron–Frobenius Theorem**

**Statement:** A square matrix with strictly positive entries has a positive real eigenvalue $\lambda^*$ that is simple, strictly greater in modulus than every other eigenvalue, and admits a (unique up to scaling) strictly positive eigenvector; moreover $\lambda^*$ is the only eigenvalue with a positive eigenvector.

**Course:** Graduate, Linear Algebra

**Difficulty:** 6.5

**Proof hint:** Map the positive simplex to itself using the matrix, then use compactness / fixed-point ideas; stronger versions handle irreducible nonnegative matrices.

---

80. **Spectral Theorem (Compact Self-Adjoint Operators)**

**Statement:** A compact self-adjoint operator on a Hilbert space has an orthonormal basis of eigenvectors, with real eigenvalues accumulating only at $0$.

**Course:** Graduate, Functional Analysis

**Difficulty:** 6.5

**Proof hint:** Maximize the Rayleigh quotient to obtain one eigenvector, restrict to its orthogonal complement, then iterate using compactness.

---

81. **Yoneda Lemma**

**Statement:** For any locally small category $\mathcal{C}$, object $A\in\mathcal{C}$, and functor $F:\mathcal{C}\to\mathbf{Set}$, there is a natural bijection $$\mathrm{Nat}(\mathrm{Hom}_\mathcal{C}(A,-),F)\cong F(A).$$

**Course:** Graduate, Category Theory

**Difficulty:** 6.5

**Proof hint:** Send a natural transformation $\eta$ to $\eta_A(\mathrm{id}_A)\in F(A)$; check naturality forces all components, and verify the inverse takes $x\in F(A)$ to the transformation $f\mapsto F(f)(x)$.

---

82. **Uniform Boundedness Principle**

**Statement:** Let $\{T_\alpha\}$ be bounded linear operators from a Banach space $X$ to a normed space $Y$. If for every $x\in X$, $$\sup_\alpha |T_\alpha x|<\infty,$$ then $$\sup_\alpha |T_\alpha|<\infty.$$

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.0

**Proof hint:** Consider sets where operators are uniformly bounded on a point. Use Baire Category Theorem to upgrade pointwise boundedness to norm boundedness.

---

83. **Open Mapping Theorem (Banach Spaces)**

**Statement:** If $T:X\to Y$ is a surjective bounded linear operator between Banach spaces, then $T$ maps open sets to open sets.

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.0

**Proof hint:** Show the image of the unit ball is dense enough to contain a small ball around $0$, then use scaling and translation.

---

84. **Hahn–Banach Theorem**

**Statement:** Let $X$ be a real or complex normed vector space, $Y\subseteq X$ a subspace, and $\phi:Y\to\mathbb{F}$ a bounded linear functional. Then there exists a bounded linear functional $\tilde\phi:X\to\mathbb{F}$ extending $\phi$ with $\|\tilde\phi\|_{X^*}=\|\phi\|_{Y^*}$. (More generally: if $p:X\to\mathbb R$ is sublinear and $\phi\le p$ on $Y$, then $\phi$ extends to $X$ with $\tilde\phi\le p$.)

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.0

**Proof hint:** Extend one dimension at a time while preserving the norm bound and invoke Zorn’s Lemma for a maximal extension.

---

85. **Stone–Weierstrass Theorem**

**Statement:** If a subalgebra $A\subset C(K)$ on a compact space $K$ contains constants and separates points, then $A$ is dense in $C(K)$.

**Course:** Graduate, Real Analysis

**Difficulty:** 7.0

**Proof hint:** Use the algebra operations to approximate maxima/minima and then build uniform approximations from point-separating functions.

---

86. **Structure Theorem for PID Modules**

**Statement:** Every finitely generated module over a principal ideal domain is a direct sum of a free part and cyclic torsion modules.

**Course:** Graduate, Algebra

**Difficulty:** 7.0

**Proof hint:** Represent the module by generators/relations and diagonalize the relation matrix via Smith normal form.

---

87. **Brouwer Fixed Point Theorem**

**Statement:** Every continuous map $$f:B^n \to B^n$$ from the closed unit ball to itself has a fixed point.

**Course:** Graduate, Topology

**Difficulty:** 7.0

**Proof hint:** Assume no fixed point, then push each point radially to the boundary to build a continuous retraction $B^n \to S^{n-1}$, which is impossible.

---

88. **Radon–Nikodym Theorem**

**Statement:** If $\nu$ is absolutely continuous with respect to $\mu$ ($\nu \ll \mu$), then there exists a measurable function $f$ such that $$\nu(A)=\int_A f d\mu$$ for all measurable sets $A$.

**Course:** Graduate, Measure Theory

**Difficulty:** 7.0

**Proof hint:** Work in $L^1(\mu)$ and construct $f$ using approximation by simple functions to represent $\nu$ as an integral.

---

89. **Martingale Convergence Theorem**

**Statement:** Every $L^1$-bounded martingale $(X_n)$ converges almost surely to an integrable random variable.

**Course:** Graduate, Measure-Theoretic Probability

**Difficulty:** 7.0

**Proof hint:** Use Doob's upcrossing inequality to bound the expected number of upcrossings of any interval $[a,b]$, showing $\liminf X_n=\limsup X_n$ a.s.

---

90. **Asymptotic Normality of the MLE**

**Statement:** Under regularity conditions, the maximum likelihood estimator $\hat\theta_n$ from i.i.d. samples satisfies $$\sqrt{n}(\hat\theta_n-\theta_0)\xrightarrow{d}\mathcal{N}\!\big(0,\,I(\theta_0)^{-1}\big).$$

**Course:** Graduate, Mathematical Statistics

**Difficulty:** 7.0

**Proof hint:** Taylor-expand the score equation around $\theta_0$, apply the central limit theorem to the score and the law of large numbers to the observed information, and combine via Slutsky's theorem.

---

91. **Lax–Milgram Theorem**

**Statement:** Let $H$ be a Hilbert space and $a:H\times H\to\mathbb{R}$ a bounded bilinear form that is coercive ($a(u,u)\ge\alpha\|u\|^2$). Then for every bounded linear $L\in H^*$ there exists a unique $u\in H$ with $a(u,v)=L(v)$ for all $v\in H$.

**Course:** Graduate, Partial Differential Equations

**Difficulty:** 7.0

**Proof hint:** Represent $a(u,\cdot)$ via the Riesz representation theorem as $u\mapsto Au$, show $A$ is bounded and bounded below by coercivity, hence invertible; solve $Au=\ell$ where $L=\langle\ell,\cdot\rangle$.

---

92. **Poincaré–Bendixson Theorem**

**Statement:** A nonempty compact $\omega$-limit set of a $C^1$ planar flow that contains no fixed points is a periodic orbit.

**Course:** Graduate, Dynamical Systems

**Difficulty:** 7.0

**Proof hint:** Use a transversal section through a regular point of the limit set; monotonicity of intersections with the section (Jordan curve theorem) forces the trajectory to close up.

---

93. **Fundamental Theorem of Galois Theory**

**Statement:** For a finite Galois extension $L/K$ with group $G=\mathrm{Gal}(L/K)$, the maps $H\mapsto L^H$ and $F\mapsto\mathrm{Gal}(L/F)$ are mutually inverse, inclusion-reversing bijections between subgroups of $G$ and intermediate fields $K\subseteq F\subseteq L$, and $F/K$ is Galois iff $\mathrm{Gal}(L/F)\trianglelefteq G$.

**Course:** Graduate, Galois Theory

**Difficulty:** 7.0

**Proof hint:** Use Artin's theorem ($[L:L^H]=|H|$) to show the maps are inverse, then verify that conjugation by $G$ identifies normal subgroups with $K$-stable subfields.

---

94. **Fenchel–Moreau Theorem**

**Statement:** A function $f:\mathbb{R}^n\to\mathbb{R}\cup\{+\infty\}$ equals its biconjugate $f^{**}$ if and only if $f$ is proper, convex, and lower semicontinuous.

**Course:** Graduate, Convex Analysis

**Difficulty:** 7.0

**Proof hint:** Use the Hahn–Banach separation theorem to separate the epigraph of $f$ from points below it by affine minorants, identifying $f^{**}$ as the supremum of all such minorants.

---

95. **Schauder Fixed Point Theorem**

**Statement:** A continuous map from a nonempty compact convex subset of a Banach space to itself has a fixed point.

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.5

**Proof hint:** Approximate by finite-dimensional compact convex sets, apply Brouwer’s theorem, then pass to a limit.

---

96. **Tychonoff Theorem**

**Statement:** Any product of compact topological spaces is compact.

**Course:** Graduate, Topology

**Difficulty:** 7.5

**Proof hint:** Use the finite intersection property or ultrafilters coordinatewise, then assemble a point in the full product using Choice.

---

97. **Seifert–van Kampen Theorem**

**Statement:** If a topological space $X = U \cup V$ with $U, V, U \cap V$ path-connected, then $$\pi_1(X) \cong \pi_1(U) *_{\pi_1(U\cap V)} \pi_1(V).$$

**Course:** Graduate, Algebraic Topology

**Difficulty:** 7.5

**Proof hint:** Break loops into pieces lying in $U$ or $V$, then translate concatenation into generators and relations.

---

98. **Itô's Formula**

**Statement:** If $X_t$ is a continuous semimartingale and $f\in C^2$, then $$f(X_t)=f(X_0)+\int_0^t f'(X_s)\,dX_s+\tfrac12\int_0^t f''(X_s)\,d\langle X\rangle_s.$$

**Course:** Graduate, Stochastic Processes

**Difficulty:** 7.5

**Proof hint:** Apply Taylor's theorem on a fine partition, identify the quadratic terms with the quadratic-variation integral, and pass to the limit using the definition of the Itô integral.

---

99. **Hopf–Rinow Theorem**

**Statement:** A connected Riemannian manifold $M$ is geodesically complete if and only if it is complete as a metric space, and in that case any two points are joined by a length-minimizing geodesic.

**Course:** Graduate, Riemannian Geometry

**Difficulty:** 7.5

**Proof hint:** Show the exponential map is defined on all of $T_pM$ using completeness and a continuation argument, then build the minimizing geodesic between two points by a compactness/variational argument.

---

100. **Riesz–Thorin Interpolation Theorem**

**Statement:** If a linear operator $T$ is bounded $L^{p_0}\to L^{q_0}$ with norm $M_0$ and $L^{p_1}\to L^{q_1}$ with norm $M_1$, then for $\theta\in[0,1]$ and $\frac{1}{p}=\frac{1-\theta}{p_0}+\frac{\theta}{p_1}$, $\frac{1}{q}=\frac{1-\theta}{q_0}+\frac{\theta}{q_1}$, $$\|T\|_{L^p\to L^q}\le M_0^{1-\theta}M_1^\theta.$$

**Course:** Graduate, Harmonic Analysis

**Difficulty:** 7.5

**Proof hint:** Apply the Hadamard three-lines lemma to the analytic family $z\mapsto\int (Tf_z)g_z$ in the strip $0\le\mathrm{Re}(z)\le 1$ for suitable $f_z,g_z$.

---

101. **Nullstellensatz (Hilbert’s Nullstellensatz)**

**Statement:** Over an algebraically closed field $k$, maximal ideals of $$k[x_1,\dots,x_n]$$ are exactly ideals of the form $$(x_1-a_1,\dots,x_n-a_n).$$

**Course:** Graduate, Algebraic Geometry

**Difficulty:** 8.0

**Proof hint:** For a maximal ideal $M$, study the field $k[x_1,\dots,x_n]/M$ and show it is an algebraic extension of $k$, hence equals $k$.

---

102. **Gelfand–Naimark Theorem**

**Statement:** Every commutative $C^*$-algebra with identity is isometrically isomorphic to the algebra of continuous functions on its space of maximal ideals.

**Course:** Graduate, Functional Analysis

**Difficulty:** 8.0

**Proof hint:** Map elements to continuous functions via the Gelfand transform (evaluation at characters), then use Stone–Weierstrass to show it is a surjective isometry.

77. **Pythagorean Theorem**

**Statement:** In a right triangle with legs $a,b$ and hypotenuse $c$, $$a^2+b^2=c^2.$$

**Course:** High School, Geometry

**Difficulty:** 1.5

**Proof hint:** Drop the altitude from the right angle to the hypotenuse, obtaining two triangles similar to the original, and equate ratios; or compare the areas in two dissections of a square of side $a+b$.

---

103. **Dirichlet's Unit Theorem**

**Statement:** Let $K$ be a number field of degree $n=r_1+2r_2$ with ring of integers $\mathcal{O}_K$. Then $\mathcal{O}_K^\times\cong\mu(K)\times\mathbb{Z}^{r_1+r_2-1}$, where $\mu(K)$ is the finite group of roots of unity in $K$.

**Course:** Graduate, Algebraic Number Theory

**Difficulty:** 8.0

**Proof hint:** Map units logarithmically into a hyperplane in $\mathbb{R}^{r_1+r_2}$ and show the image is a full-rank lattice using Minkowski's geometry-of-numbers theorem.

---

104. **Prime Number Theorem**

**Statement:** Let $\pi(x)$ count primes $\le x$. Then $$\pi(x)\sim\frac{x}{\log x}\quad\text{as }x\to\infty.$$

**Course:** Graduate, Analytic Number Theory

**Difficulty:** 8.5

**Proof hint:** Express $\psi(x)=\sum_{p^k\le x}\log p$ via a contour integral of $-\zeta'/\zeta$, use the non-vanishing of $\zeta(s)$ on $\mathrm{Re}(s)=1$, and apply a Tauberian theorem to deduce $\psi(x)\sim x$.

---

105. **Gödel's First Incompleteness Theorem**

**Statement:** Any consistent, recursively axiomatizable theory $T$ extending Peano arithmetic admits a sentence $G$ such that neither $G$ nor $\neg G$ is provable in $T$.

**Course:** Graduate, Mathematical Logic

**Difficulty:** 8.5

**Proof hint:** Arithmetize syntax to encode provability; via the diagonal lemma construct a sentence $G$ asserting "$G$ is not provable", and argue both $T\vdash G$ and $T\vdash\neg G$ contradict consistency.
