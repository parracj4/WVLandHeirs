export default function LogoSection() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt=""
        className="w-full max-w-4xl opacity-[0.09]"
      />
    </div>
  );
}
