
levels = {
    "OR": {"range": [1, 15], "formats": ["decimal", "binary"], "weight": 0.1},
    "AND": {"range": [16, 255], "formats": ["decimal", "binary"], "weight": 0.2},
    "XOR": {"range": [10, 31], "formats": ["decimal", "binary", "hexadecimal"], "weight": 0.3},
    "NAND": {"range": [32, 255], "formats": ["decimal", "binary", "hexadecimal"], "weight": 0.4},
    "NOR": {"range": [19, 46], "formats": ["decimal", "binary", "hexadecimal"], "weight": 0.5},
    "XNOR": {"range": [48, 255], "formats": ["decimal", "binary", "hexadecimal"], "weight": 0.6},
}
