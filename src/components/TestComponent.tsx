
type TestProps = {
  children: React.ReactNode;
};

const TestComponent = ({ children }: TestProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default TestComponent;
