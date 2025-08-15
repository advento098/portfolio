export default function Section({ id, children, className, custom = false }) {
  return (
    <section
      id={id}
      // className={`bg-black flex flex-col gap-6 items-center p-10 ` + className}
      className={
        custom
          ? className
          : `bg-black flex flex-col gap-6 items-center p-10 ` + className
      }
    >
      {children}
    </section>
  );
}
