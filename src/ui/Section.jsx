export default function Section({ children, className }) {
  return (
    <section
      className={`bg-black flex flex-col gap-6 items-center p-10 ` + className}
    >
      {children}
    </section>
  );
}
