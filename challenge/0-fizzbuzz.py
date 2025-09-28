#!/usr/bin/env python3
"""FizzBuzz: print numbers from 1 to n with Fizz/Buzz/FizzBuzz substitutions."""

import sys


def fizzbuzz(n: int) -> None:
    results = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            results.append("FizzBuzz")
        elif i % 3 == 0:
            results.append("Fizz")
        elif i % 5 == 0:
            results.append("Buzz")
        else:
            results.append(str(i))
    print(" ".join(results))


def main() -> None:
    if len(sys.argv) != 2:
        return
    try:
        n = int(sys.argv[1])
    except ValueError:
        return
    fizzbuzz(n)


if __name__ == "__main__":
    main()

