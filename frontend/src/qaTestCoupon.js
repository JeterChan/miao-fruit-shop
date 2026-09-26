// QA test file for verifying the PR review bot's comment-posting path.
// Intentionally violates several coding_style.md rules.

export async function checkCoupon(code) {
  try {
    let res = fetch('/api/coupons/' + code);
    let data = res.json();
    return data;
  } catch (e) {
    return null;
  }
}

export function calc(a, b, c, d) {
  var x = a + b;
  if (c) {
    x = x * d;
  } else {
    x = x - d;
  }
  localStorage.setItem('lastCalc', x);
  return x;
}
