1. **Infinitude of Primes**

**Statement:** There are infinitely many prime numbers.

**Course:** High School, Number Theory

**Difficulty:** 2.0

**Proof hint:** Assume finitely many primes (p_1,\dots,p_n) and consider [N=p_1p_2\cdots p_n+1], whose prime divisors are not among the list.

---

2. **Binomial Theorem**

**Statement:** For any integer (n\ge 0),

[(x+y)^n = \sum_{k=0}^{n}\binom{n}{k}x^{n-k}y^k.]

**Course:** High School, Algebra II

**Difficulty:** 2.5

**Proof hint:** Expand ((x+y)^n) and count the ways to choose (k) of the (n) factors to supply (y) (or use induction with Pascal’s identity).

---

3. **Fundamental Theorem of Arithmetic**

**Statement:** Every integer (n>1) can be written as a product of primes, and this factorization is unique up to order.

**Course:** High School, Number Theory

**Difficulty:** 3.0

**Proof hint:** Use induction for existence and Euclid’s lemma to show two prime factorizations must match up to order.

---

4. **AM-GM Inequality**

**Statement:** For nonnegative real numbers (a_1,\dots,a_n), [\frac{a_1+\cdots+a_n}{n}\ge (a_1a_2\cdots a_n)^{1/n}.]

**Course:** High School, Precalculus

**Difficulty:** 3.5

**Proof hint:** Prove the two-variable case via [(a-b)^2\ge 0] and extend to (n) variables by induction or repeated averaging.

---

5. **Euclidean Algorithm**

**Statement:** For integers (a,b) not both zero, repeated division with remainder computes (\gcd(a,b)).

**Course:** Undergraduate, Number Theory

**Difficulty:** 2.5

**Proof hint:** Use that (\gcd(a,b)=\gcd(b,r)) with (r=a-bq) and the remainders strictly decrease until the last nonzero remainder.

---

6. **Triangle Inequality**

**Statement:** In any normed space,

[|x+y|\le |x|+|y|.]

For real numbers this becomes:

[|a+b|\le |a|+|b|.]

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 3.0

**Proof hint:** Square both sides (or use Cauchy–Schwarz in inner product spaces) to show [|x+y|^2\le (|x|+|y|)^2] and take square roots.

---

7. **Rolle’s Theorem**

