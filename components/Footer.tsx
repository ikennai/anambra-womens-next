export default function Footer() {
  return (
    <footer className="bg-[#690639] text-white mt-auto">
      <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
        <p>
          <a href="/" className="text-white no-underline hover:underline">
            A.S.W.A.S.C.
          </a>{" "}
          &copy; {new Date().getFullYear()}
        </p>
        <p>
          Developed By:{" "}
          <a
            href="http://www.futuredesignworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-200 hover:underline"
          >
            Future Design Works
          </a>
        </p>
      </div>
    </footer>
  );
}
