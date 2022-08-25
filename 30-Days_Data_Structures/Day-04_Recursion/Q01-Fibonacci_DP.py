def fibonacci_dp(num):
    ht = {
        0: 0,
        1: 1
    }

    if num in ht:
        return ht[num]
    else:
        ht[num] = fibonacci_dp(num - 1) + fibonacci_dp(num - 2)
        return ht[num]


print(fibonacci_dp(30))
