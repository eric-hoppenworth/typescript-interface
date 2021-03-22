## Set up:
  * yarn install
  * nvm use (or install)
  * yarn start, should see a 1 and 10 rating in console

## Brief
You are making a CLI tool that rates foods based on limited criteria
  * portionSize: number from 1 to 10 of "how much food" this is, where 1 is a nibble and 10 is impossibly large
  * sweetnessIndex: number from 1 to 10 of "how sweet" the dish is. 1 is no sweetness, where 10 is maximum sweet
  * savoryIndex: number from 1 to 10 of "how flavorful" the food is.  1 is bland, 10 has complex flavors (yes, I know sweetness is a flavor, but consider it separately)
  * spicyIndex: number from 1 to 10 of "spice level".  1 is no spice at all, 10 is ghost pepper
  * servingTemp: either "hot" or "cold".

Everyone has different tastes, so we want to experiment with a couple different algorithms.  We will choose the algorithm to use by "injecting" the chosen one using inversify.
We will have each developer write their own rating system, and then pick the best one to move forward with.
The rating system should return a number 1 to 10, where 1 is bad and 10 is good for any dish given.

## What to do
1. write a new implementation in `foodRater.ts`. Do not remove the current implementation, just add an additional export.
2. write a simple failing test in `__tests__/foodRater.test.ts` that should pass under both the current algorithm and your new one.  Keep the assertions generalized
3. write a `container-config-test` file where you inject your new algorithm.
4. update the test to use this test container, rather than importing your class directly
