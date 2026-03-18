def wrap(string, max_width):
    return '\n'.join(string[i:i+max_width] for i in range(0, len(string), max_width))

if __name__ == '__main__':
    s = input()
    w = int(input())
    print(wrap(s, w))