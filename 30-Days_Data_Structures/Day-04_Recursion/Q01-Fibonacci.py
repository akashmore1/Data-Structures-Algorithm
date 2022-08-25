# fibonacci(n) =  fibonacci(n - 1) + fibonacci(n - 2)

def find_fibonacci(num):
    if num == 0:
        return 0
    if num == 1:
        return 1

    fibonacci = find_fibonacci(num - 1) + find_fibonacci(num - 2)
    return fibonacci


print(find_fibonacci(40))
