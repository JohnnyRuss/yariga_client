export default function pretendLoading() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("done");
    }, 3000);
  });
}
