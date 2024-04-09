n = 7
def solution(n):
    answer = 0
    a = 1
    while True:
        for i in range(1,n+1):
            a *= i
            print(a)
            answer += 1
            if a > n:
                return answer - 1
            if a == n:
                return answer
        break
    return answer-1
print(solution(n))