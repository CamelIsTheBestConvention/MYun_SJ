from itertools import permutations

N, M = map(int, input().split())
numbers = sorted(list(map(int, input().split())))

result_set = list(permutations(numbers, M))

for seq in sorted(result_set):
    print(' '.join(map(str, seq)))
