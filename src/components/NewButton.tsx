

const NewButton = (props: {
  bgColor: string;
}) => {
    const bgColor = props.bgColor

  return (
    <div className={bgColor}>
      <p>New Button Component</p>
    </div>
  )
}

export default NewButton;