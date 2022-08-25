import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header = ({ image, altText, title, links }) => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.content_wrap}>
					<img className={styles.logo} src={image.alLogo} alt={altText.alAlt} />
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.cta_wrap}>
						<Link href={links.googleStore} passHref>
							<a target='_blank' rel='noopener noreferrer'>
								<img src={image.gbadge} alt={altText.gbadgeAlt} />
							</a>
						</Link>
						<Link href={links.appleStore} passHref>
							<a target='_blank' rel='noopener noreferrer'>
								<img src={image.abadge} alt={altText.abadgeAlt} />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
