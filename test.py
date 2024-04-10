import sys
input = sys.stdin.readline

n = int(input())

def dfs(x, y):
    if x < 0 or x >= a or y < 0 or y >= b:
        return False
    if visited[x][y] == 1:
        visited[x][y] = 0
        dfs(x-1, y)
        dfs(x+1, y)
        dfs(x, y-1)
        dfs(x, y+1)
        return True
    return False

for i in range(n):
    a, b, c = map(int, input().split())
    baechu = []
    visited = [[0]*b for _ in range(a)]
    for j in range(c):
        x, y = map(int, input().split())
        baechu.append((x, y))
        visited[x][y] = 1
    cnt = 0
    for x, y in baechu:
        if dfs(x, y):
            cnt += 1
    print(cnt)