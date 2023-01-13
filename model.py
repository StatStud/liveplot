class Hydro:
    def __init__(self):
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index < 100:
            x = self.index
            y = x ** 2
            self.index += 1
            return x, y
        else:
            raise StopIteration
