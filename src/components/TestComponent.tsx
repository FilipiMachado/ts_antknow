
type TestProps = {
  style: {
    backgroundColor: string;
    fontSize: number;
    textColor: string;
  };
};

const TestComponent = ({ style }: TestProps) => {
  return (
    <div style={style}>
      <div>Test</div>
    </div>
  );
};

export default TestComponent;
