
type HeaderProps = {
  icon?: ReactSVGElement;
  title?: string;
  description?: string;
};

const Header = ({ icon, title, description }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <span>{icon}</span>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default Header;
