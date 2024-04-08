# import sys
# input = sys.stdin.readline

# word = input().strip()
# n = int(input())
# cursor = len(word)
# print(cursor)

# for i in range(n):
#     inputs = input().strip().split()
#     command = inputs[0]
    
#     if len(inputs) > 1:
#         char = inputs[1]
#     else:
#         char = None
    
#     # if command == 'P':

import sys

left_stack = list(input().strip())
right_stack = []
n = int(input())

for _ in range(n):
    command = sys.stdin.readline().strip().split()
    
    if command[0] == 'L' and left_stack:
        right_stack.append(left_stack.pop())
    elif command[0] == 'D' and right_stack:
        left_stack.append(right_stack.pop())
    elif command[0] == 'B' and left_stack:
        left_stack.pop()
    elif command[0] == 'P':
        left_stack.append(command[1])

result = ''.join(left_stack + right_stack[::-1])
print(result)
