

const DarkLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 10,
        borderRadius: 5,
      }}>
      <div>
        {children}
      </div>
    </div>
  )
}
export { DarkLayout }