1. **Euclidean Algorithm**

**Statement:** For integers (a,b) not both zero, repeated division with remainder computes (\gcd(a,b)).

Example:
[
a=bq+r,\quad 0\le r<b
]
and then replace ((a,b)) by ((b,r)), repeating until remainder (0).

**Rough proof structure:**

* Show
  [
  \gcd(a,b)=\gcd(b,r)
  ]
  because common divisors are preserved by (r=a-bq).
* Each remainder strictly decreases and stays nonnegative.
* Therefore process terminates.
* Final nonzero remainder is the greatest common divisor.

--

2. **Binomial Theorem**

**Statement:** For any integer (n\ge 0),

[
(x+y)^n=\sum_{k=0}^{n}\binom{n}{k}x^{,n-k}y^k.
]

**Rough proof structure:**

* Expand ((x+y)(x+y)\cdots(x+y)) with (n) factors.
* To get a term (x^{n-k}y^k), choose (k) of the (n) factors to contribute (y), the rest contribute (x).
* Number of such choices is

[
\binom{n}{k}.
]

(Alternative proof: induction using Pascal identity.)

--

3. **Triangle Inequality**

**Statement:** In any normed space,

[
|x+y|\le |x|+|y|.
]

For real numbers this becomes:

[
|a+b|\le |a|+|b|.
]

**Rough proof structure (real numbers):**

* Square both sides:

[
|a+b|^2=(a+b)^2=a^2+2ab+b^2.
]

* Since

[
2ab\le 2|a||b|,
]

we get

[
|a+b|^2\le (|a|+|b|)^2.
]

* Take square roots.

**Rough proof structure (inner product spaces):**

Use Cauchy–Schwarz on

[
|x+y|^2=|x|^2+2\Re\langle x,y\rangle+|y|^2.
]

--

4. **Infinitude of Primes**

**Statement:** There are infinitely many prime numbers.

**Proof hint:** Assume finitely many primes (p_1,\dots,p_n). Consider

[
N=p_1p_2\cdots p_n+1.
]

Then analyze prime divisors of (N).

--

5. **Bézout’s Identity**

**Statement:** For integers (a,b), there exist integers (x,y) such that

[
ax+by=\gcd(a,b).
]

**Proof hint:** Run the Euclidean Algorithm, then back-substitute each remainder equation upward until the gcd is written in terms of (a) and (b).

--

6. **Cauchy–Schwarz Inequality**

**Statement:** In an inner product space,

[
|\langle x,y\rangle|\le |x||y|.
]

**Proof hint:** Consider the nonnegative quadratic

[
|x-ty|^2\ge 0
]

and use its discriminant.

--

7. **AM-GM Inequality**

**Statement:** For nonnegative real numbers (a_1,\dots,a_n),

[
\frac{a_1+\cdots+a_n}{n}\ge (a_1a_2\cdots a_n)^{1/n}.
]

**Proof hint:** First prove the two-variable case using

[
(a-b)^2\ge 0.
]

Then extend to (n) variables by induction or repeated averaging.

--

8. **Fundamental Theorem of Arithmetic**

**Statement:** Every integer (n>1) can be written as a product of primes, and this factorization is unique up to order.

**Proof hint:** Use induction for existence. For uniqueness, if two prime factorizations exist, use Euclid’s lemma: a prime dividing a product must divide one factor.

--

8. **Fundamental Theorem of Arithmetic**

**Statement:** Every integer (n>1) can be written as a product of primes, and this factorization is unique up to order.

**Proof hint:** Use induction for existence. For uniqueness, if two prime factorizations exist, use Euclid’s lemma: a prime dividing a product must divide one factor.

--
9. **Chinese Remainder Theorem**

**Statement:** If (n_1,\dots,n_k) are pairwise coprime, then a system

[
x\equiv a_i \pmod{n_i}\quad (i=1,\dots,k)
]

has a unique solution modulo (N=n_1\cdots n_k).

**Proof hint:** For each (i), build a number that is (1) mod (n_i) and (0) mod all other (n_j), using Bézout coefficients. Then combine them linearly.

--

10. **Fermat’s Little Theorem**

**Statement:** If (p) is prime and (p\nmid a), then

[
a^{p-1}\equiv 1 \pmod p.
]

**Proof hint:** Multiply all nonzero residue classes mod (p):

[
1,2,\dots,p-1.
]

Then compare with their multiples by (a), which form the same set in a different order.

--

11. **Euler’s Theorem**

**Statement:** If (\gcd(a,n)=1), then

[
a^{\varphi(n)}\equiv 1 \pmod n,
]

where (\varphi(n)) is the number of integers in ({1,\dots,n}) coprime to (n).

**Proof hint:** Look at the invertible residue classes modulo (n). Multiplication by (a) permutes them, just like in Fermat’s Little Theorem.

--

12. **Lagrange’s Theorem (Group Theory)**

**Statement:** If (G) is a finite group and (H\le G) is a subgroup, then

[
|H| \mid |G|,
\qquad
|G|=[G:H]\cdot |H|.
]

**Proof hint:** Partition (G) into left cosets of (H). Show every coset has exactly (|H|) elements.

