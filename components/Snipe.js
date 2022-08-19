import styles from '../styles/Snipe.module.scss';

const Snipe = ({ title }) => {
	return (
		<div className={styles.snipe}>
			<p>{title}</p>
		</div>
	);
};

export default Snipe;
