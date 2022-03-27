

const RedLayout: React.FC = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(255,0,0,0.3)',
      padding: '20px',
      border: '1px solid black',
      borderRadius: '5px'
    }}>
      {children}
    </div>
  )
}
export { RedLayout }