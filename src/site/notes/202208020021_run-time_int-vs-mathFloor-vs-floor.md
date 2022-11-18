---
{"dg-publish":true,"permalink":"/202208020021-run-time-int-vs-math-floor-vs-floor/"}
---


# ==What is fastest?==
- # <font color='cccccc'>x</font>//<font color='cccccc'>y</font> 
- # int(<font color='cccccc'>x</font>/<font color='cccccc'>y</font>) 
- # divmod(<font color='cccccc'>x</font>,<font color='cccccc'>y</font>) 
- # math.floor(<font color='cccccc'>x</font>/<font color='cccccc'>y</font>)

---

# Result 
### ==<font color='cccccc'>x</font>//<font color='cccccc'>y</font>  >  math.floor(<font color='cccccc'>x</font>/<font color='cccccc'>y</font>)  $\approx$  divmod(<font color='cccccc'>x</font>,<font color='cccccc'>y</font>)  >  int(<font color='cccccc'>x</font>/<font color='cccccc'>y</font>)==


```bash
## if target_list == [1, 2, ..., 50]
int_func    	0.6427766656875611
floor_operator	0.15443019866943358
floor_func  	0.5732234811782837
divmod_func 	0.5602805376052856

## if target_list == [10000, 20000, ..., 500000]
int_func    	0.692458553314209
floor_operator	0.19934030532836913
floor_func  	0.571096487045288
divmod_func 	0.622396731376648
```

---

# Code

### ## x//y
```python
def floor_operator(target_list):
    for i in target_list:
        k = i//2
```

#### ## int(x/y)
```python
def int_func(target_list):
    for i in target_list:
        k = int(i/2)
```

#### ## divmod(x,y)
```python
def divmod_func(target_list):
    for i in target_list:
        k = divmod(i,2)[0]
```

#### ## math.floor(x/y)
```python
def floor_func(target_list):
    for i in target_list:
        k = math.floor(i/2)
```


---

# 실행 코드

```python
import time
import math

def int_func(target):
    for i in target:
        k = int(i/2)

def floor_operator(target):
    for i in target:
        k = i//2

def floor_func(target):
    for i in target:
        k = math.floor(i/2)

def divmod_func(target):
    for i in target:
        k = divmod(i,2)[0]

for size in [1,10000]:
    for func in [int_func, floor_operator, floor_func, divmod_func]:
        times = list()
        for _ in range(50):
            target = list(map(lambda x:size*x, range(50)))
            start = time.time()
            for _ in range(100000):
                func(target)
            times.append(time.time() - start)
        print(f"*{size}:\t{func.__name__}\t{sum(times)/len(times)}")
```