--

13. **Intermediate Value Theorem**

**Statement:** If (f:[a,b]\to\mathbb R) is continuous and (y) lies between (f(a)) and (f(b)), then there exists (c\in[a,b]) such that

[
f(c)=y.
]

**Proof hint:** Consider all (x) where (f(x)<y), take the supremum of that set, then use continuity at the boundary point.

--

14. **Rank–Nullity Theorem**

**Statement:** For a linear map (T:V\to W) between finite-dimensional vector spaces,

[
\dim(\ker T)+\dim(\operatorname{im}T)=\dim V.
]

**Proof hint:** Take a basis of (\ker T), extend it to a basis of (V), then apply (T) to the added basis vectors.

--

Yes—with caveats.

For a linear map (T:V\to W), there is always a short exact sequence

[
0\to \ker T \to V \to \operatorname{im}T \to 0.
]

Using **Hamel dimensions** (basis cardinalities) and assuming Choice, this gives cardinal arithmetic:

[
\dim V = \dim(\ker T) + \dim(\operatorname{im}T),
]

where (+) is cardinal sum.

But for infinite cardinals (\kappa),

[
\kappa+\kappa=\kappa,
]

so the formula is often much less informative than in finite dimensions.

Example:

* countably infinite-dimensional (V)
* infinite-dimensional kernel
* infinite-dimensional image

can still satisfy

[
\aleph_0=\aleph_0+\aleph_0=\aleph_0.
]

So **true formally**, but weaker and less useful.

15. **Extreme Value Theorem**

**Statement:** If (f:[a,b]\to\mathbb R) is continuous, then (f) attains a maximum and a minimum on ([a,b]).

**Proof hint:** Continuous image of a compact set is compact; compact subsets of (\mathbb R) contain their supremum and infimum.

--

16. **Rolle’s Theorem**

**Statement:** If (f) is continuous on ([a,b]), differentiable on ((a,b)), and

[
f(a)=f(b),
]

then there exists (c\in(a,b)) such that

[
f'(c)=0.
]

**Proof hint:** By Extreme Value Theorem, (f) has max/min. If not constant, one extremum occurs inside ((a,b)); derivative at an interior extremum is zero.

--

17. **Mean Value Theorem**

**Statement:** If (f) is continuous on ([a,b]) and differentiable on ((a,b)), then there exists (c\in(a,b)) such that

[
f'(c)=\frac{f(b)-f(a)}{b-a}.
]

**Proof hint:** Subtract the secant line from (f) so the new function has equal endpoint values, then apply Rolle’s Theorem.

--

18. **First Isomorphism Theorem**

**Statement:** For a homomorphism (\varphi:G\to H),

[
G/\ker\varphi \cong \operatorname{im}\varphi.
]

**Proof hint:** Map each coset (g\ker\varphi) to (\varphi(g)). Then check well-definedness and bijectivity.

--

19. **Gram–Schmidt Process**

**Statement:** Any linearly independent set ((v_1,\dots,v_n)) in an inner product space can be converted into an orthonormal set ((e_1,\dots,e_n)) spanning the same subspace.

**Proof hint:** Build vectors one at a time by subtracting projections onto previously constructed orthonormal vectors, then normalize.

--

20. **Fundamental Theorem of Calculus**

**Statement:** If (f) is continuous and

[
F(x)=\int_a^x f(t),dt,
]

then

[
F'(x)=f(x).
]

