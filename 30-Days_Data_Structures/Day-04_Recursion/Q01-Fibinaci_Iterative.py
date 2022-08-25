
def fibonacci(num):
    if num <= 1:
        return num;

    counter = 1
    prev = 0
    current = 1

    while counter <= num:
        nex = prev + current
        prev = current
        current = nex
        counter += 1

    return current


print(fibonacci(7))
