function fibonacci(n) {
  const sequence = [0];
  if (n > 0) sequence.push(1);

  function generateFibonacci(num) {
    if (num <= 1) return;
    const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextValue);
    generateFibonacci(num - 1);
  }

  generateFibonacci(n);

  return [...sequence]; // Mengembalikan salinan array untuk memastikan hasilnya sesuai
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
