const solution = s => {
    const range = [...Array(s.length)].map((_, i) => i + 1);
    return Math.min(...range.map(i => compress(s, i).length));
  };
  
  const compress = (s, n) => {
    const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
    return make(
      chunk(s, n).reduce(
        ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
        ['', '', 0]
      )
    );
  };
  
  const chunk = (s, n) =>
    s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];