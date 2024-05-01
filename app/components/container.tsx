interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex h-screen w-full cursor-default bg-white text-black">
      {children}
    </main>
  );
}
