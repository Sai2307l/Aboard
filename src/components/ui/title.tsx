import { cn } from "@/lib/utils";

function Title({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold text-shop_dark_green capitalize tracking-wide font-sans",
        className
      )}
    >
      {children}
    </h2>
  );
}

function SubTitle({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <h3 className={cn("font-semibold text-gray-900 font-sans", className)}>
      {children}
    </h3>
  );
}

function SubText({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <p className={cn("font-semibold text-gray-900 font-sans", className)}>
      {children}
    </p>
  );
}

export { Title, SubTitle, SubText };
