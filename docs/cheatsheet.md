# AmitabhC v4.0.0 Quick Reference

## Program Structure

```
LIGHTS
CAMERA
  // code here
ACTION
```

## Data Types

| Type | Syntax | Example |
|------|--------|---------|
| Number | literal | `42`, `3.14` |
| String | `"..."` / `'...'` | `"hello"`, supports `\n \t \\ \"` and `"${expr}"` interpolation |
| Boolean | `SHAKTI` / `KAALIA` | true / false |
| Null | `LAAWARIS` | null |
| Array | `{elements}` | `{1, 2, 3}` |
| Dictionary | `DEEWAR_BANAO{k:v}` | `DEEWAR_BANAO{"a": 1, "b": 2}` |

## All Keywords

| Keyword | Purpose | Keyword | Purpose |
|---------|---------|---------|---------|
| `LIGHTS` | Program start | `CAMERA` | Exec block start |
| `ACTION` | Program end | `BOLO` | Print output |
| `SUNO` | Read input | `VIJAY` | Declare variable |
| `DON` | Declare constant | `BADHAO` | Increment |
| `GHATAO` | Decrement | `SHAKTI` | true |
| `KAALIA` | false | `LAAWARIS` | null |
| `AGAR` | if | `NAHI TOH` | else |
| `NAHI TOH AGAR` | else-if | `BAS` | end if |
| `BAAR BAAR N` | for loop N times | `KHATAM` | end loop/try |
| `JAB TAK` | while | `RAHEGA` | end while |
| `HAR EK x MEIN arr` | for-each | `ZANJEER_LOOP` | do-while start |
| `TAB TAK` | do-while condition | `DEEWAR` | break |
| `SILSILA` | continue | `NAAM` | define function |
| `PURA` | end function | `WAPAS` | return |
| `AGNEEPATH` | try | `MRITYU` | catch |
| `PRATIGYA` | finally | `KBC_SAWAAL` | switch |
| `OPTION` | case | `SAHI_JAWAB` | default case |
| `AGLE_SAWAAL` | end switch | `DEEWAR_BANAO` | create dict |
| `DEEWAR_JODO` | add dict key | `INTEZAAR` | sleep (ms) |
| `BULAAO` | call function | `_GINTI` | loop counter |

## Operators

| Op | Desc | Op | Desc | Op | Desc |
|----|------|----|------|----|------|
| `+` | Add / concat | `-` | Subtract | `*` | Multiply |
| `/` | Divide | `%` | Modulo | `==` | Equal |
| `!=` | Not equal | `<` `>` | Compare | `<=` `>=` | Compare |
| `&&` | AND | `\|\|` | OR | `!` | NOT |
| `+=` `-=` `*=` `/=` `%=` | Compound assign | | | | |

## Control Flow

```
AGAR x > 10                    BAAR BAAR 5 MEIN i
  BOLO "big"                     BOLO i
NAHI TOH AGAR x > 5           KHATAM
  BOLO "medium"
NAHI TOH                       JAB TAK x < 10
  BOLO "small"                   BADHAO x
BAS                            RAHEGA

HAR EK item MEIN myArray       ZANJEER_LOOP
  BOLO item                      BADHAO x
KHATAM                         TAB TAK x < 10

KBC_SAWAAL color
  OPTION "red"
    BOLO "laal"
  SAHI_JAWAB
    BOLO "unknown"
AGLE_SAWAAL
```

## Functions and Error Handling

```
NAAM add(a, b)                 AGNEEPATH
  WAPAS a + b                   VIJAY x = 1 / 0
PURA                           MRITYU err
                                 BOLO "Caught: ${err}"
VIJAY result = add(3, 4)      PRATIGYA
BOLO result                      BOLO "cleanup"
                               KHATAM
```

## Built-in Functions

**SHAHENSHAH (String):** `length(s)` `uppercase(s)` `lowercase(s)` `trim(s)` `trimStart(s)` `trimEnd(s)` `contains(s,sub)` `replace(s,old,new)` `substring(s,start,end)` `charAt(s,i)` `indexOf(s,sub)` `lastIndexOf(s,sub)` `split(s,delim)` `startsWith(s,pre)` `endsWith(s,suf)` `repeat(s,n)` `reverse(s)` `padStart(s,len,ch)` `padEnd(s,len,ch)`

**COOLIE (Math):** `abs(n)` `floor(n)` `ceil(n)` `round(n)` `sqrt(n)` `pow(b,e)` `min(a,b)` `max(a,b)` `random()` `sin(n)` `cos(n)` `tan(n)` `log(n)` `PI()` `E()`

**KHAZANA (Array):** `length(arr)` `push(arr,val)` `pop(arr)` `shift(arr)` `unshift(arr,val)` `slice(arr,s,e)` `join(arr,sep)` `reverse(arr)` `includes(arr,val)` `indexOf(arr,val)` `concat(a1,a2)` `sort(arr)`

**NASEEB (Time):** `abhi()` `saal()` `mahina()` `din()` `ghanta()` `minute()` `second()` `tarikh()` `waqt()` `timestamp()`

**ZANJEER (Type):** `type(v)` `isAnk(v)` `isShabd(v)` `isKhazana(v)` `isShaktiKaalia(v)` `isLaawaris(v)` `isDeewar(v)` `toAnk(v)` `toShabd(v)` `toShaktiKaalia(v)`

**DEEWAR (Dictionary):** `keys(d)` `values(d)` `hasKey(d,k)` `remove(d,k)` `size(d)` `merge(d1,d2)`

## Error Messages

| Error Type | Dialogue |
|------------|----------|
| Undefined variable | "Don ko pakadna mushkil hi nahi, naamumkin hai!" |
| Type mismatch | "Aaj mere paas type hai, tumhare paas kya hai?" |
| Array out of bounds | "Hum jahan khade hote hain, line wahi se shuru hoti hai!" |
| Constant reassign | "Main aaj bhi phenke hue paise nahin uthata!" |
| Max call depth | "Deewar bahut oonchi ho gayi!" |
| Execution timeout | "Interval khatam!" |
| Loop overflow | "Picture abhi baaki hai, lekin time khatam!" |
| Loop count exceeded | "Baar baar mat bol!" |
| Syntax error | "Dialogue galat bol rahe ho!" |
| Function not found | "Yeh function toh aaya hi nahi!" |
| String too long | "Mere paas bahut zyada memory hai... lekin limit toh limit hai!" |
| Division by zero | "Zero se divide kaise kar sakte hain?" |

## Film Reference Key

| Keyword | Film | Keyword | Film |
|---------|------|---------|------|
| VIJAY | Deewar / Agneepath / Don | DON | Don (1978) |
| SHAKTI | Shakti (1982) | KAALIA | Kaalia (1981) |
| LAAWARIS | Laawaris (1981) | SHOLAY | Sholay (1975) |
| DEEWAR | Deewar (1975) | ZANJEER | Zanjeer (1973) |
| COOLIE | Coolie (1983) | AGNEEPATH | Agneepath (1990) |
| MRITYU | Mrityudaata (1997) | PRATIGYA | Pratigya (1975) |
| SILSILA | Silsila (1981) | NASEEB | Naseeb (1981) |
| SHAHENSHAH | Shahenshah (1988) | KHAZANA | Khazana (1987) |
| NAAM | Naam (1986) | KBC_SAWAAL | Kaun Banega Crorepati |
