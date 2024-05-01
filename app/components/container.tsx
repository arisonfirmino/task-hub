interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex h-screen w-full cursor-default flex-col bg-white text-black xl:flex-row">
      {children}
    </main>
  );
}