Also, if (G'(x)=f(x)), then

[
\int_a^b f(x),dx=G(b)-G(a).
]

**Proof hint:** Use a difference quotient for (F), then continuity of (f). For the second part, apply the Mean Value Theorem to (G).

--

21. **Taylor’s Theorem**

**Statement:** If (f) is sufficiently differentiable near (a), then

[
f(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n+R_n(x),
]

where (R_n(x)) is a remainder term.

**Proof hint:** Subtract the Taylor polynomial from (f), then repeatedly apply Rolle’s Theorem / Mean Value Theorem to control the remainder.

--

Yes. That is an important correction.

The usual statement of Fundamental Theorem of Calculus hides substantial prior work:

Before proving FTC, one must first show that for continuous (f):

[
\int_a^b f(x),dx
]

is well-defined.

That typically means proving Riemann sums converge uniquely as mesh size (\to 0), independent of partition/sample choices.

This uses:

* uniform continuity of continuous functions on ([a,b])
* upper/lower sums or Cauchy criterion
* boundedness on compact intervals
* refinement estimates

So the short textbook FTC proof only starts **after** a hard existence theorem for the integral is already established.

Your point matches your earlier theme: many “easy theorem proofs” depend on hidden infrastructure. By full foundational proof burden, FTC is significantly harder than its usual classroom presentation suggests.

22. **Bolzano–Weierstrass Theorem**

**Statement:** Every bounded sequence in (\mathbb R^n) has a convergent subsequence.

**Proof hint:** Repeatedly bisect a containing interval/box and choose a nested sub-box containing infinitely many terms; then pick one term from each stage.

--

23. **Gershgorin Circle Theorem**

**Statement:** Every eigenvalue of a complex matrix (A=(a_{ij})) lies in at least one disk

[
|z-a_{ii}|\le \sum_{j\ne i}|a_{ij}|.
]

**Proof hint:** Take an eigenvector, choose a coordinate of maximal magnitude, and inspect the corresponding row of (Av=\lambda v).

--

24. **Cauchy’s Theorem (Group Theory)**

**Statement:** If a prime (p) divides the order of a finite group (G), then (G) contains an element of order (p).

**Proof hint:** Let a cyclic group of order (p) act on suitable (p)-tuples / subsets of (G), then count fixed points modulo (p).

--

25. **Parseval’s Identity**

**Statement:** If ({e_n}) is an orthonormal basis of a Hilbert space, then for any vector (x),

[
|x|^2=\sum_n |\langle x,e_n\rangle|^2.
]

(For Fourier series: total energy equals sum of squared coefficients.)

**Proof hint:** Use Pythagoras on finite partial sums of the orthogonal expansion, then pass to the limit using completeness.

--

26. **Heine–Borel Theorem**

**Statement:** A subset of (\mathbb R^n) is compact iff it is closed and bounded.

**Proof hint:** Use Bolzano–Weierstrass / sequential compactness for one direction, and use open-cover arguments plus completeness for the other.

--

27. **Banach Fixed Point Theorem**

**Statement:** If ((X,d)) is a complete metric space and (T:X\to X) satisfies

[
d(Tx,Ty)\le c,d(x,y), \quad 0<c<1,
]

then (T) has a unique fixed point.

**Proof hint:** Iterate (x_{n+1}=T(x_n)); distances shrink geometrically, so the sequence is Cauchy and converges to the fixed point.

--

28. **Liouville’s Theorem**

**Statement:** Every bounded entire function is constant.

**Proof hint:** Use Cauchy’s integral formula (or Cauchy estimates) to show all derivatives are zero.

--

29. **Jordan–Hölder Theorem**

**Statement:** Any two composition series of a finite group have the same length, and the same simple factor groups up to order and isomorphism.

**Proof hint:** Refine two normal series to a common refinement, then compare successive quotient factors.

--

30. **Fundamental Theorem of Symmetric Polynomials**

**Statement:** Every symmetric polynomial in (x_1,\dots,x_n) can be written as a polynomial in the elementary symmetric polynomials.

Example:
[
x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2.
]

**Proof hint:** Order monomials, eliminate the leading symmetric monomial using suitable products of elementary symmetric polynomials, then iterate.

--

31. **Spectral Theorem (finite-dimensional)**

**Statement:** A complex matrix (A) is normal iff there exists a unitary matrix (U) such that

[
U^*AU=D
]

with (D) diagonal.
(Real symmetric matrices are orthogonally diagonalizable.)

**Proof hint:** First use Schur triangularization. Then show a normal upper-triangular matrix must already be diagonal.

--

32. **Schur Triangularization Theorem**

**Statement:** Every complex square matrix (A) is unitarily similar to an upper triangular matrix:

[
U^*AU=T
]

for some unitary (U) and upper triangular (T).

**Proof hint:** Use existence of one eigenvector, extend it to an orthonormal basis, obtain a block upper-triangular form, then induct on dimension.

--

33. **Singular Value Decomposition (SVD)**

**Statement:** For any matrix (A\in \mathbb C^{m\times n}), there exist unitary matrices (U,V) such that

[
A=U\Sigma V^*
]

where (\Sigma) is diagonal with nonnegative real entries.

**Proof hint:** Diagonalize (A^*A) using the Spectral Theorem; square roots of its eigenvalues become singular values.

--

34. **Cauchy Integral Formula**

**Statement:** If (f) is holomorphic on and inside a simple closed curve (\gamma), and (a) lies inside, then

[
f(a)=\frac{1}{2\pi i}\oint_\gamma \frac{f(z)}{z-a},dz.
]

**Proof hint:** Split

[
\frac{f(z)}{z-a}
================

\frac{f(z)-f(a)}{z-a}+\frac{f(a)}{z-a},
]

then apply Cauchy’s theorem to the first term.

--

35. **Maximum Modulus Principle**

**Statement:** A nonconstant holomorphic function cannot attain a local maximum of (|f(z)|) at an interior point of its domain.

**Proof hint:** Use Cauchy Integral Formula / mean-value property: if (|f|) is maximal at the center, then boundary values force (f) to be constant nearby.

--

36. **Schwarz Lemma**

**Statement:** If (f:\mathbb D\to\mathbb D) is holomorphic and (f(0)=0), then

[
|f(z)|\le |z|,\qquad |f'(0)|\le 1,
]

with equality cases giving rotations.

**Proof hint:** Consider

[
g(z)=\frac{f(z)}{z}
]

(with removable singularity at (0)), then apply the Maximum Modulus Principle.

--

(\mathbb D) denotes the **unit disk** in the complex plane:

[
\mathbb D={z\in\mathbb C : |z|<1}.
]

So it is all complex numbers whose distance from (0) is less than (1).

The boundary is the unit circle:

[
\partial \mathbb D={z\in\mathbb C: |z|=1}.
]

In Schwarz Lemma, the function maps the unit disk to itself.

Marking **Schwarz Lemma: partially known / reconstructible**.

37. **Open Mapping Theorem (Complex Analysis)**

**Statement:** A nonconstant holomorphic function maps open sets to open sets.

**Proof hint:** Near (z_0), write

[
f(z)-f(z_0)=(z-z_0)^k g(z)
]

with (g(z_0)\neq 0). Then small circles around (z_0) map around (f(z_0)), forcing nearby values to be attained.

--

38. **Cauchy Integral Theorem**

**Statement:** If (f) is holomorphic on a simply connected domain (D), then for every closed piecewise smooth curve (\gamma\subset D),

[
\oint_\gamma f(z),dz=0.
]

**Proof hint:** First prove it for triangles (Goursat’s argument), then decompose regions into triangles / use homotopy.

--

Yes. Good catch—I repeated a theorem already covered conceptually earlier via Cauchy Integral Formula dependencies. That was duplication.

I should skip duplicates and continue with the next new theorem.

38 (corrected). **Residue Theorem**

**Statement:** If (f) is meromorphic inside a closed contour (\gamma), then

[
\oint_\gamma f(z),dz = 2\pi i \sum \operatorname{Res}(f;a_k),
]

where the sum is over enclosed poles.

**Proof hint:** Remove small circles around each pole, apply Cauchy Integral Theorem to the remaining region, and use Laurent coefficients on the small circles.

--

39. **Argument Principle**

**Statement:** If (f) is meromorphic and has no zeros or poles on a closed contour (\gamma), then

[
\frac{1}{2\pi i}\oint_\gamma \frac{f'(z)}{f(z)},dz = N-P,
]

where (N) and (P) are the numbers of zeros and poles inside (\gamma), counted with multiplicity.

**Proof hint:** Near a zero/pole, write (f(z)=(z-a)^m g(z)), so (f'/f) has a simple pole with residue (m) (or (-m)).

--

40. **Rouché’s Theorem**

**Statement:** If (f) and (g) are holomorphic inside/on a closed contour (\gamma), and

[
|g(z)|<|f(z)| \quad \text{on } \gamma,
]

then (f) and (f+g) have the same number of zeros inside (\gamma), counting multiplicity.

**Proof hint:** Interpolate via (f+t g) for (t\in[0,1]); boundary nonvanishing keeps the winding number / zero count unchanged.

--

41. **Structure Theorem for Finite Abelian Groups**

**Statement:** Every finite abelian group is isomorphic to a direct product of cyclic groups of prime-power order.

Example:

[
\mathbb Z/12\mathbb Z \cong \mathbb Z/4\mathbb Z \times \mathbb Z/3\mathbb Z.
]

**Proof hint:** Split the group into its (p)-primary parts, then repeatedly choose elements of maximal order and induct.

--

42. **Gauss’s Lemma (Polynomial Version)**

**Statement:** The product of two primitive polynomials in (\mathbb Z[x]) is primitive.
(Equivalently: irreducibility over (\mathbb Z[x]) and (\mathbb Q[x]) are closely linked.)

**Proof hint:** Assume a prime divides every coefficient of the product. Reduce coefficients modulo that prime and derive a contradiction from degree behavior.

--

43. **Eisenstein Criterion**

**Statement:** If a polynomial

[
f(x)=a_nx^n+\cdots+a_0 \in \mathbb Z[x]
]

has a prime (p) such that:

* (p\nmid a_n)
* (p\mid a_0,\dots,a_{n-1})
* (p^2\nmid a_0)

then (f(x)) is irreducible over (\mathbb Q).

**Proof hint:** Assume a factorization into primitive integer polynomials and compare divisibility of constant terms and higher coefficients modulo (p).

--

44. **Monotone Convergence Theorem**

**Statement:** If (0 \le f_n \uparrow f) pointwise (measurable functions), then

[
\int f_n \to \int f.
]

**Proof hint:** Approximate (f) from below by simple functions; eventually those approximations are bounded by some (f_n).

--

45. **Fatou’s Lemma**

**Statement:** For nonnegative measurable functions (f_n),

[
\int \liminf_{n\to\infty} f_n \le \liminf_{n\to\infty} \int f_n.
]

**Proof hint:** Define

[
g_n=\inf_{k\ge n} f_k.
]

Then (g_n\uparrow \liminf f_n), so apply Monotone Convergence.

--

46. **Riesz Representation Theorem (Hilbert Space Version)**

**Statement:** Every bounded linear functional (\phi) on a Hilbert space (H) can be written uniquely as

[
\phi(x)=\langle x,y\rangle
]

for some unique (y\in H).

**Proof hint:** Look at (\ker \phi), take a vector orthogonal to it, and decompose every vector into kernel part plus one orthogonal direction.

--

47. **Dominated Convergence Theorem**

**Statement:** If (f_n \to f) almost everywhere and

[
|f_n| \le g
]

for some integrable (g), then

[
\int f_n \to \int f.
]

**Proof hint:** Use Fatou’s Lemma on (g \pm f_n), or apply Fatou to (2g-|f_n-f|).

--

48. **Fredholm Alternative (finite-dimensional form)**

**Statement:** For a matrix (A), either

[
Ax=b
]

has a solution for every (b), or the homogeneous adjoint system

[
A^*y=0
]

has a nonzero solution obstructing solvability.

Equivalently,

[
\operatorname{im}(A)=\ker(A^*)^\perp.
]

**Proof hint:** Use orthogonal complements and dimension arguments: vectors orthogonal to all columns are exactly (\ker(A^*)).

--

49. **Arzelà–Ascoli Theorem**

**Statement:** A uniformly bounded equicontinuous family of functions on a compact set has a uniformly convergent subsequence.

**Proof hint:** Choose a countable dense set, extract a diagonal subsequence converging there, then use equicontinuity to upgrade pointwise convergence to uniform convergence.

--

Yes. Good correction.

The precise solvability obstruction is not merely existence of nonzero (y\in \ker(A^*)), but existence of (y) with

[
A^*y=0
\quad\text{and}\quad
\langle y,b\rangle \ne 0.
]

Because if (Ax=b), then for any (y\in\ker(A^*)),

[
\langle y,b\rangle=\langle y,Ax\rangle=\langle A^*y,x\rangle=0.
]

So if some (y\in\ker(A^*)) satisfies (\langle y,b\rangle\neq0), no solution exists.

Equivalent formulation:

[
Ax=b \text{ solvable } \iff b\perp \ker(A^*).
]

And since

[
\operatorname{im}(A)=\ker(A^*)^\perp,
]

that is the cleanest statement.

Your refinement is correct: my earlier wording was incomplete.

50. **Cayley–Hamilton Theorem**

**Statement:** Every square matrix satisfies its own characteristic polynomial:

[
p_A(A)=0.
]

**Proof hint:** Use the adjugate identity

[
(\lambda I-A)\operatorname{adj}(\lambda I-A)=p_A(\lambda)I
]

and interpret it as a polynomial identity before substituting (\lambda=A).

--

51. **Fubini’s Theorem**

**Statement:** If (f) is integrable on a product space (X\times Y), then

[
\int_{X\times Y} f(x,y),d(x,y)
==============================

\int_X\left(\int_Y f(x,y),dy\right)dx
]

(and similarly with the order reversed).

**Proof hint:** First prove it for indicator functions of rectangles, then simple functions, then extend by approximation to general integrable functions.

--
52. **Law of Large Numbers**

**Statement:** For i.i.d. random variables (X_1,X_2,\dots) with mean (\mu),

[
\frac{X_1+\cdots+X_n}{n}\to \mu
]

(in probability or almost surely, depending version).

**Proof hint:** Control variance of averages (weak form), or combine truncation + Borel–Cantelli for almost sure convergence.

--

53. **Uniform Boundedness Principle**

**Statement:** Let ({T_\alpha}) be bounded linear operators from a Banach space (X) to a normed space (Y). If for every (x\in X),

[
\sup_\alpha |T_\alpha x|<\infty,
]

then

[
\sup_\alpha |T_\alpha|<\infty.
]

**Proof hint:** Consider sets where operators are uniformly bounded on a point. Use Baire Category Theorem to upgrade pointwise boundedness to norm boundedness.

--

54. **Closed Graph Theorem**

**Statement:** If (T:X\to Y) is a linear operator between Banach spaces and its graph

[
{(x,Tx):x\in X}
]

is closed in (X\times Y), then (T) is bounded (continuous).

**Proof hint:** View the graph itself as a Banach space, then use projection maps together with the Open Mapping Theorem / inverse mapping idea.

--

55. **Open Mapping Theorem (Banach Spaces)**

**Statement:** If (T:X\to Y) is a surjective bounded linear operator between Banach spaces, then (T) maps open sets to open sets.

**Proof hint:** Show the image of the unit ball is dense enough to contain a small ball around (0), then use scaling and translation.

--

56. **Hilbert Basis Theorem**

**Statement:** If (R) is a Noetherian ring, then the polynomial ring

[
R[x]
]

is also Noetherian.

(So every ideal in (R[x]) is finitely generated.)

**Proof hint:** For an ideal in (R[x]), look at leading coefficients of polynomials of each degree. Use finite generation in (R), then induct on degree.

--

57. **Krull Intersection Theorem**

**Statement:** If (R) is Noetherian, (I\subseteq J(R)) (Jacobson radical), and (M) is a finitely generated (R)-module, then

[
\bigcap_{n\ge1} I^n M = 0
]

(in the standard local form).

**Proof hint:** Let

[
N=\bigcap I^nM.
]

Show (N=IN), then apply Nakayama’s Lemma.

--

58. **Central Limit Theorem**

**Statement:** For i.i.d. random variables with mean (\mu) and variance (\sigma^2),

[
\frac{(X_1+\cdots+X_n)-n\mu}{\sigma\sqrt n}
\Rightarrow N(0,1),
]

where (\Rightarrow) means convergence in distribution.

**Proof hint:** Compute characteristic functions of normalized sums, use Taylor expansion near (0), then pass to the limit.

--

59. **Perron–Frobenius Theorem**

**Statement:** A positive square matrix has a largest positive real eigenvalue with a positive eigenvector.

**Proof hint:** Map the positive simplex to itself using the matrix, then use compactness / fixed-point ideas; stronger versions handle irreducible nonnegative matrices.

--

60. **Jordan Canonical Form**

**Statement:** Every complex square matrix is similar to a block diagonal matrix made of Jordan blocks.

**Proof hint:** Decompose the space into generalized eigenspaces, then for each eigenvalue analyze chains of vectors under ((A-\lambda I)).

--

61. **Inverse Function Theorem**

**Statement:** If (f:\mathbb R^n\to\mathbb R^n) is continuously differentiable and the derivative (Df(a)) is invertible, then (f) is locally invertible near (a), with differentiable inverse.

**Proof hint:** Near (a), (f) is well-approximated by its invertible linearization; use a contraction-map argument or Newton iteration locally.

--

62. **Implicit Function Theorem**

**Statement:** If (F(x,y)=0) and the derivative with respect to (y) is invertible at a point, then locally one can solve uniquely for

[
y=g(x).
]

So the solution set is locally the graph of a function.

**Proof hint:** Apply the Inverse Function Theorem to the map

[
(x,y)\mapsto (x,F(x,y)).
]

--

63. **Hahn–Banach Theorem**

**Statement:** A bounded linear functional defined on a subspace can be extended to the whole vector space without increasing its norm (real normed-space form).

**Proof hint:** Extend one dimension at a time while preserving bounds, then use Zorn’s Lemma to obtain a maximal extension.

--

64. **Stone–Weierstrass Theorem**

**Statement:** If a subalgebra (A\subset C(K)) on a compact space (K) contains constants and separates points, then (A) is dense in (C(K)) (under sup norm).

**Proof hint:** Use the algebra operations to approximate maxima/minima and then build global approximations from point-separating local ones.

--

65. **Structure Theorem for PID Modules**

**Statement:** Every finitely generated module over a principal ideal domain is a direct sum of a free part and cyclic torsion modules.

(For integers, this gives classification of finitely generated abelian groups.)

**Proof hint:** Represent the module by generators/relations, then diagonalize the relation matrix using row/column operations (Smith normal form).

--

66. **Wedderburn’s Little Theorem**

**Statement:** Every finite division ring is commutative.
So every finite division ring is actually a finite field.

**Proof hint:** Assume a smallest counterexample. Study conjugacy classes and proper subfields, then derive a counting contradiction.

--

67. **Hilbert–Schmidt Theorem**

**Statement:** A compact self-adjoint operator on a Hilbert space has an orthonormal basis of eigenvectors, and the operator is determined by its eigenvalue expansion.

**Proof hint:** Use the compact self-adjoint spectral theorem, then expand vectors in the orthonormal eigenbasis.

--

68. **Compactness Theorem (First-Order Logic)**

**Statement:** A set of first-order sentences has a model iff every finite subset has a model.

**Proof hint:** If the whole set were inconsistent, some finite proof would use only finitely many axioms. Use completeness of first-order logic.

--

69. **Schauder Fixed Point Theorem**

**Statement:** A continuous map from a nonempty compact convex subset of a Banach space to itself has a fixed point.

**Proof hint:** Approximate the compact set by finite-dimensional pieces, apply Brouwer Fixed Point Theorem there, then pass to a limit.

--

70. **Nielsen–Schreier Theorem**

**Statement:** Every subgroup of a free group is itself free.

**Proof hint:** Choose coset representatives and explicitly construct generators (Schreier generators), or use covering spaces of graphs.

--

71. **Noether Normalization Lemma**

**Statement:** Every finitely generated algebra over a field is integral over a polynomial ring in finitely many algebraically independent variables.

**Proof hint:** Change generators cleverly so one satisfies a monic polynomial relation, then induct on the number of generators.

--

72. **Nullstellensatz (Hilbert’s Nullstellensatz)**

**Statement:** Over an algebraically closed field (k), maximal ideals of

[
k[x_1,\dots,x_n]
]

are exactly ideals of the form

[
(x_1-a_1,\dots,x_n-a_n).
]

(Equivalent geometric form: polynomial equations and radical ideals correspond.)

**Proof hint:** For a maximal ideal (M), study the field (k[x_1,\dots,x_n]/M); show it must be an algebraic extension of (k), hence equals (k).

--

73. **Borel–Cantelli Lemmas**

**Statement:** For events (A_1,A_2,\dots):

1. If
   [
   \sum_{n=1}^\infty P(A_n)<\infty,
   ]
   then with probability (1), only finitely many (A_n) occur.

2. If the (A_n) are independent and
   [
   \sum_{n=1}^\infty P(A_n)=\infty,
   ]
   then with probability (1), infinitely many occur.

**Proof hint:** Use subadditivity for the first part; for the second, use complements and independence.

--

74. **Brouwer Fixed Point Theorem**

**Statement:** Every continuous map

[
f:B^n \to B^n
]

from the closed unit ball to itself has a fixed point.

**Proof hint:** Assume no fixed point. Then each point can be pushed radially to the boundary, producing a continuous retraction (B^n \to S^{n-1}), which is impossible.

--
75. **Jordan Curve Theorem**

**Statement:** Every simple closed curve in the plane divides the plane into exactly two connected regions: an inside and an outside, with the curve as common boundary.

**Proof hint:** Define winding number for points off the curve, show it is locally constant, equals (0) outside, nonzero inside, and exclude extra components.

--
76. **Tychonoff Theorem**

**Statement:** Any product of compact topological spaces is compact (with the product topology).

**Proof hint:** Use the finite intersection property / ultrafilters / nets coordinatewise, then assemble a point in the full product using Choice.

--

77. **Gauss–Bonnet Theorem**

**Statement:** For a compact oriented surface (M),

[
\int_M K,dA = 2\pi \chi(M),
]

where (K) is Gaussian curvature and (\chi(M)) is the Euler characteristic.

**Proof hint:** Triangulate the surface, relate angle defect in triangles to curvature, then sum globally.

--

78. **Seifert–van Kampen Theorem**

**Statement:** If a space (X) is the union of suitable connected open sets (U) and (V), then the fundamental group of (X) is obtained by combining (\pi_1(U)) and (\pi_1(V)) along (\pi_1(U\cap V)).

**Proof hint:** Break loops in (X) into pieces lying in (U) or (V), then translate concatenation relations into a group pushout / amalgamated product.

--

79. **Primary Decomposition Theorem**

**Statement:** In a Noetherian ring, every ideal can be written as an intersection of finitely many primary ideals.

**Proof hint:** Use Noetherian induction / maximal counterexample arguments, splitting ideals using zero divisors and associated primes.

--

80. **Sard’s Theorem**

**Statement:** For a sufficiently smooth map (f:\mathbb R^n \to \mathbb R^m), the set of critical values (images of points where (Df) is not full rank) has measure zero.

**Proof hint:** Near critical points, the map flattens directions; cover domain by small cubes and estimate that images of those cubes have very small total volume.

--

81. **de Rham Theorem**

**Statement:** For a smooth manifold (M), de Rham cohomology is naturally isomorphic to singular cohomology with real coefficients:

[
H^k_{dR}(M)\cong H^k(M;\mathbb R).
]

**Proof hint:** Integrate differential forms over simplices to build a cochain map, then prove it is an isomorphism using local exactness + Mayer–Vietoris patching.

--

82. **Mercer’s Theorem**

**Statement:** A continuous symmetric positive kernel (K(x,y)) on a compact domain has an eigenfunction expansion

[
K(x,y)=\sum_{n=1}^\infty \lambda_n \phi_n(x)\phi_n(y),
]

with (\lambda_n\ge 0), converging appropriately.

**Proof hint:** Convert the kernel into a compact self-adjoint integral operator, apply the spectral theorem, then use continuity to upgrade convergence.

--

83. **Löwenheim–Skolem Theorem**

**Statement:** If a first-order theory has an infinite model, then it has models of other cardinalities (in particular, a countable model in the downward form).

**Proof hint:** Add Skolem functions and take the closure of a countable set under those functions (Skolem hull), producing a countable elementary submodel.

--

84. **Dirichlet’s Theorem on Arithmetic Progressions**

**Statement:** If (\gcd(a,d)=1), then there are infinitely many primes congruent to

[
a \pmod d.
]

**Proof hint:** Introduce Dirichlet characters and (L)-series; show (L(1,\chi)\neq 0), forcing infinitely many such primes.

--
No. Dirichlet’s Theorem on Arithmetic Progressions is **not** easy by proof standards.

The hint I gave was only the roadmap, not the difficulty.

To actually prove it, one typically needs:

* Dirichlet characters and orthogonality relations
* Euler products for (L(s,\chi))
* Analytic continuation / convergence control near (s=1)
* Crucially:
  [
  L(1,\chi)\neq 0
  ]
  for nonprincipal characters
* Then convert logarithmic divergence into infinitely many primes in the progression.

That is usually an **advanced undergraduate / graduate analytic number theory** proof.

A better difficulty estimate:

* Statement: **2/10**
* Proof sketch comprehension: **5/10**
* Full proof execution: **8.5/10**

So your reaction is correct: the theorem statement is simple, proof is deep.
85. **Prime Number Theorem**

**Statement:** If (\pi(x)) is the number of primes (\le x), then

[
\pi(x)\sim \frac{x}{\log x}.
]

**Proof hint:** Study the Riemann zeta function (\zeta(s)), relate its logarithmic derivative to primes, prove suitable zero-free behavior near (\Re(s)=1), then use Tauberian/contour arguments.

--
86. **Spectral Theorem (compact self-adjoint operators)**

**Statement:** A compact self-adjoint operator on a Hilbert space has an orthonormal basis of eigenvectors, with real eigenvalues accumulating only at (0).

**Proof hint:** Maximize the Rayleigh quotient to obtain one eigenvector, restrict to its orthogonal complement, then iterate using compactness.

--
87. **Spectral Theorem (general normal operators)**

**Statement:** Every bounded normal operator (T) on a complex Hilbert space admits a spectral resolution

[
T=\int_{\sigma(T)} z, dE(z),
]

where (E) is a projection-valued measure.

**Proof hint:** Build continuous functional calculus for normal operators, then extend from polynomials/continuous functions to measurable sets, producing spectral projections.

--
88. **Stone’s Theorem on One-Parameter Unitary Groups**

**Statement:** Every strongly continuous unitary group ((U_t)_{t\in\mathbb R}) on a Hilbert space has the form

[
U_t=e^{itA}
]

for a unique self-adjoint operator (A).

**Proof hint:** Use the spectral theorem to exponentiate a self-adjoint operator; conversely recover the generator from the strong derivative / resolvent.

--
89. **Gödel’s First Incompleteness Theorem**

**Statement:** Any consistent effectively axiomatized theory strong enough to encode arithmetic contains a true arithmetic statement that it cannot prove (equivalently, it is incomplete).

**Proof hint:** Encode syntax as numbers (Gödel numbering), then diagonalize to construct a sentence that asserts its own unprovability.

--
90. **Gödel’s Second Incompleteness Theorem**

**Statement:** Any consistent, effectively axiomatized theory strong enough for arithmetic cannot prove its own consistency.

**Proof hint:** Formalize the First Incompleteness Theorem inside the theory itself; if the theory proved its own consistency, it would prove its Gödel sentence, contradiction.

--
91. **Kolmogorov Extension Theorem**

**Statement:** A consistent family of finite-dimensional probability distributions defines a probability measure on the infinite product space.

**Proof hint:** Define probabilities on cylinder sets, verify finite additivity/consistency, then extend using Carathéodory’s extension theorem.

--
92. **Artin–Wedderburn Theorem**

**Statement:** Every semisimple Artinian ring is isomorphic to a finite product of matrix rings over division rings.

**Proof hint:** Decompose the regular module into simple modules; endomorphism rings of these pieces produce matrix blocks.

--
93. **Hodge Decomposition Theorem**

**Statement:** On a compact Riemannian manifold, every differential form decomposes uniquely as

[
\omega = d\alpha + \delta\beta + h,
]

where (h) is harmonic.

**Proof hint:** Study the Laplacian

[
\Delta = d\delta + \delta d
]

as a self-adjoint elliptic operator, then use orthogonal decomposition of Hilbert spaces.

--
94. **Riemann Mapping Theorem**

**Statement:** Every simply connected proper open subset of (\mathbb C) is conformally equivalent to the unit disk.

**Proof hint:** Construct a family of injective holomorphic maps into the disk, maximize derivative at a base point, then use normal families (Montel theorem) to extract a limit.

--
95. **Brouwer Invariance of Domain**

**Statement:** If (U \subset \mathbb{R}^n) is open and (f:U \to \mathbb{R}^n) is continuous and injective, then (f(U)) is open and (f) is a homeomorphism onto its image.

**Proof hint:** Reduce to showing a non-degenerate continuous injective map cannot “collapse dimension”; use homology / degree theory or invariance of domain via Brouwer fixed-point ideas.

--
96. **Radon–Nikodym Theorem**

**Statement:** If (\nu) is absolutely continuous with respect to (\mu) ((\nu \ll \mu)), then there exists a measurable function (f) such that

[
\nu(A)=\int_A f,d\mu
]

for all measurable sets (A).

**Proof hint:** Work in (L^1(\mu)); construct (f) as a maximizer using approximation by simple functions or via Hilbert space methods (in (L^2) case).

--
97. **Riemann–Roch Theorem**

**Statement:** For a divisor (D) on a compact Riemann surface,

[
\ell(D) - \ell(K-D) = \deg(D) + 1 - g,
]

where (\ell(D)) is the dimension of meromorphic functions with poles bounded by (D), (K) is the canonical divisor, and (g) is the genus.

**Proof hint:** Compare spaces of meromorphic functions and differentials; use residue pairing and count dimensions via cohomological arguments.

--
98. **Spectral Theorem (general normal operators)**

**Statement:** A bounded normal operator (T) on a complex Hilbert space admits a projection-valued spectral measure (E) such that

[
T=\int_{\sigma(T)} z, dE(z).
]

**Proof hint:** Build continuous functional calculus for (T), extend from polynomials to continuous functions on spectrum, then obtain spectral projections via characteristic functions.

--
99. **Seifert–van Kampen Theorem**

**Statement:** If a topological space (X = U \cup V) with (U, V, U \cap V) path-connected, then

[
\pi_1(X) \cong \pi_1(U) *_{\pi_1(U\cap V)} \pi_1(V).
]

**Proof hint:** Break loops into pieces lying in (U) or (V), translate concatenation of loops into group generators and relations.

--
100. **Stokes’ Theorem**

**Statement:** For a smooth oriented manifold (M) with boundary,

[
\int_M d\omega = \int_{\partial M} \omega,
]

where (\omega) is a differential form.

**Proof hint:** First prove in (\mathbb{R}^n) using repeated 1D Fundamental Theorem of Calculus, then extend via partitions of unity and coordinate charts.

--
