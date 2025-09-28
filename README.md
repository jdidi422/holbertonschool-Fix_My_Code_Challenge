# Fix My Code Challenge

This repository contains solutions for the **Fix My Code Challenge**.  
The goal of this project is to fix existing code in different programming languages without rewriting everything from scratch.

---

## Repository Structure

holbertonschool-Fix_My_Code_Challenge/
├── README.md
└── challenge/
├── 0-fizzbuzz.py
├── 1-print_square.js
├── 2-sort.rb
├── 3-user.py
└── 4-delete_dnodeint/

yaml
Copier le code

---

## Tasks

### 0. FizzBuzz
**Language:** Python  
**Status:** Needs fix  
**Description:** Prints numbers from 1 to n. Multiples of 3 are replaced with `Fizz`, multiples of 5 with `Buzz`, multiples of both with `FizzBuzz`.  

**Example:**
```bash
$ ./0-fizzbuzz.py 15
1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
1. Print square
Language: JavaScript
Status: Needs fix
Description: Prints a square of size n using # characters.

Example:

bash
Copier le code
$ ./1-print_square.js 4
####
####
####
####
2. Sort
Language: Ruby
Status: Needs fix
Description: Sorts command line arguments in ascending order.

Example:

bash
Copier le code
$ ruby 2-sort.rb 12 41 2 C 9 -9 31 fun -1 32
-9 -1 2 9 12 31 32 41 C fun
3. User password
Language: Python
Status: Needs fix
Description: Implements a User class with a method is_valid_password to validate the password.

4. Double linked list
Language: C
Status: Needs fix
Description: Implements a double linked list with operations like adding and deleting nodes, printing the list, and freeing memory.

Usage
Make Python and JavaScript scripts executable if needed:

bash
Copier le code
chmod +x challenge/0-fizzbuzz.py
chmod +x challenge/1-print_square.js
Run each task according to its language:

bash
Copier le code
# Python
./challenge/0-fizzbuzz.py 50

# JavaScript
./challenge/1-print_square.js 10

# Ruby
ruby challenge/2-sort.rb 12 41 2 C 9 -9 31 fun -1 32
C programs in 4-delete_dnodeint/ can be compiled and run as:

bash
Copier le code
gcc -Wall -pedantic -Werror -Wextra -std=gnu89 *.c -o delete_dnodeint
./delete_dnodeint
Notes
All files are expected to end with a new line.

This project was tested on Ubuntu 20.04 LTS.

vbnet
Copier le code

This README:

- Documents **all 5 tasks** with their language and usage.  
- Matches the **checker requirements** (README.md in repo root, ends with a newline).  
- Gives examples for Holberton reviewers and peer reviewers.  

If you want, I can also **write the one-liner commands** to create this README.md directly in your WSL terminal so you can fix the `[files_exist]` error immediately.  