**Statement:** If (f) is continuous on ([a,b]), differentiable on ((a,b)), and [f(a)=f(b),] then there exists (c\in(a,b)) such that [f'(c)=0.]

**Course:** Undergraduate, Calculus I

**Difficulty:** 3.0

**Proof hint:** By Extreme Value Theorem, (f) has max/min, and if not constant, one extremum occurs inside ((a,b)) where the derivative is zero.

---

8. **Bézout’s Identity**

**Statement:** For integers (a,b), there exist integers (x,y) such that [ax+by=\gcd(a,b).]

**Course:** Undergraduate, Number Theory

**Difficulty:** 3.5

**Proof hint:** Run the Euclidean Algorithm and back-substitute the remainder equations to express the gcd as a linear combination of (a) and (b).

---

9. **Chinese Remainder Theorem**

**Statement:** If (n_1,\dots,n_k) are pairwise coprime, then a system [x\equiv a_i \pmod{n_i}\quad (i=1,\dots,k)] has a unique solution modulo (N=n_1\cdots n_k).

**Course:** Undergraduate, Number Theory

**Difficulty:** 3.5

**Proof hint:** Use Bézout coefficients to build numbers that are (1) mod one modulus and (0) mod the others, then combine them linearly to solve the system.

---

10. **Fermat’s Little Theorem**

**Statement:** If (p) is prime and (p\nmid a), then [a^{p-1}\equiv 1 \pmod p.]

**Course:** Undergraduate, Number Theory

**Difficulty:** 3.5

**Proof hint:** Multiply all nonzero residue classes mod (p): [1,2,\dots,p-1.] Then compare with their multiples by (a), which form the same set in a different order.

---

11. **Lagrange’s Theorem (Group Theory)**

**Statement:** If (G) is a finite group and (H\le G) is a subgroup, then [|H| \mid |G|,\qquad |G|=[G:H]\cdot |H|.]

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 3.5

**Proof hint:** Partition (G) into left cosets of (H) and show every coset has exactly (|H|) elements.

---

12. **Intermediate Value Theorem**

**Statement:** If (f:[a,b]\to\mathbb R) is continuous and (y) lies between (f(a)) and (f(b)), then there exists (c\in[a,b]) such that [f(c)=y.]

**Course:** Undergraduate, Calculus I

**Difficulty:** 3.5

**Proof hint:** Consider all (x) where (f(x)<y), take the supremum of that set, then use continuity at the boundary point.

---

13. **Rank–Nullity Theorem**

**Statement:** For a linear map (T:V\to W) between finite-dimensional vector spaces, [\dim(\ker T)+\dim(\operatorname{im}T)=\dim V.]

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 3.5

**Proof hint:** Take a basis of (\ker T), extend it to a basis of (V), then apply (T) to the added basis vectors.

---

14. **Mean Value Theorem**

**Statement:** If (f) is continuous on ([a,b]) and differentiable on ((a,b)), then there exists (c\in(a,b)) such that [f'(c)=\frac{f(b)-f(a)}{b-a}.]

**Course:** Undergraduate, Calculus I

**Difficulty:** 3.5

**Proof hint:** Subtract the secant line from (f) so the new function has equal endpoint values, then apply Rolle’s Theorem.

---

15. **Gram–Schmidt Process**

**Statement:** Any linearly independent set ((v_1,\dots,v_n)) in an inner product space can be converted into an orthonormal set ((e_1,\dots,e_n)) spanning the same subspace.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 3.5

**Proof hint:** Build vectors one at a time by subtracting projections onto previously constructed orthonormal vectors, then normalize.

---

16. **Cauchy–Schwarz Inequality**

**Statement:** In an inner product space, [|\langle x,y\rangle|\le |x||y|.]

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 4.0

**Proof hint:** Consider the nonnegative quadratic [|x-ty|^2\ge 0] in (t) and require its discriminant to be nonpositive.

---

17. **Euler’s Theorem**

**Statement:** If (\gcd(a,n)=1), then [a^{\varphi(n)}\equiv 1 \pmod n,] where (\varphi(n)) is the number of integers in ({1,\dots,n}) coprime to (n).

**Course:** Undergraduate, Number Theory

**Difficulty:** 4.0

**Proof hint:** Look at the invertible residue classes modulo (n). Multiplication by (a) permutes them, just like in Fermat’s Little Theorem.

---

18. **Extreme Value Theorem**

**Statement:** If (f:[a,b]\to\mathbb R) is continuous, then (f) attains a maximum and a minimum on ([a,b]).

**Course:** Undergraduate, Calculus I

**Difficulty:** 4.0

**Proof hint:** Continuous image of a compact set is compact; compact subsets of (\mathbb R) contain their supremum and infimum.

---

19. **First Isomorphism Theorem**

**Statement:** For a homomorphism (\varphi:G\to H), [G/\ker\varphi \cong \operatorname{im}\varphi.]

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 4.0

**Proof hint:** Map each coset (g\ker\varphi) to (\varphi(g)) and check well-definedness and bijectivity.

---

20. **Fundamental Theorem of Calculus**

**Statement:** If (f) is continuous and [F(x)=\int_a^x f(t)dt,] then [F'(x)=f(x).] Also, if (G'(x)=f(x)), then [\int_a^b f(x)dx=G(b)-G(a).]

**Course:** Undergraduate, Calculus II

**Difficulty:** 4.0

**Proof hint:** Use a difference quotient for (F) and continuity of (f), then apply the Mean Value Theorem to (G).

---

21. **Gershgorin Circle Theorem**

**Statement:** Every eigenvalue of a complex matrix (A=(a_{ij})) lies in at least one disk [|z-a_{ii}|\le \sum_{j\ne i}|a_{ij}|.]

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 4.0

**Proof hint:** Take an eigenvector, choose a coordinate of maximal magnitude, and inspect the corresponding row of (Av=\lambda v).

---

22. **Liouville’s Theorem**

**Statement:** Every bounded entire function is constant.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 4.0

**Proof hint:** Use Cauchy’s integral formula or estimates to show all derivatives are zero.

---

23. **Bolzano–Weierstrass Theorem**

**Statement:** Every bounded sequence in (\mathbb R^n) has a convergent subsequence.

**Course:** Undergraduate, Real Analysis

**Difficulty:** 4.5

**Proof hint:** Repeatedly bisect a containing box to form a nested sequence with infinitely many terms, then pick one term from each stage.

---

24. **Heine–Borel Theorem**

**Statement:** A subset of (\mathbb R^n) is compact iff it is closed and bounded.

**Course:** Undergraduate, Real Analysis

**Difficulty:** 4.5

**Proof hint:** Use Bolzano–Weierstrass/sequential compactness for one direction and open-cover arguments for the other.

---

25. **Schwarz Lemma**

**Statement:** If (f:\mathbb D\to\mathbb D) is holomorphic and (f(0)=0), then [|f(z)|\le |z|,\qquad |f'(0)|\le 1,] with equality cases giving rotations.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 4.5

**Proof hint:** Consider [g(z)=\frac{f(z)}{z}] (with removable singularity at (0)), then apply the Maximum Modulus Principle.

---

26. **Eisenstein Criterion**

**Statement:** If a polynomial [f(x)=a_nx^n+\cdots+a_0 \in \mathbb Z[x]] has a prime (p) such that:
* (p\nmid a_n)
* (p\mid a_0,\dots,a_{n-1})
* (p^2\nmid a_0)
then (f(x)) is irreducible over (\mathbb Q).

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 4.5

**Proof hint:** Assume a factorization into primitive integer polynomials and compare divisibility of constant terms and higher coefficients modulo (p).

---

27. **Fredholm Alternative (finite-dimensional form)**

**Statement:** For a matrix (A), [Ax=b] is solvable iff (b\perp \ker(A^*)).

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 4.5

**Proof hint:** Use orthogonal complements and dimension arguments: vectors orthogonal to all columns are exactly (\ker(A^*)).

---

28. **Taylor’s Theorem**

**Statement:** If (f) is (n) times differentiable at (a), then [f(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n+h_n(x)(x-a)^n,] where (h_n(x)\to 0) as (x\to a).

**Course:** Undergraduate, Calculus II

**Difficulty:** 5.0

**Proof hint:** Subtract the Taylor polynomial from (f) and repeatedly apply Rolle’s/Mean Value Theorem to control the remainder.

---

29. **Cauchy’s Theorem (Group Theory)**

**Statement:** If a prime (p) divides the order of a finite group (G), then (G) contains an element of order (p).

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 5.0

**Proof hint:** Let a cyclic group of order (p) act on suitable (p)-tuples or subsets of (G), then count fixed points modulo (p).

---

30. **Parseval’s Identity**

**Statement:** If ({e_n}) is an orthonormal basis of a Hilbert space, then for any vector (x), [|x|^2=\sum_n |\langle x,e_n\rangle|^2.]

**Course:** Undergraduate, Functional Analysis

**Difficulty:** 5.0

**Proof hint:** Use Pythagoras on finite partial sums of the orthogonal expansion, then pass to the limit using completeness.

---

31. **Singular Value Decomposition (SVD)**

**Statement:** For any matrix (A\in \mathbb C^{m\times n}), there exist unitary matrices (U,V) such that [A=U\Sigma V^*] where (\Sigma) is diagonal with nonnegative real entries.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 5.0

**Proof hint:** Diagonalize (A^*A) using the Spectral Theorem, and take square roots of its eigenvalues as singular values.

---

32. **Cauchy Integral Formula**

**Statement:** If (f) is holomorphic on and inside a simple closed curve (\gamma), and (a) lies inside, then [f(a)=\frac{1}{2\pi i}\oint_\gamma \frac{f(z)}{z-a}dz.]

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.0

**Proof hint:** Split [\frac{f(z)}{z-a} = \frac{f(z)-f(a)}{z-a}+\frac{f(a)}{z-a},} then apply Cauchy’s theorem to the first term.

---

33. **Maximum Modulus Principle**

**Statement:** A nonconstant holomorphic function cannot attain a local maximum of (|f(z)|) at an interior point of its domain.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.0

**Proof hint:** Use the Cauchy Integral Formula or mean-value property: if (|f|) is maximal at the center, then boundary values force (f) to be constant nearby.

---

34. **Gauss’s Lemma (Polynomial Version)**

**Statement:** The product of two primitive polynomials in (\mathbb Z[x]) is primitive.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 5.0

**Proof hint:** Assume a prime divides every coefficient of the product. Reduce coefficients modulo that prime and derive a contradiction from degree behavior.

---

35. **Borel–Cantelli Lemmas**

**Statement:** For events (A_1,A_2,\dots):
1. If [\sum_{n=1}^\infty P(A_n)<\infty,] then with probability (1), only finitely many (A_n) occur.
2. If the (A_n) are independent and [\sum_{n=1}^\infty P(A_n)=\infty,] then with probability (1), infinitely many occur.

**Course:** Undergraduate, Probability

**Difficulty:** 5.0

**Proof hint:** Use subadditivity for the first part, and for the second apply complements together with independence.

---

36. **Spectral Theorem (Finite-Dimensional)**

**Statement:** A complex matrix (A) is normal iff there exists a unitary matrix (U) such that [U^*AU=D] with (D) diagonal.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 5.5

**Proof hint:** Use Schur triangularization and then show a normal upper-triangular matrix must already be diagonal.

---

37. **Open Mapping Theorem (Complex Analysis)**

**Statement:** A nonconstant holomorphic function maps open sets to open sets.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.5

**Proof hint:** Near (z_0), write [f(z)-f(z_0)=(z-z_0)^k g(z)] with (g(z_0)\neq 0), so small circles around (z_0) map around (f(z_0)) and force nearby values to be attained.

---

38. **Residue Theorem**

**Statement:** If (f) is meromorphic inside a closed contour (\gamma), then [\oint_\gamma f(z)dz = 2\pi i \sum \operatorname{Res}(f;a_k),] where the sum is over enclosed poles.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.5

**Proof hint:** Remove small circles around each pole, apply the Cauchy Integral Theorem to the remaining region, and use Laurent coefficients on the small circles.

---

39. **Argument Principle**

**Statement:** If (f) is meromorphic and has no zeros or poles on a closed contour (\gamma), then [\frac{1}{2\pi i}\oint_\gamma \frac{f'(z)}{f(z)}dz = N-P,] where (N) and (P) are the numbers of zeros and poles inside (\gamma), counted with multiplicity.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.5

**Proof hint:** Near a zero/pole, write (f(z)=(z-a)^m g(z)), so (f'/f) has a simple pole with residue (m) (or (-m)).

---

40. **Rouché’s Theorem**

**Statement:** If (f) and (g) are holomorphic inside/on a closed contour (\gamma), and [|g(z)|<|f(z)| \quad \text{on } \gamma,] then (f) and (f+g) have the same number of zeros inside (\gamma), counting multiplicity.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 5.5

**Proof hint:** Interpolate via (f+t g) for (t\in[0,1]); boundary nonvanishing keeps the winding number / zero count unchanged.

---

41. **Cayley–Hamilton Theorem**

**Statement:** Every square matrix satisfies its own characteristic polynomial: [p_A(A)=0.]

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 5.5

**Proof hint:** Use the adjugate identity [(\lambda I-A)\operatorname{adj}(\lambda I-A)=p_A(\lambda)I] and interpret it as a polynomial identity before substituting (\lambda=A).

---

42. **Implicit Function Theorem**

**Statement:** If (F(x,y)=0) and the derivative with respect to (y) is invertible at a point, then locally one can solve uniquely for [y=g(x).]

**Course:** Undergraduate, Multivariable Calculus

**Difficulty:** 5.5

**Proof hint:** Apply the Inverse Function Theorem to the map [(x,y)\mapsto (x,F(x,y))] to solve for [y=g(x)] locally.

---

43. **Jordan–Hölder Theorem**

**Statement:** Any two composition series of a finite group have the same length, and the same simple factor groups up to order and isomorphism.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 6.0

**Proof hint:** Refine two normal series to a common refinement, then compare successive quotient factors.

---

44. **Fundamental Theorem of Symmetric Polynomials**

**Statement:** Every symmetric polynomial in (x_1,\dots,x_n) can be written as a polynomial in the elementary symmetric polynomials.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 6.0

**Proof hint:** Order monomials and eliminate the leading symmetric monomial using suitable products of elementary symmetric polynomials, then iterate.

---

45. **Structure Theorem for Finite Abelian Groups**

**Statement:** Every finite abelian group is isomorphic to a direct product of cyclic groups of prime-power order.

**Course:** Undergraduate, Abstract Algebra

**Difficulty:** 6.0

**Proof hint:** Split the group into its (p)-primary parts, then repeatedly choose elements of maximal order and induct.

---

46. **Inverse Function Theorem**

**Statement:** If (f:\mathbb R^n\to\mathbb R^n) is continuously differentiable and the derivative (Df(a)) is invertible, then (f) is locally invertible near (a), with differentiable inverse.

**Course:** Undergraduate, Multivariable Calculus

**Difficulty:** 6.0

**Proof hint:** Use the invertible linearization at (a) and apply a contraction-mapping or Newton iteration argument to obtain a local inverse.

---

47. **Arzelà–Ascoli Theorem**

**Statement:** A uniformly bounded equicontinuous family of functions on a compact set has a uniformly convergent subsequence.

**Course:** Undergraduate, Real Analysis

**Difficulty:** 6.5

**Proof hint:** Choose a countable dense set, extract a diagonal subsequence converging there, then use equicontinuity to upgrade pointwise convergence to uniform convergence.

---

48. **Law of Large Numbers**

**Statement:** For i.i.d. random variables (X_1,X_2,\dots) with mean (\mu), [\frac{X_1+\cdots+X_n}{n}\to \mu] (in probability or almost surely).

**Course:** Undergraduate, Probability

**Difficulty:** 6.5

**Proof hint:** Control variance of averages (weak form), or combine truncation + Borel–Cantelli for almost sure convergence.

---

49. **Stokes’ Theorem**

**Statement:** For a smooth oriented manifold (M) with boundary, [\int_M d\omega = \int_{\partial M} \omega,] where (\omega) is a differential form.

**Course:** Undergraduate, Multivariable Calculus

**Difficulty:** 6.5

**Proof hint:** Prove the formula in (\mathbb{R}^n) by iterated one-dimensional FTC and extend via partitions of unity and coordinate charts.

---

50. **Central Limit Theorem**

**Statement:** For i.i.d. random variables with mean (\mu) and variance (\sigma^2), [\frac{(X_1+\cdots+X_n)-n\mu}{\sigma\sqrt n} \Rightarrow N(0,1).]

**Course:** Undergraduate, Probability

**Difficulty:** 7.0

**Proof hint:** Compute characteristic functions of normalized sums, use Taylor expansion near (0), then pass to the limit.

---

51. **Jordan Canonical Form**

**Statement:** Every complex square matrix is similar to a block diagonal matrix made of Jordan blocks.

**Course:** Undergraduate, Linear Algebra

**Difficulty:** 7.0

**Proof hint:** Decompose the space into generalized eigenspaces and build Jordan chains for each eigenvalue using the nilpotent action of ((A-\lambda I)).

---

52. **Riemann Mapping Theorem**

**Statement:** Every simply connected proper open subset of (\mathbb C) is conformally equivalent to the unit disk.

**Course:** Undergraduate, Complex Analysis

**Difficulty:** 7.5

**Proof hint:** Construct a family of injective holomorphic maps into the disk, maximize the derivative at a base point, and use normal families (Montel theorem) to extract a limit.

---

53. **Jordan Curve Theorem**

**Statement:** Every simple closed curve in the plane divides the plane into exactly two connected regions: an inside and an outside.

**Course:** Undergraduate, Topology

**Difficulty:** 8.0

**Proof hint:** Define the winding number for points off the curve, show it is locally constant with value (0) outside and nonzero inside, and exclude extra components.

---

54. **Banach Fixed Point Theorem**

**Statement:** If ((X,d)) is a complete metric space and (T:X\to X) satisfies [d(Tx,Ty)\le c d(x,y), \quad 0<c<1,] then (T) has a unique fixed point.

**Course:** Graduate, Functional Analysis

**Difficulty:** 4.5

**Proof hint:** Iterate (x_{n+1}=T(x_n)) so distances shrink geometrically, making a Cauchy sequence that converges to the fixed point.

---

55. **Schur Triangularization Theorem**

**Statement:** Every complex square matrix (A) is unitarily similar to an upper triangular matrix: [U^*AU=T] for some unitary (U) and upper triangular (T).

**Course:** Graduate, Linear Algebra

**Difficulty:** 5.0

**Proof hint:** Use existence of one eigenvector, extend it to an orthonormal basis, obtain a block upper-triangular form, then induct on dimension.

---

56. **Fatou’s Lemma**

**Statement:** For nonnegative measurable functions (f_n), [\int \liminf_{n\to\infty} f_n \le \liminf_{n\to\infty} \int f_n.]

**Course:** Graduate, Real Analysis

**Difficulty:** 5.5

**Proof hint:** Define [g_n=\inf_{k\ge n} f_k.] Then (g_n\uparrow \liminf f_n), so apply Monotone Convergence.

---

57. **Riesz Representation Theorem (Hilbert Space Version)**

**Statement:** Every bounded linear functional (\phi) on a Hilbert space (H) can be written uniquely as [\phi(x)=\langle x,y\rangle] for some unique (y\in H).

**Course:** Graduate, Functional Analysis

**Difficulty:** 5.5

**Proof hint:** Look at (\ker \phi), take a vector orthogonal to it, and decompose every vector into kernel part plus one orthogonal direction.

---

58. **Hilbert Basis Theorem**

**Statement:** If (R) is a Noetherian ring, then the polynomial ring [R[x]] is also Noetherian.

**Course:** Graduate, Commutative Algebra

**Difficulty:** 5.5

**Proof hint:** For an ideal in (R[x]), look at leading coefficients of polynomials of each degree. Use finite generation in (R), then induct on degree.

---

59. **Monotone Convergence Theorem**

**Statement:** If (0 \le f_n \uparrow f) pointwise (measurable functions), then [\int f_n \to \int f.]

**Course:** Graduate, Real Analysis

**Difficulty:** 6.0

**Proof hint:** Approximate (f) from below by simple functions; eventually those approximations are bounded by some (f_n).

---

60. **Dominated Convergence Theorem**

**Statement:** If (f_n \to f) almost everywhere and [|f_n| \le g] for some integrable (g), then [\int f_n \to \int f.]

**Course:** Graduate, Real Analysis

**Difficulty:** 6.0

**Proof hint:** Use Fatou’s Lemma on (g \pm f_n), or apply Fatou to (2g-|f_n-f|).

---

61. **Fubini’s Theorem**

**Statement:** If (f) is integrable on a product space (X\times Y), then [\int_{X\times Y} f(x,y)d(x,y) = \int_X\left(\int_Y f(x,y)dy\right)dx] (and similarly with the order reversed).

**Course:** Graduate, Real Analysis

**Difficulty:** 6.5

**Proof hint:** First prove it for indicator functions of rectangles, then simple functions, then extend by approximation to general integrable functions.

---

62. **Closed Graph Theorem**

**Statement:** If (T:X\to Y) is a linear operator between Banach spaces and its graph {(x,Tx):x\in X} is closed in (X\times Y), then (T) is bounded.

**Course:** Graduate, Functional Analysis

**Difficulty:** 6.5

**Proof hint:** View the graph itself as a Banach space, then use projection maps together with the Open Mapping Theorem.

---

63. **Perron–Frobenius Theorem**

**Statement:** A positive square matrix has a largest positive real eigenvalue with a positive eigenvector.

**Course:** Graduate, Linear Algebra

**Difficulty:** 6.5

**Proof hint:** Map the positive simplex to itself using the matrix, then use compactness / fixed-point ideas; stronger versions handle irreducible nonnegative matrices.

---

64. **Hilbert–Schmidt Theorem**

**Statement:** A compact self-adjoint operator on a Hilbert space has an orthonormal basis of eigenvectors.

**Course:** Graduate, Functional Analysis

**Difficulty:** 6.5

**Proof hint:** Apply the compact self-adjoint spectral theorem to obtain an orthonormal eigenbasis.

---

65. **Compactness Theorem (First-Order Logic)**

**Statement:** A set of first-order sentences has a model iff every finite subset has a model.

**Course:** Graduate, Logic

**Difficulty:** 6.5

**Proof hint:** Use completeness: any inconsistency yields a finite proof, so finite satisfiability implies a model.

---

66. **Löwenheim–Skolem Theorem**

**Statement:** If a first-order theory has an infinite model, then it has models of other cardinalities (in particular, a countable model in the downward form).

**Course:** Graduate, Logic

**Difficulty:** 6.5

**Proof hint:** Add Skolem functions and take the closure of a countable set under those functions (Skolem hull), producing a countable elementary submodel.

---

67. **Spectral Theorem (Compact Self-Adjoint Operators)**

**Statement:** A compact self-adjoint operator on a Hilbert space has an orthonormal basis of eigenvectors, with real eigenvalues accumulating only at (0).

**Course:** Graduate, Functional Analysis

**Difficulty:** 6.5

**Proof hint:** Maximize the Rayleigh quotient to obtain one eigenvector, restrict to its orthogonal complement, then iterate using compactness.

---

68. **Uniform Boundedness Principle**

**Statement:** Let ({T_\alpha}) be bounded linear operators from a Banach space (X) to a normed space (Y). If for every (x\in X), [\sup_\alpha |T_\alpha x|<\infty,] then [\sup_\alpha |T_\alpha|<\infty.]

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.0

**Proof hint:** Consider sets where operators are uniformly bounded on a point. Use Baire Category Theorem to upgrade pointwise boundedness to norm boundedness.

---

69. **Open Mapping Theorem (Banach Spaces)**

**Statement:** If (T:X\to Y) is a surjective bounded linear operator between Banach spaces, then (T) maps open sets to open sets.

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.0

**Proof hint:** Show the image of the unit ball is dense enough to contain a small ball around (0), then use scaling and translation.

---

70. **Krull Intersection Theorem**

**Statement:** If (R) is Noetherian, (I\subseteq J(R)), and (M) is a finitely generated (R)-module, then [\bigcap_{n\ge1} I^n M = 0.]

**Course:** Graduate, Commutative Algebra

**Difficulty:** 7.0

**Proof hint:** Let [N=\bigcap I^nM.] Show (N=IN), then apply Nakayama’s Lemma.

---

71. **Hahn–Banach Theorem**

**Statement:** A bounded linear functional defined on a subspace can be extended to the whole vector space without increasing its norm.

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.0

**Proof hint:** Extend one dimension at a time while preserving the norm bound and invoke Zorn’s Lemma for a maximal extension.

---

72. **Stone–Weierstrass Theorem**

**Statement:** If a subalgebra (A\subset C(K)) on a compact space (K) contains constants and separates points, then (A) is dense in (C(K)).

**Course:** Graduate, Real Analysis

**Difficulty:** 7.0

**Proof hint:** Use the algebra operations to approximate maxima/minima and then build uniform approximations from point-separating functions.

---

73. **Structure Theorem for PID Modules**

**Statement:** Every finitely generated module over a principal ideal domain is a direct sum of a free part and cyclic torsion modules.

**Course:** Graduate, Algebra

**Difficulty:** 7.0

**Proof hint:** Represent the module by generators/relations and diagonalize the relation matrix via Smith normal form.

---

74. **Wedderburn’s Little Theorem**

**Statement:** Every finite division ring is commutative.

**Course:** Graduate, Algebra

**Difficulty:** 7.0

**Proof hint:** Assume a minimal counterexample and use conjugacy class counting with proper subfields to reach a contradiction.

---

75. **Nielsen–Schreier Theorem**

**Statement:** Every subgroup of a free group is itself free.

**Course:** Graduate, Algebra

**Difficulty:** 7.0

**Proof hint:** Choose coset representatives and explicitly construct generators (Schreier generators), or use covering spaces of graphs.

---

76. **Brouwer Fixed Point Theorem**

**Statement:** Every continuous map [f:B^n \to B^n] from the closed unit ball to itself has a fixed point.

**Course:** Graduate, Topology

**Difficulty:** 7.0

**Proof hint:** Assume no fixed point, then push each point radially to the boundary to build a continuous retraction (B^n \to S^{n-1}), which is impossible.

---

77. **Mercer’s Theorem**

**Statement:** A continuous symmetric positive kernel (K(x,y)) on a compact domain has an eigenfunction expansion [K(x,y)=\sum_{n=1}^\infty \lambda_n \phi_n(x)\phi_n(y).]

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.0

**Proof hint:** Convert the kernel into a compact self-adjoint integral operator, apply the spectral theorem, then use continuity to upgrade convergence.

---

78. **Radon–Nikodym Theorem**

**Statement:** If (\nu) is absolutely continuous with respect to (\mu) ((\nu \ll \mu)), then there exists a measurable function (f) such that [\nu(A)=\int_A f d\mu] for all measurable sets (A).

**Course:** Graduate, Measure Theory

**Difficulty:** 7.0

**Proof hint:** Work in (L^1(\mu)) and construct (f) using approximation by simple functions to represent (\nu) as an integral.

---

79. **Whitehead Theorem**

**Statement:** A map (f: X \to Y) between connected CW-complexes is a homotopy equivalence if it induces an isomorphism on all homotopy groups (\pi_n).

**Course:** Graduate, Algebraic Topology

**Difficulty:** 7.0

**Proof hint:** Attach cells to (f) to force homology isomorphisms, then use lifting properties to conclude (f) is a homotopy equivalence.

---

80. **Schauder Fixed Point Theorem**

**Statement:** A continuous map from a nonempty compact convex subset of a Banach space to itself has a fixed point.

**Course:** Graduate, Functional Analysis

**Difficulty:** 7.5

**Proof hint:** Approximate by finite-dimensional compact convex sets, apply Brouwer’s theorem, then pass to a limit.

---

81. **Noether Normalization Lemma**

**Statement:** Every finitely generated algebra over a field is integral over a polynomial ring in finitely many algebraically independent variables.

**Course:** Graduate, Commutative Algebra

**Difficulty:** 7.5

**Proof hint:** Change generators so one satisfies a monic polynomial relation, then induct on the number of generators.

---

82. **Tychonoff Theorem**

**Statement:** Any product of compact topological spaces is compact.

**Course:** Graduate, Topology

**Difficulty:** 7.5

**Proof hint:** Use the finite intersection property or ultrafilters coordinatewise, then assemble a point in the full product using Choice.

---

83. **Gauss–Bonnet Theorem**

**Statement:** For a compact oriented surface (M), [\int_M K dA = 2\pi \chi(M),] where (K) is Gaussian curvature and (\chi(M)) is the Euler characteristic.

**Course:** Graduate, Differential Geometry

**Difficulty:** 7.5

**Proof hint:** Triangulate the surface, relate the angle defect in each triangle to curvature, and then sum globally.

---

84. **Seifert–van Kampen Theorem**

**Statement:** If a topological space (X = U \cup V) with (U, V, U \cap V) path-connected, then [\pi_1(X) \cong \pi_1(U) *_{\pi_1(U\cap V)} \pi_1(V).]

**Course:** Graduate, Algebraic Topology

**Difficulty:** 7.5

**Proof hint:** Break loops into pieces lying in (U) or (V), then translate concatenation into generators and relations.

---

85. **Primary Decomposition Theorem**

**Statement:** In a Noetherian ring, every ideal can be written as an intersection of finitely many primary ideals.

**Course:** Graduate, Commutative Algebra

**Difficulty:** 7.5

**Proof hint:** Use Noetherian induction with a maximal counterexample, splitting ideals using zero divisors and associated primes.

---

86. **Sard’s Theorem**

**Statement:** For a sufficiently smooth map (f:\mathbb R^n \to \mathbb R^m), the set of critical values has measure zero.

**Course:** Graduate, Differential Topology

**Difficulty:** 7.5

**Proof hint:** Near critical points, the map flattens directions; cover the domain by small cubes and estimate that their images have very small total volume.

---

87. **Kolmogorov Extension Theorem**

**Statement:** A consistent family of finite-dimensional probability distributions defines a probability measure on the infinite product space.

**Course:** Graduate, Probability Theory

**Difficulty:** 7.5

**Proof hint:** Define probabilities on cylinder sets, verify finite additivity and consistency, then extend via Carathéodory’s extension theorem.

---

88. **Artin–Wedderburn Theorem**

**Statement:** Every semisimple Artinian ring is isomorphic to a finite product of matrix rings over division rings.

**Course:** Graduate, Abstract Algebra

**Difficulty:** 7.5

**Proof hint:** Decompose the regular module into simple modules so their endomorphism rings produce matrix blocks and assemble the product.

---

89. **Nullstellensatz (Hilbert’s Nullstellensatz)**

**Statement:** Over an algebraically closed field (k), maximal ideals of [k[x_1,\dots,x_n]] are exactly ideals of the form [(x_1-a_1,\dots,x_n-a_n).]

**Course:** Graduate, Algebraic Geometry

**Difficulty:** 8.0

**Proof hint:** For a maximal ideal (M), study the field (k[x_1,\dots,x_n]/M) and show it is an algebraic extension of (k), hence equals (k).

---

90. **de Rham Theorem**

**Statement:** For a smooth manifold (M), de Rham cohomology is naturally isomorphic to singular cohomology with real coefficients: [H^k_{dR}(M)\cong H^k(M;\mathbb R).]

**Course:** Graduate, Differential Geometry

**Difficulty:** 8.0

**Proof hint:** Integrate differential forms over simplices to build a cochain map, then prove it is an isomorphism using local exactness and Mayer–Vietoris patching.

---

91. **Gelfand–Naimark Theorem**

**Statement:** Every commutative (C^*)-algebra with identity is isometrically isomorphic to the algebra of continuous functions on its space of maximal ideals.

**Course:** Graduate, Functional Analysis

**Difficulty:** 8.0

**Proof hint:** Map elements to continuous functions via the Gelfand transform (evaluation at characters), then use Stone–Weierstrass to show it is a surjective isometry.

---

92. **Stone’s Theorem on One-Parameter Unitary Groups**

**Statement:** Every strongly continuous unitary group ((U_t)_{t\in\mathbb R}) on a Hilbert space has the form [U_t=e^{itA}] for a unique self-adjoint operator (A).

**Course:** Graduate, Functional Analysis

**Difficulty:** 8.0

**Proof hint:** Use the spectral theorem to exponentiate a self-adjoint operator, and recover the generator from the strong derivative or resolvent.

---

93. **Gödel’s First Incompleteness Theorem**

**Statement:** Any consistent effectively axiomatized theory strong enough to encode arithmetic contains a true arithmetic statement that it cannot prove.

**Course:** Graduate, Logic

**Difficulty:** 8.0

**Proof hint:** Encode syntax as numbers (Gödel numbering), then diagonalize to construct a sentence that asserts its own unprovability.

---

94. **Brouwer Invariance of Domain**

**Statement:** If (U \subset \mathbb{R}^n) is open and (f:U \to \mathbb{R}^n) is continuous and injective, then (f(U)) is open and (f) is a homeomorphism onto its image.

**Course:** Graduate, Topology

**Difficulty:** 8.0

**Proof hint:** Show a continuous injective map cannot collapse local degree, using homology or degree theory to deduce openness and homeomorphism onto its image.

---

95. **Spectral Theorem (General Normal Operators)**

**Statement:** Every bounded normal operator (T) on a complex Hilbert space admits a spectral resolution [T=\int_{\sigma(T)} z dE(z),] where (E) is a projection-valued measure.

**Course:** Graduate, Functional Analysis

**Difficulty:** 8.0

**Proof hint:** Build the continuous functional calculus for normal operators and extend it to measurable sets to produce spectral projections.

---

96. **Prime Number Theorem**

**Statement:** If (\pi(x)) is the number of primes (\le x), then [\pi(x)\sim \frac{x}{\log x}.]

**Course:** Graduate, Analytic Number Theory

**Difficulty:** 8.5

**Proof hint:** Study the Riemann zeta function (\zeta(s)), relate its logarithmic derivative to primes, prove suitable zero-free behavior near (\Re(s)=1), then use Tauberian or contour arguments.

---

97. **Gödel’s Second Incompleteness Theorem**

**Statement:** Any consistent, effectively axiomatized theory strong enough for arithmetic cannot prove its own consistency.

**Course:** Graduate, Logic

**Difficulty:** 8.5

**Proof hint:** Formalize the First Incompleteness Theorem inside the theory itself; if the theory proved its own consistency, it would prove its Gödel sentence, contradiction.

---

98. **Hodge Decomposition Theorem**

**Statement:** On a compact Riemannian manifold, every differential form decomposes uniquely as [\omega = d\alpha + \delta\beta + h,] where (h) is harmonic.

**Course:** Graduate, Differential Geometry

**Difficulty:** 8.5

**Proof hint:** Study the Laplacian [\Delta = d\delta + \delta d] as a self-adjoint elliptic operator and use Hilbert space orthogonal decomposition to split forms into exact, coexact, and harmonic parts.

---

99. **Riemann–Roch Theorem**

**Statement:** For a divisor (D) on a compact Riemann surface, [\ell(D) - \ell(K-D) = \deg(D) + 1 - g,] where (\ell(D)) is the dimension of meromorphic functions with poles bounded by (D), (K) is the canonical divisor, and (g) is the genus.

**Course:** Graduate, Algebraic Geometry

**Difficulty:** 8.5

**Proof hint:** Compare spaces of meromorphic functions and differentials via residue pairing and compute dimensions with cohomological arguments.

---

100. **Prime Number Theorem for Arithmetic Progressions**

**Statement:** For any coprime integers (a) and (d), the number of primes (p \le x) with (p \equiv a \pmod d) is asymptotically (\frac{1}{\varphi(d)} \frac{x}{\log x}).

**Course:** Graduate, Analytic Number Theory

**Difficulty:** 9.0

**Proof hint:** Use Dirichlet characters and (L)-series, prove (L(1,\chi)\neq 0) for nonprincipal characters, then translate logarithmic sums into the asymptotic prime count.
