interface CardProps {
  children: React.ReactNode;
}

const Card = ({children}: CardProps) => {
  return (
    <div className="dashboard-card">
      { children }
    </div>
  );
};

export default Card;