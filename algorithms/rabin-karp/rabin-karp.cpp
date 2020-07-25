#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int chr2int(char c)
{
  return c - 'a' + 1;
}

long long mod(long long a, int m)
{
  return (m + (a % m)) % m;
}

/**
 * Uses the Rabin-Karp algorithm to find all instances
 * of a substring in a larger string.
 * 
 * Source: https://cp-algorithms.com/string/rabin-karp.html
 */
vector<int> rabin_karp(string const& pattern, string const& corpus)
{
  // define relatively prime numbers that
  // will allow probablistic analysis to work
  const int p  = 31;
  const int m = 1e9 + 9;

  int S = pattern.size();
  int T = corpus.size();

  // initialize the coefficients (which are powers
  // of p) to use on each character
  vector<long long> p_pow(max(S, T));
  p_pow[0] = 1;
  for (int i = 1; i < (int) p_pow.size(); ++i)
    p_pow[i] = mod(p_pow[i - 1] * p, m);
  
  // compute the prefix hashes
  vector<long long> prehashes(T + 1, 0);
  for (int i = 0; i < T; ++i) {
    prehashes[i + 1] = mod(prehashes[i] +
      (chr2int(corpus[i]) * p_pow[i]),
      m);
  }

  // compute the hash of the pattern
  long long patternhash = 0;
  for (int i = 0; i < S; ++i) {
    patternhash = mod(
      patternhash + (chr2int(pattern[i]) * p_pow[i]),
      m);
  }

  // find the occurrences
  vector<int> occurrences;
  for (int i = 0; i + S - 1 < T; ++i) {
    long long cur_h = mod(prehashes[i + S] - prehashes[i], m);

    long long patternhash_shift = mod(patternhash * p_pow[i], m);

    // patternhash * p_pow[i] "moves" the hash
    // as if it was computed starting at index i
    // (instead of the actual index 0)
    if (cur_h == patternhash_shift)
      occurrences.push_back(i);
  }

  return occurrences;
}

int main(int argc, char* argv[]) 
{
  if (argc != 3) {
    cout << "usage: ./rabin-karp <infile> <pattern>" << endl;
    return 1;
  }

  string pattern = string(argv[2]);
  string corpus;

  ifstream input;
  input.open(argv[1]);
  input >> corpus;
  input.close();

  cout << "pattern: " << pattern << endl;
  cout << "corpus: " << corpus << endl;

  vector<int> locs = rabin_karp(pattern, corpus);

  for (auto loc: locs) {
    cout << loc << " ";
  }
  cout << endl;

  return 0;
}