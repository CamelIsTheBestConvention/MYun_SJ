def min_operations(A, B):
    count = 0
    while B > A:
        if B % 2 == 0:
            B //= 2
        elif str(B)[-1] == '1':
            B = int(str(B)[:-1])
        else:
            return -1
        count += 1

    return count + 1 if B == A else -1

A, B = map(int, input().split())

print(min_operations(A, B))